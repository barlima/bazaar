import React from "react";
import Link from "next/link";

import { getCart } from "@/features/cart/actions/getCart";
import { ResetCart } from "@/features/cart/components/ResetCart";
import { QuantityController } from "@/features/cart/components/QuantityController";
import { RemoveFromCart } from "@/features/cart/components/RemoveFromCart";
import { Container } from "@/components/atoms/Container";
import { Card } from "@/components/atoms/Card";
import { formatCurrency } from "@/utils/formatters/currency";
import { getTotalPrice } from "@/features/cart/utils/getTotalPrice";
import { Button } from "@/components/molecules/Button";

const CartPage = async () => {
  const cart = await getCart();

  return (
    <Container>
      <ul className="flex flex-col gap-4 mb-4">
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

        <div className="flex gap-4">
          <section className="flex flex-col gap-4 flex-1">
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
          </section>

          {cart.products.length > 0 && (
            <aside className="flex flex-col gap-4 w-52 h-min fixed bottom-0 left-0 lg:left-unset lg:botton-unset lg:sticky lg:top-20">
              <Card
                interactive={false}
                className="flex flex-col gap-2 items-end w-screen lg:w-auto"
              >
                <div className="hidden flex-col gap-4 w-full lg:flex">
                  <div className="prose-xl">
                    <h4 className="m-0">Your cart</h4>
                  </div>

                  <span className="font-bold whitespace-nowrap">
                    Total: {formatCurrency(getTotalPrice(cart.products))}
                  </span>
                  <span>{cart.products.length} products</span>
                </div>
                <Button className="w-full justify-between lg:justify-center">
                  <span>Checkout</span>
                  <span className="inline lg:hidden">
                    Total: {formatCurrency(getTotalPrice(cart.products))}
                  </span>
                </Button>
                <hr className="w-full border-stone-300 hidden lg:block" />
                {cart.products.length > 0 && (
                  <ResetCart className="w-full hidden lg:block" />
                )}
              </Card>
            </aside>
          )}
        </div>
      </ul>
    </Container>
  );
};

export default CartPage;
