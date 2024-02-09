import { ProfileService } from "app/services/myCommerce/profile";
import { cookies } from "next/headers";

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
        {orders?.map((order) => (
          <p key={order.id}>{order.id}</p>
        ))}
      </section>
    </div>
  );
}