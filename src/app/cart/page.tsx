import React from "react";

import { getCart } from "@/features/cart/actions/getCart";
import { ResetCart } from "@/features/cart/components/ResetCart";
import { QuantityController } from "@/features/cart/components/QuantityController";
import { RemoveFromCart } from "@/features/cart/components/RemoveFromCart";
import { Container } from "@/components/atoms/Container";

const CartPage = async () => {
  const cart = await getCart();

  return (
    <Container>
      <div className="flex flex-col gap-4">
        {cart.products.map(({ product, quantity }) => (
          <div key={product.id} className="flex flex-row gap-4">
            <span>{product.title}</span>
            <QuantityController productId={product.id} quantity={quantity} />
            <RemoveFromCart productId={product.id} />
          </div>
        ))}
        <ResetCart />
      </div>
    </Container>
  );
};

export default CartPage;
