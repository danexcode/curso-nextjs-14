import { redirect } from "next/navigation";
import { ProductView } from "app/components/product/ProductView";
import { ProductsService } from "app/services/myCommerce/products";

const service = new ProductsService();

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export async function generateMetadata({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  const product: ProductType = await service.findById(id);

  return {
    title: product.name,
    description: product.description,
    keywords: ['super'],
    openGraph: {
      images: [product.image]
    }
  }
}

export default async function ProductPage(props: ProductPageProps) {
  const id = props.searchParams.id;
  const product = await service.findById(id);

  if (!id) {
    redirect("/store");
  }

  return <ProductView product={product} />;
}
