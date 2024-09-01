import { kv } from "@vercel/kv";
import { Cart } from "../types/Cart";
import { formatDate } from "@/utils/formatters/date";

export const getCart = async (): Promise<Cart> => {
  const cart = await kv.get<Cart>("cart");
  return cart || { id: 0, date: formatDate(new Date()), products: [] };
};
