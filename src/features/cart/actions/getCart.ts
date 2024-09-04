import { kv } from "@vercel/kv";

import { formatDate } from "@/utils/formatters/date";

import { Cart } from "../types/Cart";
import { getCartCookieId } from "./getCartCookieId";

export const getCart = async (): Promise<Cart> => {
  const cartCookieId = await getCartCookieId();

  if (!cartCookieId) {
    return { id: 0, date: formatDate(new Date()), products: [] };
  }

  const cart = await kv.get<Cart>(`cart-${cartCookieId}`);
  return cart || { id: 0, date: formatDate(new Date()), products: [] };
};
