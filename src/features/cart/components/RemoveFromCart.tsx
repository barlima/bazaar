"use client";

import React, { useTransition } from "react";

import { removeFromCart } from "../actions/removeFromCart";
import { Button } from "@/components/molecules/Button";

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
    <Button
      color="danger"
      variant="outlined"
      className="w-min"
      onClick={() => startTransition(() => handleRemove(productId))}
    >
      {isPending ? "Removing..." : "Remove"}
    </Button>
  );
};
