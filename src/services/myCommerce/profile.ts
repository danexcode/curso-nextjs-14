import { myCommerceUrls } from "./urls";

export class ProfileService {
  async getProfile(token: string | undefined) {
    if(!token){
      return undefined;
    }
    try {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      };
      
      const res = await fetch(myCommerceUrls.profile.myUser, requestOptions);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getCustomerOrders(token: string | undefined) {
    if(!token){
      return undefined;
    }
    try {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      };
      
      const res = await fetch(myCommerceUrls.profile.myOrders, requestOptions);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
