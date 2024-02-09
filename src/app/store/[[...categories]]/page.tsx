import { ProductsWrapper } from "app/components/Store/ProductsWrapper";
import {
  getCollectionProducts,
  getCollections,
} from "app/services/shopify/collections";
import { getProducts } from "app/services/shopify/products";

interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: object;
  };
}

export default async function Category(props: CategoryProps) {
  let products = [];
  let { categories } = props.params;
  const collections = await getCollections();
  
  if (categories) {
    const selectedCollectionId = collections.find(
      (item: Collection) => item.handle === categories[0]
    ).id;
    products = await getCollectionProducts(selectedCollectionId);
  } else {
    products = await getProducts();
  }

  return <ProductsWrapper products={products} />;
}
