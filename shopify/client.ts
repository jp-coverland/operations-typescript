import { createStorefrontApiClient } from "@shopify/storefront-api-client";
import dotenv from "dotenv";

dotenv.config();
const NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_URL = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_URL;
const NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

if (!NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_URL || !NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
  throw new Error("Missing Shopify production environment variables");
}

export const shopifyProductionClient = createStorefrontApiClient({
  storeDomain: NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_URL,
  apiVersion: "2025-04",
  publicAccessToken: NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
});

const NEXT_PUBLIC_SHOPIFY_STAGING_STOREFRONT_API_URL = process.env.NEXT_PUBLIC_SHOPIFY_STAGING_STOREFRONT_API_URL;
const NEXT_PUBLIC_SHOPIFY_STAGING_STOREFRONT_ACCESS_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STAGING_STOREFRONT_ACCESS_TOKEN;

if (!NEXT_PUBLIC_SHOPIFY_STAGING_STOREFRONT_API_URL || !NEXT_PUBLIC_SHOPIFY_STAGING_STOREFRONT_ACCESS_TOKEN) {
  throw new Error("Missing Shopify staging environment variables");
}

export const shopifyStagingClient = createStorefrontApiClient({
  storeDomain: NEXT_PUBLIC_SHOPIFY_STAGING_STOREFRONT_API_URL,
  apiVersion: "2025-07",
  publicAccessToken: NEXT_PUBLIC_SHOPIFY_STAGING_STOREFRONT_ACCESS_TOKEN,
});
