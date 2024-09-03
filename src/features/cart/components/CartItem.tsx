import Image from "next/image";
import React from "react";

import { Product } from "@/features/products/types/Product";
import { Card } from "@/components/atoms/Card";
import { formatCurrency } from "@/utils/formatters/currency";

import { QuantityController } from "./QuantityController";
import { RemoveFromCart } from "./RemoveFromCart";

type CartItemProps = {
  product: Product;
  quantity: number;
};

export const CartItem: React.FC<CartItemProps> = ({ product, quantity }) => {
  return (
    <li className="flex flex-row gap-4">
      <Card interactive={false} className="w-full bg-white">
        <div className="flex flex-col gap-8 lg:flex-row">
          <Image
            src={product.image}
            alt={product.title}
            width={240}
            height={240}
            className="aspect-square w-32 object-contain mx-auto"
          />
          <div className="prose prose-stone prose-h4:m-0">
            <h4>{product.title}</h4>
            <span>{product.description}</span>
          </div>
          <div className="ml-auto flex flex-col gap-2 items-end w-full">
            <span className="font-bold text-lg">
              {formatCurrency(product.price)}
            </span>

            <div className="flex flex-row-reverse gap-2 w-full justify-between lg:flex-col lg:justify-normal items-end">
              <QuantityController productId={product.id} quantity={quantity} />
              <RemoveFromCart productId={product.id} />
            </div>
          </div>
        </div>
      </Card>
    </li>
  );
};
