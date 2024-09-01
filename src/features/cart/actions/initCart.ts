"use server";

import { formatDate } from "@/utils/formatters/date";
import { cartSchema } from "../schema/cartSchema";

export const initCart = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: formatDate(new Date()),
        products: [],
      }),
    });

    const data = await response.json();

    const validatedCart = cartSchema.parse(data);

    return { data: validatedCart };
  } catch (error) {
    return { error, data: undefined };
  }
};
