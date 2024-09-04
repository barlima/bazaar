import React from "react";

import { Card } from "@/components/atoms/Card";
import { formatCurrency } from "@/utils/formatters/currency";
import { Button } from "@/components/molecules/Button";

import { Cart } from "../types/Cart";
import { getTotalPrice } from "../utils/getTotalPrice";
import { getProductsCount } from "../utils/getProductsCount";

type SummaryProps = {
  cart: Cart;
};

export const Summary: React.FC<SummaryProps> = ({ cart }) => {
  const count = getProductsCount(cart.products);

  return (
    <aside className="flex flex-col gap-4 w-screen h-min sticky mb-8 top-12 -translate-x-4 lg:translate-x-0 lg:left-unset lg:botton-unset lg:sticky lg:top-20 lg:w-52">
      <Card
        interactive={false}
        className="flex flex-col gap-2 items-end w-screen lg:w-auto"
      >
        <div className="hidden flex-col gap-4 w-full lg:flex">
          <div className="prose-xl">
            <h4 className="m-0">Your cart</h4>
          </div>

          <span>{count} products</span>

          <span className="font-bold whitespace-nowrap">
            Total: {formatCurrency(getTotalPrice(cart.products))}
          </span>
        </div>
        <Button className="w-full justify-between lg:justify-center">
          <span>Checkout</span>
          <span className="inline lg:hidden">
            Total: {formatCurrency(getTotalPrice(cart.products))}
          </span>
        </Button>
      </Card>
    </aside>
  );
};
