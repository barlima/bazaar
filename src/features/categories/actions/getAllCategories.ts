"use server";

import { z } from "zod";

export const getAllCategories = async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );

    const data = await response.json();

    const validatedCategories = z.array(z.string()).parse(data);

    return { data: validatedCategories };
  } catch (error) {
    return { error, data: [] as string[] };
  }
};
