"use server";

import { formatDate } from "@/utils/formatters/date";
import { getCurrentCartId } from "./getCurrentCartId";

export const addToCart = async (productId: string) => {
  const cartId = await getCurrentCartId();

  try {
    const response = await fetch(`https://fakestoreapi.com/carts/${cartId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: formatDate(new Date()),
        products: [
          {
            productId,
            quantity: 1,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error("Cannot add product to cart");
    }

    return { error: undefined };
  } catch (error) {
    return { error };
  }
};
