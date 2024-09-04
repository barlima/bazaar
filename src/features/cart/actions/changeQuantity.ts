"use server";

import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";

import { Cart } from "../types/Cart";
import { getCart } from "./getCart";
import { getCartCookieId } from "./getCartCookieId";

export const changeQuantity = async (productId: number, change: 1 | -1) => {
  const cart = await getCart();
  const cartCookieId = getCartCookieId();

  if (!cart.id) {
    return;
  }

  const updatedProducts = cart.products.reduce((acc, details) => {
    if (details.product.id === productId) {
      if (change === -1 && details.quantity === 1) {
        return acc;
      }

      details.quantity += change;
    }

    return [...acc, details];
  }, [] as Cart["products"]);

  await kv.set(`cart-${cartCookieId}`, {
    ...cart,
    products: updatedProducts,
  });

  revalidatePath("/cart");
};
