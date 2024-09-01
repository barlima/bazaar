"use client";

import React, { useTransition } from "react";

import { removeFromCart } from "../actions/removeFromCart";

type RemoveFromCartProps = {
  productId: number;
};

export const RemoveFromCart: React.FC<RemoveFromCartProps> = ({
  productId,
}) => {
  const [isPending, startTransition] = useTransition();

  const handleRemove = async (removedProductId: number) => {
    try {
      await removeFromCart(removedProductId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={() => startTransition(() => handleRemove(productId))}>
      {isPending ? "Removing..." : "- Remove from Cart"}
    </button>
  );
};
