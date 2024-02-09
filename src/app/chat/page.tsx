import { Chat } from "app/components/chat"
import { getProducts } from "app/services/shopify/products"
import { createAgent } from "app/utils/googleAI/createAgent";

export default async function ChatPage() {

  const products = await getProducts();
  const productTitles = products.map((product: {title: string}) => product.title);
  const flatProductTitle = productTitles.join("\n");

  const agent = createAgent(flatProductTitle);

  return (
    <>
      <Chat agent={agent}/>
    </>
  )
}