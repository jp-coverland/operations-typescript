export const HANDLE_QUERY = `
query GetProductByHandle($handle: String!) {
  productByHandle(handle: $handle) {
    id
    title
    descriptionHtml
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 100) {
      edges {
        node {
          id
          altText
          url
        }
      }
    }
    sellingPlanGroups(first: 10) {
      edges {
        node {
          name
          sellingPlans(first: 10) {
            edges {
              node {
                id
                name
                description
              }
            }
          }
        }
      }
    }
    variants(first: 100) {
      edges {
        node {
          id
          title
          barcode

          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
          metafields(
            identifiers: [
              { namespace: "custom", key: "is_preorder" }
              { namespace: "custom", key: "preorder_date" }
              { namespace: "custom", key: "preorder_discount" }
            ]
          ) {
            namespace
            key
            value
          }
          availableForSale
          sku
          image {
            altText
            url
          }
          sellingPlanAllocations(first: 10) {
            edges {
              node {
                sellingPlan {
                  id
                  name
                  description
                  deliveryPolicy {
                    ... on SellingPlanRecurringDeliveryPolicy {
                      interval
                      intervalCount
                    }
                  }

                  options {
                    name
                    value
                  }
                }
                priceAdjustments {
                  price {
                    amount
                    currencyCode
                  }
                  compareAtPrice {
                    amount
                    currencyCode
                  }
                  perDeliveryPrice {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
    vendor
    createdAt
    updatedAt
  }
}
`;
