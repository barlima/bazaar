import { Card } from "@/components/atoms/Card";
import { AddToCart } from "@/features/cart/components/AddToCart";
import { Product } from "@/features/products/types/Product";
import React from "react";

type ProductCardProps = {
  product: Product;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card
      interactive={false}
      className="prose prose-xl bg-transparent shadow-none"
    >
      <img
        src={product.image}
        alt={product.title}
        className="aspect-square w-full object-contain mx-auto mix-blend-multiply"
      />
      <h4>{product.title}</h4>
      <AddToCart product={product} />
    </Card>
  );
};
