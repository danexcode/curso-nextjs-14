import { ProductsWrapper } from "app/components/Store/ProductsWrapper";
import { CategoryService } from "app/services/myCommerce/categories";
import { ProductsService } from "app/services/myCommerce/products";

interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: object;
  };
}

export default async function Category(props: CategoryProps) {
  const categoryService = new CategoryService() ;
  const productService = new ProductsService();
  let products = [];
  let { categories } = props.params;
  const collections = await categoryService.find();
  
  if (categories && collections) {
    const selectedCollectionId = collections?.find(
      (item: CollectionType) => item.name === categories[0]
    ).id;
    products = await productService.find() //getCollectionProducts(selectedCollectionId);
  } else {
    products = await productService.find();
  }

  return <ProductsWrapper products={products} />;
}
