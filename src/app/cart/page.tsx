import React from "react";
import Link from "next/link";

import { getCart } from "@/features/cart/actions/getCart";
import { Container } from "@/components/atoms/Container";
import { Summary } from "@/features/cart/components/Summary";
import { CartItem } from "@/features/cart/components/CartItem";
import { ResetCart } from "@/features/cart/components/ResetCart";

const CartPage = async () => {
  const cart = await getCart();

  return (
    <Container>
      <div className="flex flex-col gap-4 mb-4">
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

        <div className="flex flex-col-reverse lg:flex-row gap-4">
          <section className="flex-1 flex flex-col gap-8">
            <ul className="flex flex-col gap-4">
              {cart.products.map(({ product, quantity }) => (
                <CartItem
                  key={product.id}
                  product={product}
                  quantity={quantity}
                />
              ))}
            </ul>

            {cart.products.length > 0 && (
              <ResetCart className="w-full hidden lg:block" />
            )}
          </section>

          {cart.products.length > 0 && <Summary cart={cart} />}
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
