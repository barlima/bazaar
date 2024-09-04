"use client";

import React, { useTransition } from "react";

import { Product } from "@/features/products/types/Product";
import { Button } from "@/components/molecules/Button";

import { addToCart } from "../actions/addToCart";
import { useErrorContext } from "@/context/ErrorContext";

type AddToCartProps = {
  product: Product;
};

export const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const [isPending, startTransition] = useTransition();
  const { setError } = useErrorContext();

  const handleAddToCart = async (nextProduct: Product) => {
    try {
      await addToCart(nextProduct);
    } catch (error) {
      console.error(error);
      setError("Something went wrong");
    }
  };

  return (
    <Button
      onClick={() => startTransition(() => handleAddToCart(product))}
      disabled={isPending}
    >
      {isPending ? "Adding..." : "+ Add to Cart"}
    </Button>
  );
};
