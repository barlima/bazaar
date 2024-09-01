"use client";

import React, { useTransition } from "react";

import { Product } from "@/features/products/types/Product";

import { addToCart } from "../actions/addToCart";

type AddToCartProps = {
  product: Product;
};

export const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const [isPending, startTransition] = useTransition();

  const handleAddToCart = async (nextProduct: Product) => {
    try {
      await addToCart(nextProduct);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={() => startTransition(() => handleAddToCart(product))}>
      {isPending ? "Adding..." : "+ Add to Cart"}
    </button>
  );
};
