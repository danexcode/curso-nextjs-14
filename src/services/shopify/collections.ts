import { env } from "app/config/env";
import { shopifyUrls } from "./urls";

export const getCollections = async () => {
  try {
    const response = await fetch(shopifyUrls.collections.all, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.shopify.SHOPIFY_TOKEN,
      }),
    });
    const { smart_collections } = await response.json();
    return smart_collections;
  } catch (error) {
    console.log(error);
  }
};

export const getCollectionProducts = async (id: string) => {
  try {
    const response = await fetch(shopifyUrls.collections.products(id), {
      headers: new Headers({
        "X-Shopify-Access-Token": env.shopify.SHOPIFY_TOKEN,
      }),
    });
    const { products } = await response.json();
    return products;
  } catch (error) {
    console.log(error);
  }
};
