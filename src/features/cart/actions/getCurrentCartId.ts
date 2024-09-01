"use server";

import { cookies } from "next/headers";
import { initCart } from "./initCart";

export const getCurrentCartId = async () => {
  const cookieStore = cookies();
  const cartId = cookieStore.get("cartId");

  if (cartId) {
    return cartId.value;
  }

  const { data: cart, error } = await initCart();

  if (error || !cart) {
    throw new Error("Cannot create a new cart");
  }

  cookieStore.set("cartId", cart.id.toString());

  return cart.id.toString();
};
