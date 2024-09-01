"use server";

import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";

import { formatDate } from "@/utils/formatters/date";

import { Cart } from "../types/Cart";
import { Product } from "@/features/products/types/Product";

const mergeProducts = (products: Cart["products"], nextProduct: Product) => {
  const existingProduct = products.find(({ product }) => {
    return product.id === nextProduct.id;
  });

  if (existingProduct) {
    return products.map(({ product, quantity }) => {
      if (product.id === nextProduct.id) {
        return {
          product,
          quantity: quantity + 1,
        };
      }

      return product;
    });
  }

  return [...products, { product: nextProduct, quantity: 1 }];
};

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
      products: mergeProducts(cart.products, product),
    });
  }

  revalidatePath("/cart");
};
