import React from "react";

import { getCurrentCart } from "@/features/cart/actions/getCurrentCart";

const CartPage = async () => {
  const { data: cart, error } = await getCurrentCart();
  return <main>{JSON.stringify(cart)}</main>;
};

export default CartPage;
