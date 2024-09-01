"use client";

import React from "react";
import { addToCart } from "../actions/addToCart";

type AddToCartProps = {
  productId: string;
};

export const AddToCart: React.FC<AddToCartProps> = ({ productId }) => {
  const handleAddToCart = async () => {
    const { error } = await addToCart(productId);
  };

  return <button onClick={() => handleAddToCart()}>+ Add to Cart</button>;
};
