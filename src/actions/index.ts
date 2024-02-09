"use server";

import { createAccessToken } from "app/utils/auth/createAccessToken";
import { UserService } from "app/services/myCommerce/users";
import { OrdersService } from "app/services/myCommerce/orders";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { validateAccessToken } from "app/utils/auth/validateAccessToken";


export const handleCreateUser = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  delete formDataObject["password_confirmation"];
  const service = new UserService();
  const newUser = await service.create(formDataObject);
  if(newUser?.firstName){
    await createAccessToken(formDataObject.email as string, formDataObject.password as string);
    redirect('/store');
  } 
};

export const handleLogin = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  const accessToken = await createAccessToken(formDataObject.email as string, formDataObject.password as string);
  if(accessToken){
    redirect('/store');
  }
}

export const handleCreateCart = async (items: CartItem[]) => {
  const cookiesStore = cookies()
  const accesToken = cookiesStore.get('accessToken')?.value as string

  if(!accesToken) redirect('/login')

  const service = new OrdersService();
  const customer: Customer = await validateAccessToken();
  if(!customer){
    redirect('/login');
  }
  const dto = {
    userId: customer.id,
    orderTotal: 500.5,
    referenceBankCode: 957844,
    products: [
      {
        productId: 1,
        amount: 2,
        productPrice: 150.99
      }
    ]
  }

  const res = service.create(dto, accesToken);

  return res
}
