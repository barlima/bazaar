"use server";

import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";

import { formatDate } from "@/utils/formatters/date";
import { Product } from "@/features/products/types/Product";

import { mergeCartProducts } from "../utils/mergeCartProducts";
import { getCartCookieId } from "./getCartCookieId";
import { getCart } from "./getCart";

export const addToCart = async (product: Product) => {
  const cartCookieId = getCartCookieId();

  const cart = await getCart();

  console.log(cart);

  if (!cart.id) {
    await kv.set(`cart-${cartCookieId}`, {
      id: 1,
      date: formatDate(new Date()),
      products: [
        {
          product,
          quantity: 1,
        },
      ],
    });
  } else {
    await kv.set(`cart-${cartCookieId}`, {
      ...cart,
      products: mergeCartProducts(cart.products, product),
    });
  }

  revalidatePath("/cart");
};
