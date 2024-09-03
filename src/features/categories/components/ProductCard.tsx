import React from "react";
import Image from "next/image";

import { Card } from "@/components/atoms/Card";
import { AddToCart } from "@/features/cart/components/AddToCart";
import { Product } from "@/features/products/types/Product";
import { formatCurrency } from "@/utils/formatters/currency";

type ProductCardProps = {
  product: Product;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card
      interactive={false}
      className="prose prose-lg bg-transparent shadow-none flex flex-col h-full"
    >
      <Image
        src={product.image}
        alt={product.title}
        width={240}
        height={240}
        className="aspect-square w-full object-contain mx-auto"
      />
      <h4 className="flex-1">{product.title}</h4>
      <h5 className="mb-4">{formatCurrency(product.price)}</h5>

      <AddToCart product={product} />
    </Card>
  );
};
