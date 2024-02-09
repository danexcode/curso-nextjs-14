import { myCommerceUrls } from "./urls";

export class OrdersService {
  async create(dto: any, token: string) {
    if(!dto){
      return undefined;
    }
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(dto)
      };
      
      const res = await fetch(myCommerceUrls.orders.create, requestOptions);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}