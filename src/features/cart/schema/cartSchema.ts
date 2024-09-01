import { z } from "zod";

export const cartSchema = z.object({
  id: z.number(),
  userId: z.string().optional(),
  date: z.string(),
  products: z.array(z.object({ productId: z.number(), quantity: z.number() })),
});
