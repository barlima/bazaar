import React from "react";

import { getCart } from "@/features/cart/actions/getCart";

const CartPage = async () => {
  const cart = await getCart();

  return <main>{JSON.stringify(cart)}</main>;
};

export default CartPage;
