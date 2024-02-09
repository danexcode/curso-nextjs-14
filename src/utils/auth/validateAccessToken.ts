import { cookies } from "next/headers"
import { ProfileService } from "app/services/myCommerce/profile";
const service = new ProfileService();

export const validateAccessToken = async () => {
  const cookiesStore = cookies();
  const token = cookiesStore.get("accessToken")?.value;
  const user = await service.getProfile(token);
  return user;
}