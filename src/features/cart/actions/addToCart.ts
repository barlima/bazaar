"use server";

import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";

import { formatDate } from "@/utils/formatters/date";
import { Product } from "@/features/products/types/Product";

import { Cart } from "../types/Cart";
import { mergeCartProducts } from "../utils/mergeCartProducts";

export const addToCart = async (product: Product) => {
  const cart = await kv.get<Cart>("cart");

  if (!cart) {
    await kv.set("cart", {
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
    await kv.set("cart", {
      ...cart,
      products: mergeCartProducts(cart.products, product),
    });
  }

  revalidatePath("/cart");
};
