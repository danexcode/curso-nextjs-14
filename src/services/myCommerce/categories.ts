import { myCommerceUrls } from "./urls";

export class CategoryService {
  async find() {
    try {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      
      const res = await fetch(myCommerceUrls.categories.findAll, requestOptions);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}