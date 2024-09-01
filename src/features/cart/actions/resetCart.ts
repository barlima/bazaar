"use server";

import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";

export const resetCart = async () => {
  await kv.del("cart");
  revalidatePath("/cart");
};
