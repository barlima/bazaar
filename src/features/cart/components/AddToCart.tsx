"use client";

import React from "react";

import { Product } from "@/features/products/types/Product";

import { addToCart } from "../actions/addToCart";

type AddToCartProps = {
  product: Product;
};

export const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const handleAddToCart = async () => {
    try {
      await addToCart(product);
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={handleAddToCart}>+ Add to Cart</button>;
};
