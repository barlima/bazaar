import React from "react";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

import { getCart } from "../actions/getCart";
import { getProductsCount } from "../utils/getProductsCount";

export const CartTracker: React.FC = async () => {
  const cart = await getCart();

  const count = getProductsCount(cart.products);

  return (
    <Link href="/cart" className="relative group rounded-md">
      <FaCartShopping
        size={24}
        className="fill-stone-700 group-hover:fill-stone-900 transition-colors duration-300"
      />
      {!!count && (
        <div className="absolute -right-3 -top-3 bg-rose-400 w-5 h-5 flex items-center justify-center rounded-full text-white group-hover:bg-rose-700 transition-colors duration-300">
          <span className="text-sm">{count > 9 ? "9+" : count}</span>
        </div>
      )}
    </Link>
  );
};
