"use server";

import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";
import { getCartCookieId } from "./getCartCookieId";

export const resetCart = async () => {
  const cartCookieId = getCartCookieId();
  await kv.del(`cart-${cartCookieId}`);
  revalidatePath("/cart");
};
