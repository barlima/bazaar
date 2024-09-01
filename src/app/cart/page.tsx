import React from "react";

import { getCart } from "@/features/cart/actions/getCart";
import { ResetCart } from "@/features/cart/components/ResetCart";

const CartPage = async () => {
  const cart = await getCart();

  return (
    <main>
      <div className="flex flex-col gap-4">
        {JSON.stringify(cart)}
        <ResetCart />
      </div>
    </main>
  );
};

export default CartPage;
