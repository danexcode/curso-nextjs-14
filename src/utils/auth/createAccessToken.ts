import { cookies } from "next/headers";
import { AuthService } from "app/services/myCommerce/auth";
const service = new AuthService();

interface ResponseLogin {
  user?: Object;
  access_token?: string;
  statusCode?: number;
  error?: string;
  message?: string;
}

export const createAccessToken = async (email: string, password: string) => {
  const cookiesStore = cookies();
  const response: ResponseLogin = await service.login(email, password);
  const { access_token } = response;
  
  if (access_token) {
    cookiesStore.set("accessToken", access_token, {
      path: "/",
      //expires: new Date(),
      httpOnly: true,
      sameSite: "strict",
    });
  }

  return access_token;
};
