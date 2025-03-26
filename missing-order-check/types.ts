import { Tables } from "./supabase";

export const MONARC_SKUS = [
  "CA-SC-10-F-25-BK-1TO",
  "CA-SC-10-B-28-BK-1TO",
  "CA-SC-10-B-44-BK-1TO",
  "CA-SC-10-F-10-BE-1TO",
  "CA-SC-10-F-11-BK-1TO",
  "CA-SC-10-F-14-BK-1TO",
  "CA-SC-10-F-30-BK-1TO",
  "CC-CC-15-CHCV11-GRBK-STR",
  "CC-CC-15-CHCV13-GRBK-STR",
  "CC-CN-03-K-GR-1TO",
  "CC-CN-03-N-GR-1TO",
  "CC-CN-03-T-GR-1TO",
  "CC-CP-03-J-GR-1TO",
  "CC-CP-03-L-GR-1TO",
  "CC-CP-03-M-GR-1TO",
  "CC-CS-03-M-GR-1TO",
  "CC-CS-03-N-GR-1TO",
  "CC-CS-10-K-GR-1TO",
  "CC-CS-15-I-GRBK-STR",
  "CC-SN-15-B-BKRD-STR",
  "CC-SN-15-D-BKRD-STR",
  "CC-SS-15-G-BKRD-STR",
  "CC-SS-15-I-BKRD-STR",
  "CC-SS-15-K-BKRD-STR",
  "CC-SS-15-M-BKRD-STR",
  "CC-SS-15-N-BKRD-STR",
  "CC-SS-15-R-BKRD-STR",
  "CC-TN-03-V-GR-1TO",
  "CC-TN-15-S-BKRD-STR",
  "CC-TN-15-V-BKGR-STR",
  "CC-TN-15-V-GRBK-STR",
  "CC-TNS-03-S-GR-1TO",
  "CC-TS-15-M-BKRD-STR",
  "CC-TS-15-R-BKRD-STR",
  "CC-TS-15-U-BKRD-STR",
  "CC-TS-15-U-GRBK-STR",
  "CC-TS-15-V-BKRD-STR",
  "CC-TS-15-W-GRBK-STR",
  "CC-TT-03-R-GR-1TO",
  "CC-TT-03-V-GR-1TO",
  "CC-TT-15-T-BKRD-STR",
];

// export type TCartItem = IProductData & { quantity: 1 };

export interface IProductData extends TInitialProductDataDB {
  fullProductName: string;
  mainImage: string;
  productImages: string | string[];
}
export type TInitialProductDataDB = Tables<"Products">;

export type CustomerInfo = {
  name: string;
  email: string;
  phoneNumber: string;
};

export type TCartItem = {
  id: string;
  sku: string;
  type: string;
  yearGeneration: string;
  make: string;
  model: string;
  submodel1: string;
  submodel2: string;
  submodel3: string;
  displayColor: string;
  displayID: string;
  displaySet: string;
  skulabsSKU: string;
  preorder: boolean;
  preorderDiscount: number;
  preorderDate: string;
  quantity: number;
  msrp: number;
};

const productsTableSelect = `id, sku, type, year_generation, make, model, submodel1, submodel2, submodel3, display_color, display_id, display_set, "skulabs SKU", preorder, preorder_discount, preorder_date`;

export type ShippingAddress = {
  shipping_address_line_1: string;
  shipping_address_line_2: string;
  shipping_address_city: string;
  shipping_address_state: string;
  shipping_address_postal_code: string;
  shipping_address_country: string;
};

export type SkuLabOrderInput = {
  orderNumber: string;
  cartItems: TCartItem[];
  orderTotal: number;
  shippingAddress: ShippingAddress;
  customerInfo: CustomerInfo;
  paymentMethod: string;
  tax: number;
  discount: number;
  shipping: number;
};

export type SkuLabOrderDTO = {
  store_id: string;
  order_number: string;
  stash: SkuLabStash;
};

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
  ship_by_date: string | null;
  tags: string[];
};

export type SkuLabOrderResponse = {
  data?: {
    success: boolean;
    store_id: string;
    order_number: string;
  };
  error?: string;
  status?: number;
};
