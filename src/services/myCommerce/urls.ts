import { env } from "app/config/env"

export const myCommerceUrls = {
  users: {
    create: `${env.myCommerce.hostname}/users`,
    findAll: `${env.myCommerce.hostname}/users`,
  },
  auth: {
    login: `${env.myCommerce.hostname}/auth/login`
  },
  profile: {
    myUser: `${env.myCommerce.hostname}/profile/my-user`,
    myOrders: `${env.myCommerce.hostname}/profile/my-orders`
  },
  orders: {
    create: `${env.myCommerce.hostname}/orders`
  },
  products: {
    findAll: `${env.myCommerce.hostname}/products`
  },
  categories: {
    findAll: `${env.myCommerce.hostname}/categories`
  }
}