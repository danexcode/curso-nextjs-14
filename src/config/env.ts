export const env = {
  shopify: {
    SHOPIFY_TOKEN: process.env.SHOPIFY_TOKEN || "",
    SHOPIFY_HOSTNAME: process.env.SHOPIFY_HOSTNAME || "",
    CACHE_TOKEN: process.env.CACHE_TOKEN,
  },
  myCommerce: {
    hostname: process.env.MY_COMMERCE_HOSTNAME
  }
}