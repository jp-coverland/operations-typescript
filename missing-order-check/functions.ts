import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import fs from "fs";
import csv from "csv-parser";
import { DateTime } from "luxon";
import { TCartItem, ShippingAddress, MONARC_SKUS, SkuLabOrderInput, SkuLabOrderDTO, SkuLabOrderResponse } from "./types";
import { determineDeliveryByDateByShippingState, determineEarliestShippingDate } from "./deliveryDateUtils";

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

  const ordersTableSelect =
    "order_id, total_amount, total_tax, customer_name, customer_email, customer_phone, payment_gateway, shipping_address_line_1, shipping_address_line_2, shipping_address_city, shipping_address_state, shipping_address_postal_code, shipping_address_country";
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

const generateNote = (cartItems: TCartItem[], paymentMethod: string, shippingAddress: ShippingAddress, taxAmount: number) => {
  const subtotal = calculateSubtotal(cartItems);
  const taxPercentage = calculateTaxPercentage(taxAmount, subtotal);
  let remainingTax = taxAmount;

  const skuNameQuantity = cartItems.map((cartItem: TCartItem, index: number) => {
    const deliveryDate = determineDeliveryByDateByShippingState(
      shippingAddress.shipping_address_state ?? "",
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
        city: shippingAddress.shipping_address_city || "",
        country: shippingAddress.shipping_address_country,
        state: shippingAddress.shipping_address_state || "",
        zip: shippingAddress.shipping_address_postal_code || "",
        address: shippingAddress.shipping_address_line_1 || "",
        address_2: shippingAddress.shipping_address_line_2 || "",
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
