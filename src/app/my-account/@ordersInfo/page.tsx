import { ProfileService } from "app/services/myCommerce/profile";
import { cookies } from "next/headers";

type OrderType = {
  name: string;
  id: number;
  statusUrl: string
  lineItems: {
    edges: Array<{
      node: {
        currentQuantity: number;
        title: 2
      }
    }>
  }
}

export default async function MyAccountPage() {
  const cookiesStore = cookies();
  const accessToken = cookiesStore.get("accessToken")?.value as string;
  const service = new ProfileService();
  const orders = await service.getCustomerOrders(accessToken);
  console.log(orders)

  return (
    <div>
      <section>
        <h2>Orders</h2>
        {orders?.map((order: OrderType) => (
          <p key={order.id}>{order.id}</p>
        ))}
      </section>
    </div>
  );
}