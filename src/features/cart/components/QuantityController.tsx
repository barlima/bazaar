"use client";

import React, { useState } from "react";

import { changeQuantity } from "../actions/changeQuantity";

type QuantityControllerProps = {
  productId: number;
  quantity: number;
};

export const QuantityController: React.FC<QuantityControllerProps> = ({
  productId,
  quantity: initialQuantity,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleChange = (productId: number, change: 1 | -1) => () => {
    setQuantity((current) => Math.max(0, current + change));
    changeQuantity(productId, change);
  };

  return (
    <div className="flex flex-row gap-4">
      <button onClick={handleChange(productId, -1)}>-</button>
      <span>{quantity}</span>
      <button onClick={handleChange(productId, 1)}>+</button>
    </div>
  );
};
