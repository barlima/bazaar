"use server";

import { cartSchema } from "../schema/cartSchema";
import { getCurrentCartId } from "./getCurrentCartId";

export const getCurrentCart = async () => {
  try {
    const cartId = await getCurrentCartId();
    const response = await fetch(`https://fakestoreapi.com/carts/${cartId}`);
    const data = await response.json();

    const validatedCart = cartSchema.parse(data);

    return { data: validatedCart };
  } catch (error) {
    return { error, data: undefined };
  }
};
