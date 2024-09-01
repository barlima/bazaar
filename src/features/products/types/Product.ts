import { z } from "zod";

import { productSchema } from "../schema/productSchema";

export type Product = z.infer<typeof productSchema>;
