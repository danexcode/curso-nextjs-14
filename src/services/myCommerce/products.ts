import { myCommerceUrls } from "./urls";

export class ProductsService {
  async find() {
    try {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      
      const res = await fetch(myCommerceUrls.products.findAll, requestOptions);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async findById(id: string) {
    try {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      
      const res = await fetch(`${myCommerceUrls.products.findAll}/${id}`, requestOptions);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
