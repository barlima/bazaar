import { z } from "zod";

import { cartSchema } from "../schema/cartSchema";

export type Cart = z.infer<typeof cartSchema>;
