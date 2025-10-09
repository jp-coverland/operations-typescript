import { createStorefrontApiClient } from "@shopify/storefront-api-client";
import dotenv from "dotenv";

dotenv.config();
const NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_URL = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_URL;
const NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

if (!NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_URL || !NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
  throw new Error("Missing Shopify environment variables");
}

export const shopifyClient = createStorefrontApiClient({
  storeDomain: NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_URL,
  apiVersion: "2025-07",
  publicAccessToken: NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
});
