"use server";

import { cookies } from "next/headers";

export const getCartCookieId = async () => {
  const cartCookieId = cookies().get("cartId");

  return cartCookieId?.value;
};
