"use server";

import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";

import { getCart } from "./getCart";
import { getCartCookieId } from "./getCartCookieId";

export const removeFromCart = async (productId: number) => {
  const cart = await getCart();
  const cartCookieId = getCartCookieId();

  if (!cart.id) {
    throw new Error("Cart not found");
  }

  await kv.set(`cart-${cartCookieId}`, {
    ...cart,
    products: cart.products.filter(({ product }) => product.id !== productId),
  });

  revalidatePath("/cart");
};
