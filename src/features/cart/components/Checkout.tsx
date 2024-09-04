"use client";

import React from "react";

import { Button } from "@/components/molecules/Button";
import { formatCurrency } from "@/utils/formatters/currency";

import { Cart } from "../types/Cart";
import { getTotalPrice } from "../utils/getTotalPrice";

type CheckoutProps = {
  products: Cart["products"];
};

export const Checkout: React.FC<CheckoutProps> = ({ products }) => {
  const handleCheckout = () => {
    // Check if products are still available
    // Create a new cart with products
    // Redirect to checkout page
    return;
  };

  return (
    <Button
      className="w-full justify-between lg:justify-center"
      onClick={handleCheckout}
    >
      <span>Checkout</span>
      <span className="inline lg:hidden">
        Total: {formatCurrency(getTotalPrice(products))}
      </span>
    </Button>
  );
};
