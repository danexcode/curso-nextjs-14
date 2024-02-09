import { myCommerceUrls } from "./urls";

export class AuthService {
  async login(email: string, password: string) {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, password})
      };
      const res = await fetch(myCommerceUrls.auth.login, requestOptions);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error)
    }
  }
}