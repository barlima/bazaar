"use server";

import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";

import { Cart } from "../types/Cart";

export const removeFromCart = async (productId: number) => {
  const cart = await kv.get<Cart>("cart");

  if (!cart) {
    throw new Error("Cart not found");
  }

  await kv.set("cart", {
    ...cart,
    products: cart.products.filter(({ product }) => product.id !== productId),
  });

  revalidatePath("/cart");
};
