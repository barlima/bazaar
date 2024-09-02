import React from "react";

import { getCart } from "@/features/cart/actions/getCart";
import { ResetCart } from "@/features/cart/components/ResetCart";
import { QuantityController } from "@/features/cart/components/QuantityController";
import { RemoveFromCart } from "@/features/cart/components/RemoveFromCart";
import { Container } from "@/components/atoms/Container";
import { Card } from "@/components/atoms/Card";
import { formatCurrency } from "@/utils/formatters/currency";
import Link from "next/link";
import { getTotalPrice } from "@/features/cart/utils/getTotalPrice";

const CartPage = async () => {
  const cart = await getCart();

  return (
    <Container>
      <div className="prose-xl my-8">
        <h1 className="m-0">Your cart</h1>
        <div className="flex flex-row gap-4 justify-between">
          <span>{cart.products.length} products</span>
          {cart.products.length > 0 && (
            <span className="font-bold">
              Total: {formatCurrency(getTotalPrice(cart.products))}
            </span>
          )}
        </div>
      </div>

      <ul className="flex flex-col gap-4">
        {cart.products.length === 0 && (
          <div className="prose-xl prose-stone flex flex-col gap-4 items-center">
            <h4 className="m-0">Your cart is empty</h4>

            <span>
              Check out our{" "}
              <Link
                href="/"
                className="underline text-rose-400 hover:text-rose-500"
              >
                products
              </Link>
            </span>
          </div>
        )}

        {cart.products.map(({ product, quantity }) => (
          <li key={product.id} className="flex flex-row gap-4">
            <Card interactive={false} className="w-full bg-white">
              <div className="flex flex-col gap-8 lg:flex-row">
                <img
                  src={product.image}
                  alt={product.title}
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
                    <QuantityController
                      productId={product.id}
                      quantity={quantity}
                    />
                    <RemoveFromCart productId={product.id} />
                  </div>
                </div>
              </div>
            </Card>
          </li>
        ))}
        {cart.products.length > 0 && <ResetCart />}
      </ul>
    </Container>
  );
};

export default CartPage;
