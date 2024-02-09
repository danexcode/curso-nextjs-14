import { myCommerceUrls } from "./urls";

export class UserService {
  async create(data: any) {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      };
      const response = await fetch(myCommerceUrls.users.create, requestOptions);
      const newUser = await response.json();
      return newUser;
    } catch (error) {
      console.error(error)
    }
  }
}
