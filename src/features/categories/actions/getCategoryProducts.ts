"use server";

import { z } from "zod";

import { Product } from "@/features/products/types/Product";

import { productSchema } from "../../products/schema/productSchema";

export const getCategoryProducts = async (category: string) => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );

    const data = await response.json();

    const validatedCategories = z.array(productSchema).parse(data);

    return { data: validatedCategories };
  } catch (error) {
    return { error, data: [] as Product[] };
  }
};
