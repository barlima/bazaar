"use client";

import React, { useEffect, useState } from "react";

import { changeQuantity } from "../actions/changeQuantity";
import useDebounce from "@/hooks/useDebounce";

type QuantityControllerProps = {
  productId: number;
  quantity: number;
};

export const QuantityController: React.FC<QuantityControllerProps> = ({
  productId,
  quantity: initialQuantity,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const debouncedQuantity = useDebounce(quantity, 1000);

  const handleChange = (change: 1 | -1) => () => {
    setQuantity((current) => Math.max(0, current + change));
  };

  useEffect(() => {
    changeQuantity(productId, debouncedQuantity);
  }, [debouncedQuantity, productId]);

  return (
    <div className="w-min flex flex-row gap-4 border border-black justify-between ">
      <button
        className="bg-amber-50 w-8 h-8 border border-r-black outline-none focus-within:bg-orange-200"
        onClick={handleChange(-1)}
      >
        -
      </button>
      <span className="m-auto ">{quantity}</span>
      <button
        className="bg-amber-50 w-8 h-8 border border-l-black outline-none focus-within:bg-orange-200"
        onClick={handleChange(1)}
      >
        +
      </button>
    </div>
  );
};
