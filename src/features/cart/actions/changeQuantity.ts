"use server";

import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";

import { Cart } from "../types/Cart";
import { getCart } from "./getCart";
import { getCartCookieId } from "./getCartCookieId";

export const changeQuantity = async (productId: number, quantity: number) => {
  const cart = await getCart();
  const cartCookieId = await getCartCookieId();

  if (!cart.id) {
    return;
  }

  const updatedProducts = cart.products.reduce((acc, details) => {
    if (details.product.id === productId) {
      if (!quantity) {
        return acc;
      }

      details.quantity = quantity;
    }

    return [...acc, details];
  }, [] as Cart["products"]);

  await kv.set(`cart-${cartCookieId}`, {
    ...cart,
    products: updatedProducts,
  });

  revalidatePath("/cart");
};
