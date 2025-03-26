import { CustomerInfo } from "@/contexts/CheckoutContext";
import { StripeAddress } from "../types/checkout";
import { getCurrentDateInPST } from "./functions";
// import { getSkuLabItemId } from "../db/sku-labs";
import { determineDeliveryByDate, determineDeliveryByDateByShippingState, determineEarliestShippingDate, determineShippingDate } from "./deliveryDateUtils";
import { DateTime } from "luxon";
import { MONARC_SKUS, TCartItem } from "./types";
// import { SKU_LAB_SKU_ITEM_ID_MAP_TABLE } from '../constants/databaseTableNames';
import { supabaseDatabaseClient } from "./supabaseClients";

// Define the type for items within the stash
type SkuLabItem = {
  quantity: number;
  price: number;
  type: string;
  id?: string; // temp optional
  lineSku?: string; // temp optional
  lineName?: string; // temp optional
};

// Define the type for shipping information within the stash
type SkuLabShippingInformation = {
  name: string;
  phone: string;
  email: string;
  company: string;
  city: string;
  country: string;
  state: string;
  zip: string;
  address: string;
  address_2: string;
  method: string;
};

// Define the type for the stash itself
type SkuLabStash = {
  store_id: string;
  type: string;
  id: string;
  notes: string;
  date: string;
  items: SkuLabItem[];
  discount: number;
  shipping: number;
  financial_status: string;
  tax: number;
  total: number;
  shipping_information: SkuLabShippingInformation;
  tags: string[];
};

// Define the type for the main structure
type SkuLabOrderDTO = {
  store_id: string;
  order_number: string;
  stash: SkuLabStash;
};

type SkuLabOrderInput = {
  orderNumber: string;
  cartItems: TCartItem[];
  orderTotal: number;
  shippingAddress: StripeAddress;
  customerInfo: CustomerInfo;
  paymentMethod: string;
  tax: number;
  discount: number;
  shipping: number;
};

/**
 * Generates the note for SKU Labs so CSRs can see SKU, item name, and quantity
 * @param cartItems
 * @returns
 */
const generateNote = (cartItems: TCartItem[], paymentMethod: string, shippingAddress: StripeAddress) => {
  const skuNameQuantity = cartItems.map((cartItem: TCartItem) => {
    const deliveryDate = determineDeliveryByDateByShippingState(
      shippingAddress.address.state ?? "",
      "MM/dd/yyyy",
      cartItem?.preorder ? cartItem?.preorder_date ?? "" : undefined
    );

    const formattedPreorderDate = cartItem?.preorder
      ? DateTime.fromISO(cartItem?.preorder_date).isValid
        ? DateTime.fromISO(cartItem?.preorder_date).toFormat("MM/dd/yyyy")
        : null
      : null;

    const itemName = `${cartItem?.year_generation || ""} ${cartItem?.make || ""} ${cartItem?.model || ""} ${cartItem?.submodel1 ? cartItem?.submodel1 : ""} ${
      cartItem?.submodel2 ? cartItem?.submodel2 : ""
    }  ${cartItem?.submodel3 ? cartItem?.submodel3 : ""} ${cartItem.type} ${cartItem?.display_id} ${cartItem?.display_color}`
      .replace(/\s+/g, " ")
      .trim();
    return `${cartItem.sku}\n${itemName}\nQuantity: ${cartItem.quantity}\nPreorder / Ship Date: ${formattedPreorderDate}\nEstimated Delivery Date: ${deliveryDate}`;
  });

  return `Payment Method: ${paymentMethod}\n${skuNameQuantity.join("\n")}`;
};

const determineSkuLabInventoryType = (cartItem: TCartItem) => {
  return cartItem.display_set === "Full Seat Set" ? "kit" : "item";
};

const generateItems = async (cartItems: TCartItem[]) => {
  return Promise.all(
    cartItems.map(async (cartItem) => {
      const type = determineSkuLabInventoryType(cartItem);
      const skuLabItemId = await getSkuLabItemId(cartItem["skulabs SKU"] || "", type);

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

/**
 * 6328f5c3c3ea0aede729f817 - Coverland
 * 6691657a10b91213fbebbecb - Preorder
 * 67ab78572d36fc6253001f56 - Monarc
 * @param orderNumber
 * @param cartItems
 * @returns
 */
function generateTags(orderNumber: string, cartItems: TCartItem[]) {
  const tags = new Set(["Coverland"]);

  if (orderNumber.includes("PRE")) {
    tags.add("PRE-ORDER");
  }
  for (const cartItem of cartItems) {
    if (MONARC_SKUS.includes(cartItem["skulabs SKU"] || "")) tags.add("Monarc");
  }
  return Array.from(tags);
}

export const SKU_LAB_SKU_ITEM_ID_MAP_TABLE = "sku_lab_sku_item_id_map";

export async function getSkuLabItemId(sku: string, type: "kit" | "item") {
  try {
    const { data, error } = await supabaseDatabaseClient.from(SKU_LAB_SKU_ITEM_ID_MAP_TABLE).select("item_id").eq("sku", sku).eq("type", type).maybeSingle();

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
  const notes = generateNote(cartItems, paymentMethod, shippingAddress);
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
      items,
      discount, // TODO: Currently no promo, but we have preorder
      shipping, // TODO: Currently no shipping, but need to update later
      financial_status: "",
      tax,
      total: orderTotal,
      ship_by_date: determineEarliestShippingDate(cartItems),
      shipping_information: {
        name: shippingAddress.name,
        phone: shippingAddress.phone || "",
        email: customerInfo.email,
        company: "",
        city: shippingAddress.address.city || "",
        country: shippingAddress.address.country,
        state: shippingAddress.address.state || "",
        zip: shippingAddress.address.postal_code || "",
        address: shippingAddress.address.line1 || "",
        address_2: shippingAddress.address.line2 || "",
        method: "2 day free shipping",
      },
      tags,
    },
  };
};
