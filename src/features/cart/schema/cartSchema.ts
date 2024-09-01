import { z } from "zod";

import { productSchema } from "@/features/products/schema/productSchema";

export const cartSchema = z.object({
  id: z.number(),
  userId: z.string().optional(),
  date: z.string(),
  products: z.array(z.object({ product: productSchema, quantity: z.number() })),
});
