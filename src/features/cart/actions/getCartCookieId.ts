"use server";

import { cookies } from "next/headers";

export const getCartCookieId = () => {
  const cartCookieId = cookies().get("cartId");

  return cartCookieId?.value;
};
