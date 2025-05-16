import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import fs from "fs";
import csv from "csv-parser";
import { DateTime } from "luxon";
import {
  TCartItem,
  ShippingAddress,
  MONARC_SKUS,
  SkuLabOrderInput,
  SkuLabOrderDTO,
  SkuLabOrderResponse,
  LinnWorksOrderRequest,
  LinnWorksOrder,
  CustomerInfo,
  Address,
  LinnWorksOrderItem,
} from "./types";
import { determineDeliveryByDateByShippingState, determineEarliestShippingDate, determineLatestShippingDate } from "./deliveryDateUtils";
import { getAuthToken } from "../linnworks/authorize";

dotenv.config();
const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const NEXT_PUBLIC_SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SKU_LABS_API_KEY = process.env.SKU_LABS_API_KEY;

if (!NEXT_PUBLIC_SUPABASE_URL || !NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY);

export async function readCSVOrderNumbers(filePath: string): Promise<string[]> {
  const orderNumbers: string[] = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => {
        const orderNumberFromCSV = row[Object.keys(row)[0]];
        if (orderNumberFromCSV) {
          orderNumbers.push(orderNumberFromCSV);
        }
      })
      .on("end", () => {
        console.log("CSV file successfully processed.");
        resolve(orderNumbers);
      })
      .on("error", (error) => {
        console.error("Error reading CSV file:", error);
        reject(error);
      });
  });
}

export const getCurrentDateInPST = () => {
  const pstDate = DateTime.now().setZone("America/Los_Angeles").toISO();
  return pstDate;
};

export async function getSupabaseQuery(orderNumbers: string[]) {
  if (orderNumbers.length === 0) {
    console.warn("No order numbers provided for the Supabase query.");
    return { data: [], error: null };
  }

  const ordersTableSelect = `order_id, total_amount, total_tax, customer_name, customer_email, customer_phone, payment_gateway, 
    shipping_address_line_1, shipping_address_line_2, shipping_address_city, shipping_address_state, shipping_address_postal_code, shipping_address_country, 
    billing_address_line_1, billing_address_line_2, billing_address_city, billing_address_state, billing_address_postal_code, billing_address_country`;
  const productsTableSelect = `id, sku, type, year_generation, make, model, submodel1, submodel2, submodel3, display_color, display_id, display_set, "skulabs SKU", preorder, preorder_discount, preorder_date, msrp`;

  const { data, error } = await supabase
    .from("_Orders")
    .select(
      `
        ${ordersTableSelect},
        orderItems:orderItems_table (
          id, quantity,
          product:Products (
           ${productsTableSelect} 
          )
        )
      `
    )
    .in("order_id", orderNumbers);

  if (error) {
    console.error("Supabase query error:", error);
    return { data: [], error };
  }

  return { data, error: null };
}

const calculateSubtotal = (cartItems: TCartItem[]) => {
  // Check if cartItems exists and is an array
  if (!cartItems || !Array.isArray(cartItems)) {
    return 0;
  }

  // Use reduce to calculate the subtotal
  const subtotal = cartItems.reduce((accumulator, item) => {
    // Check if the item has a valid MSRP
    const itemPrice = item.msrp || 0;

    // Add the item price to the accumulator
    return accumulator + itemPrice;
  }, 0);

  return subtotal;
};

const calculateTaxPercentage = (taxAmount: number, subtotal: number) => {
  // Avoid division by zero
  if (subtotal === 0 || !subtotal) {
    return 0;
  }

  // Calculate the tax percentage and convert to percentage format
  const taxPercentage = (taxAmount / subtotal) * 100;

  // Return rounded to 2 decimal places
  return parseFloat(taxPercentage.toFixed(2));
};

const generateNote = (cartItems: TCartItem[], paymentMethod: string, shippingAddress: Address, taxAmount: number) => {
  const subtotal = calculateSubtotal(cartItems);
  const taxPercentage = calculateTaxPercentage(taxAmount, subtotal);
  let remainingTax = taxAmount;

  const skuNameQuantity = cartItems.map((cartItem: TCartItem, index: number) => {
    const deliveryDate = determineDeliveryByDateByShippingState(
      shippingAddress.address_state ?? "",
      "MM/dd/yyyy",
      cartItem?.preorder ? cartItem?.preorderDate ?? "" : undefined
    );

    const formattedPreorderDate = cartItem?.preorder
      ? DateTime.fromISO(cartItem?.preorderDate).isValid
        ? DateTime.fromISO(cartItem?.preorderDate).toFormat("MM/dd/yyyy")
        : null
      : null;

    const itemName = `${cartItem?.yearGeneration || ""} ${cartItem?.make || ""} ${cartItem?.model || ""} ${cartItem?.submodel1 ? cartItem?.submodel1 : ""} ${
      cartItem?.submodel2 ? cartItem?.submodel2 : ""
    }  ${cartItem?.submodel3 ? cartItem?.submodel3 : ""} ${cartItem.type} ${cartItem?.displayID} ${cartItem?.displayColor}`
      .replace(/\s+/g, " ")
      .trim();

    const itemSubTotal = (cartItem?.msrp || 0) * (Number(cartItem?.quantity) || 1);
    const proportion = itemSubTotal / subtotal;

    let itemTaxAmount = 0;

    // For the last item, use remaining tax to avoid rounding issues
    if (index === cartItems.length - 1) {
      itemTaxAmount = parseFloat(remainingTax.toFixed(2));
    } else {
      // Calculate proportional tax and round to 2 decimal places
      itemTaxAmount = parseFloat((proportion * taxAmount).toFixed(2));
      remainingTax -= itemTaxAmount;
    }

    // const itemTotal = (itemSubTotal + itemTaxAmount - (cartItem?.preorderDiscount || 0)).toFixed(2);

    return `${cartItem.sku}\n${itemName}\nQuantity: ${cartItem.quantity}\nPreorder / Ship Date: ${formattedPreorderDate}\nEstimated Delivery Date: ${deliveryDate}\nTax: $${itemTaxAmount} (${taxPercentage}%)`;
  });

  const paymentMethodCapitalize = paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1);
  return `Payment Method: ${paymentMethodCapitalize}\n${skuNameQuantity.join("\n")}`;
};

const determineSkuLabInventoryType = (cartItem: TCartItem) => {
  return cartItem.displaySet === "Full Seat Set" ? "kit" : "item";
};

const generateItems = async (cartItems: TCartItem[]) => {
  return Promise.all(
    cartItems.map(async (cartItem) => {
      const type = determineSkuLabInventoryType(cartItem);
      const skuLabItemId = await getSkuLabItemId(cartItem["skulabsSKU"] || "", type);

      return {
        quantity: cartItem.quantity as unknown as number,
        price: cartItem.msrp as number,
        type, // Item Or Kit (for Full Seat Cover bundle)
        // lineSku: '', // In the future will need to grab the SKU Lab sku
        id: skuLabItemId,
        // lineName: '' // In the future need to grab SKU Lab lineName
        // lineId: '' // In the future will need to grab from SKU Lab
      };
    })
  );
};

function generateTags(orderNumber: string, cartItems: TCartItem[]) {
  const tags = new Set(["Coverland"]);

  if (orderNumber.includes("PRE")) {
    tags.add("PRE-ORDER");
  }
  for (const cartItem of cartItems) {
    if (MONARC_SKUS.includes(cartItem["skulabsSKU"] || "")) tags.add("Monarc");
  }
  return Array.from(tags);
}

export const SKU_LAB_SKU_ITEM_ID_MAP_TABLE = "sku_lab_sku_item_id_map";
export async function getSkuLabItemId(sku: string, type: "kit" | "item") {
  try {
    const { data, error } = await supabase.from(SKU_LAB_SKU_ITEM_ID_MAP_TABLE).select("item_id").eq("sku", sku).eq("type", type).maybeSingle();

    if (error) {
      if (error.code === "PGRST116") {
        // This error code indicates no rows were returned
        console.warn(`[getSkuLabItemId]: No item found for sku: ${sku}`);
        return null;
      }
      throw new Error(`[getSkuLabItemId]: Failed to fetch item with sku: ${sku}. ${error.message}`);
    }

    return data?.item_id ?? null;
  } catch (error) {
    console.error(`[getSkuLabItemId]: An unexpected error occurred`, error);
    throw error; // Re-throw the error for the caller to handle
  }
}

export const generateSkuLabOrderInput = async ({
  orderNumber,
  cartItems,
  orderTotal,
  shippingAddress,
  customerInfo,
  paymentMethod,
  tax,
  discount,
  shipping,
}: SkuLabOrderInput): Promise<SkuLabOrderDTO> => {
  const notes = generateNote(cartItems, paymentMethod, shippingAddress, tax);
  const tags = generateTags(orderNumber, cartItems);
  const items = await generateItems(cartItems);
  return {
    store_id: "62f0fcbffc3f4e916f865d6a", // Hard Coded for now
    order_number: orderNumber,
    stash: {
      store_id: "62f0fcbffc3f4e916f865d6a", // Hard Coded for now, must match store_id higher up
      type: "manual",
      id: orderNumber,
      notes: notes,
      date: getCurrentDateInPST() as string,
      items: items,
      discount, // TODO: Currently no promo, but we have preorder
      shipping, // TODO: Currently no shipping, but need to update later
      financial_status: "",
      tax,
      total: orderTotal,
      ship_by_date: determineEarliestShippingDate(cartItems),
      shipping_information: {
        name: customerInfo.name,
        phone: customerInfo.phoneNumber || "",
        email: customerInfo.email,
        company: "",
        city: shippingAddress.address_city || "",
        country: shippingAddress.address_country,
        state: shippingAddress.address_state || "",
        zip: shippingAddress.address_postal_code || "",
        address: shippingAddress.address_line_1 || "",
        address_2: shippingAddress.address_line_2 || "",
        method: "2 day free shipping",
      },
      tags: tags,
    },
  };
};

const SKU_LAB_URL = "https://api.skulabs.com";

export async function postSkuLabsOrder(orderInfo: SkuLabOrderDTO): Promise<SkuLabOrderResponse> {
  if (!orderInfo) {
    return { error: "Order Info is required", status: 400 };
  }

  try {
    const response = await fetch(`${SKU_LAB_URL}/order/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SKU_LABS_API_KEY}`,
      },
      body: JSON.stringify({ ...orderInfo }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(`${JSON.stringify(errorResponse.error, null, 2)}`);
    }

    const data = await response.json();

    return {
      data: data,
      status: 200,
    };
  } catch (error) {
    // console.error("[SKU Lab Orders POST]: An unexpected error occurred:", error);
    return { error: `[SKU Lab Orders POST]: An unexpected error occurred: ${error}`, status: 500 };
  }
}

export const mapOrderItemsToCartItems = (orderItems: any[]): TCartItem[] => {
  return orderItems.map((item) => ({
    id: item.id, // Convert to string if needed
    sku: item.product.sku,
    type: item.product.type,
    yearGeneration: item.product.year_generation,
    make: item.product.make,
    model: item.product.model,
    submodel1: item.product.submodel1,
    submodel2: item.product.submodel2,
    submodel3: item.product.submodel3,
    displayColor: item.product.display_color,
    displayID: item.product.display_id,
    displaySet: item.product.display_set,
    skulabsSKU: item.product["skulabs SKU"], // Handling space in key
    preorder: item.product.preorder, // Convert to string if needed
    preorderDiscount: item.product.preorder_discount,
    preorderDate: item.product.preorder_date ?? "",
    quantity: item.quantity, // Default to 1 (change if necessary)
    msrp: item.product.msrp,
  }));
};

export async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const generateLinnWorksOrderInput = async ({
  orderNumber,
  cartItems,
  shippingAddress,
  billingAddress,
  customerInfo,
  paymentMethod,
  tax,
  shipping,
}: any): Promise<LinnWorksOrderRequest> => {
  const orders = await mapLinnWorksOrderRequest(orderNumber, cartItems, shippingAddress, billingAddress, customerInfo, paymentMethod, tax, shipping);
  const location = orderNumber.includes("-PRE-") ? "Virtual Warehouse" : "default";
  return {
    location, // Don't know
    orders,
  };
};

export async function mapLinnWorksOrderRequest(
  orderNumber: string,
  cartItems: TCartItem[],
  shippingAddress: Address,
  billingAddress: Address,
  customerInfo: CustomerInfo,
  paymentMethod: string,
  taxAmount: number,
  shipping: number
): Promise<LinnWorksOrder[]> {
  const subtotal = calculateSubtotal(cartItems);
  const taxPercentage = calculateTaxPercentage(taxAmount, subtotal);

  // 1. Expand cart items by quantity
  const expandedCartItems: TCartItem[] = [];

  cartItems.forEach((item) => {
    const quantity = item.quantity as number;
    // Create individual items for each quantity
    for (let i = 0; i < quantity; i++) {
      // Create a copy of the item with quantity of 1
      expandedCartItems.push({
        ...item,
        quantity: 1,
      });
    }
  });

  // 2. Group expanded items by SKU
  const groupedBySku = expandedCartItems.reduce<Record<string, TCartItem[]>>((groups, item) => {
    const sku = item.sku;
    if (!groups[sku]) {
      groups[sku] = [];
    }
    groups[sku].push(item);
    return groups;
  }, {});

  // 3. Calculate totals based on post-discount prices
  let totalPostDiscountValue = 0;
  const itemFinancials: any = {};

  // Calculate each item's financial values
  expandedCartItems.forEach((item, index) => {
    const rawPrice = item.msrp;
    const preorderDiscount = item.preorderDiscount || 0;
    const postDiscountPrice = rawPrice - preorderDiscount;

    // Store financial data for this item
    itemFinancials[index] = {
      rawPrice,
      preorderDiscount,
      postDiscountPrice,
    };

    // Add to total post-discount value
    totalPostDiscountValue += postDiscountPrice;
  });

  const orders = [];

  // 4. Create one order per item
  for (let i = 0; i < expandedCartItems.length; i++) {
    const item = expandedCartItems[i];
    const financials = itemFinancials[i];

    // Calculate proportion based on post-discount price
    const proportion = financials.postDiscountPrice / totalPostDiscountValue;

    // Calculate tax for this item
    const taxableAmount = financials.rawPrice - financials.preorderDiscount;
    const itemTax = Number(taxableAmount * (taxPercentage / 100));

    // Allocate shipping proportionally
    const itemShipping = Number(shipping * proportion);

    // Generate suffix for orders except when only one item exists
    const currentOrderNumber = expandedCartItems.length === 1 ? orderNumber : `${orderNumber}-${i + 1}`;

    // Create the order item
    const orderItem = await generateLinnWorksOrderItem(item, taxPercentage);

    const order = {
      Source: "Coverland Website",
      SubSource: "Coverland",
      ReferenceNumber: currentOrderNumber,
      SecondaryReferenceNumber: orderNumber,
      ReceivedDate: getCurrentDateInPST() as string,
      DispatchBy: determineLatestShippingDate([item]) as string,
      DespatchByDate: determineLatestShippingDate([item]) as string,
      UseChannelTax: true,
      AutomaticallyLinkBySKU: true,
      MatchPaymentMethodTag: paymentMethod,
      PaymentMethodName: paymentMethod,
      PaymentStatus: "Paid",
      Currency: "USD",
      OrderIdentifierTags: generateTags(orderNumber, [item]),
      BillingAddress: generateLinnWorksAddress(billingAddress, customerInfo),
      DeliveryAddress: generateLinnWorksAddress(shippingAddress, customerInfo),
      OrderItems: Array.isArray(orderItem) ? orderItem : [orderItem],
      Notes: [generateLinnWorksNotes([item], paymentMethod, shippingAddress, itemTax)],
      PostalServiceCost: itemShipping,
      PostalServiceDiscount: 0,
      PostalServiceTaxRate: 0,
    };
    orders.push(order);
  }

  return orders;
}

function generateLinnWorksNotes(cartItems: TCartItem[], paymentMethod: string, shippingAddress: Address, taxAmount: number) {
  const note = generateNote(cartItems, paymentMethod, shippingAddress, taxAmount);
  return {
    Note: note,
    NoteEntryDate: getCurrentDateInPST() as string,
    NoteUserName: "Coverland Website",
    Internal: true,
  };
}

function generateLinnWorksAddress(address: Address, customerInfo: CustomerInfo) {
  return {
    FullName: customerInfo.name,
    Address1: address.address_line_1 || "",
    Address2: address.address_line_2 || "",
    Town: address.address_city || "",
    Region: address.address_state || "",
    PostCode: address.address_postal_code || "",
    Country: getCountryName(address.address_country) || "",
    PhoneNumber: customerInfo.phoneNumber || "",
    EmailAddress: customerInfo.email,
  };
}

export const getCountryName = (isoCode: string, locale = "en") => {
  return new Intl.DisplayNames([locale], { type: "region" }).of(isoCode);
};

async function generateLinnWorksOrderItem(cartItem: TCartItem, taxPercentage: number): Promise<any> {
  // Check if this is a full seat set
  if (cartItem.displaySet === "Full Seat Set") {
    try {
      // Get the component items
      const components = await getCompositeItems(cartItem.skulabsSKU);

      if (components) {
        // Create two Linnworks order items, one for front and one for back
        const orderItems: LinnWorksOrderItem[] = [];

        // Front item
        const frontItem: LinnWorksOrderItem = {
          TaxCostInclusive: false,
          UseChannelTax: true,
          PricePerUnit: cartItem.msrp || 0, // Split the price evenly between components
          Qty: cartItem.quantity,
          TaxRate: taxPercentage,
          LineDiscount: calculatePreorderDiscountPercentage(cartItem, Number(cartItem.preorderDiscount) || 0),
          ChannelSKU: components.frontSku,
          ItemNumber: components.frontSku,
          IsService: false,
          ItemTitle: `${cartItem?.yearGeneration || ""} ${cartItem?.make || ""} ${cartItem?.model || ""} Front Seat Cover ${cartItem?.displayColor}`.trim(),
        };

        // Back item
        const backItem: LinnWorksOrderItem = {
          TaxCostInclusive: false,
          UseChannelTax: true,
          PricePerUnit: 0, // Split the price evenly between components
          Qty: cartItem.quantity,
          TaxRate: 0,
          LineDiscount: 0,
          ChannelSKU: components.backSku,
          ItemNumber: components.backSku,
          IsService: false,
          ItemTitle: `${cartItem?.yearGeneration || ""} ${cartItem?.make || ""} ${cartItem?.model || ""} Back Seat Cover ${cartItem?.displayColor}`.trim(),
        };

        orderItems.push(frontItem, backItem);

        return orderItems;
      }
    } catch (error) {
      console.error(`Failed to process full seat set ${cartItem.sku}:`, error);
      // Fall back to regular processing if component fetching fails
    }
  }
  const discountPercentage = calculatePreorderDiscountPercentage(cartItem, Number(cartItem.preorderDiscount) || 0);

  const itemName = `${cartItem?.yearGeneration || ""} ${cartItem?.make || ""} ${cartItem?.model || ""} ${cartItem?.submodel1 ? cartItem?.submodel1 : ""} ${
    cartItem?.submodel2 ? cartItem?.submodel2 : ""
  }  ${cartItem?.submodel3 ? cartItem?.submodel3 : ""} ${cartItem.type} ${cartItem?.displayID} ${cartItem?.displayColor}`
    .replace(/\s+/g, " ")
    .trim();

  return {
    TaxCostInclusive: false,
    UseChannelTax: true,
    PricePerUnit: cartItem.msrp,
    Qty: cartItem.quantity, // This will always be 1 in our expanded items
    TaxRate: taxPercentage,
    LineDiscount: discountPercentage,
    ChannelSKU: cartItem.skulabsSKU,
    ItemNumber: cartItem.sku,
    IsService: false,
    ItemTitle: itemName,
  };
}

const LINN_WORKS_URL = "https://us-ext.linnworks.net/api";
const LIN_WORKS_AUTH_URL = "https://api.linnworks.net/api";

// Function to get component items for a full seat set
export async function getCompositeItems(fullSetSku: string): Promise<{ frontSku: string; backSku: string } | null> {
  if (!fullSetSku) throw new Error("Full set SKU is required");

  // 1. Check in Supabase
  const { data, error } = await supabase.from("linnworks_full_set_component_map").select("front_sku, back_sku").eq("full_set_sku", fullSetSku).single();

  if (!error && data) {
    console.log(`Found mapping in database for SKU: ${fullSetSku}`);
    return { frontSku: data.front_sku, backSku: data.back_sku };
  }

  // 2. If not in database, get from Linnworks
  console.info(`No mapping found in database for full set SKU: ${fullSetSku}, fetching from Linnworks`);
  const AUTH_TOKEN = await getAuthToken();

  // First, get the inventory item to get the StockItemId
  const inventoryItemResponse = await fetch(`${LINN_WORKS_URL}/Inventory/GetInventoryItem?sKU=${encodeURIComponent(fullSetSku)}`, {
    headers: {
      Authorization: `${AUTH_TOKEN}`,
    },
  });
  if (!inventoryItemResponse.ok) throw new Error(`Inventory item not found for SKU: ${fullSetSku} | ${inventoryItemResponse.statusText}`);
  const inventoryItem = await inventoryItemResponse.json();

  // Check if it's actually a composite parent
  if (!inventoryItem.IsCompositeParent) throw new Error(`${fullSetSku} is not a composite parent`);
  const fullSetStockItemId = inventoryItem.StockItemId;

  // Now get the compositions
  const compositionsResponse = await fetch(`${LINN_WORKS_URL}/Inventory/GetInventoryItemCompositions?inventoryItemId=${fullSetStockItemId}`, {
    headers: { Authorization: AUTH_TOKEN },
  });
  if (!compositionsResponse.ok) throw new Error(`Failed to fetch compositions: ${compositionsResponse.statusText}`);
  const compositions = await compositionsResponse.json();

  const frontComponent = compositions.find((c: any) => c.SKU.includes("-F-"));
  const backComponent = compositions.find((c: any) => c.SKU.includes("-B-"));
  if (!frontComponent || !backComponent)
    throw new Error(`Front or back component not found:\n full: ${fullSetSku} foundFrount: ${!!frontComponent} foundBack: ${!!backComponent}`);

  // Save to database for future use
  try {
    const record = {
      full_set_sku: fullSetSku,
      front_sku: frontComponent.SKU,
      back_sku: backComponent.SKU,
      full_set_stock_item_id: fullSetStockItemId,
      front_stock_item_id: frontComponent.LinkedStockItemId,
      back_stock_item_id: backComponent.LinkedStockItemId,
      updated_at: new Date().toISOString(),
    };

    await supabase.from("linnworks_full_set_component_map").upsert(record, {
      onConflict: "full_set_sku",
      ignoreDuplicates: false,
    });
  } catch (dbError) {
    console.error("Error saving component mapping to database:", dbError);
    // We'll continue even if saving to DB fails
  }

  console.log(`Successfully found components for ${fullSetSku}`, {
    frontSku: frontComponent.SKU,
    backSku: backComponent.SKU,
  });

  return { frontSku: frontComponent.SKU, backSku: backComponent.SKU };
}

export const calculatePreorderDiscountPercentage = (cartItem: TCartItem, preorderDiscount: number): number => {
  if (!cartItem || typeof cartItem.msrp !== "number" || cartItem.msrp <= 0) {
    return 0;
  }

  if (typeof preorderDiscount !== "number" || preorderDiscount <= 0) {
    return 0;
  }

  const discountPercentage = (preorderDiscount / cartItem.msrp) * 100;

  return discountPercentage;
};

export async function postLinnworksOrder(order: LinnWorksOrderRequest) {
  const AUTH_TOKEN = await getAuthToken();

  try {
    const response = await fetch(`${LINN_WORKS_URL}/Orders/CreateOrders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${AUTH_TOKEN}`,
      },
      body: JSON.stringify(order),
    });

    if (!response.ok) {
      let errorMessage = `[LinnWorks Orders POST]: Network response was not ok`;

      try {
        const errorData = await response.json(); // Try to parse JSON error response

        errorMessage += `: ${JSON.stringify(errorData, null, 2)}`;
      } catch (err) {
        errorMessage += `: ${await response.text()}`; // Fallback to raw text if JSON parsing fails
      }

      console.error("Response:", response);
      throw new Error(errorMessage);
    }

    const data = await response.json();
    console.info("[LinnWorks Orders Post] Data:", data);

    return {
      data: data,
      status: 200,
    };
  } catch (error) {
    console.error("[LinnWorks Orders POST]: An unexpected error occurred:", error);
    return {
      error: "[LinnWorks Orders POST]: An unexpected error occurred",
      status: 500,
    };
  }
}
