import { env } from "app/config/env"

export const shopifyUrls = {
  products: {
    'all': `${env.shopify.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
    mainProducts: `${env.shopify.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/312914510006/products.json`,
  },
  collections: {
    'all': `${env.shopify.SHOPIFY_HOSTNAME}/admin/api/2023-10/smart_collections.json`,
    'products': (id: string) => `${env.shopify.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/${id}/products.json`
  }
}