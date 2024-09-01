"use client";

import { PropsWithChildren, createContext, useMemo, useState } from "react";

import { Cart } from "../types/Cart";

type CartContext = {
  cart: Cart;
};

const initialState: CartContext = {
  cart: {
    id: 0,
    userId: undefined,
    date: "",
    products: [],
  },
};

const CartContext = createContext<CartContext>(initialState);

export const CartContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [cart, setCart] = useState<Cart>(initialState.cart);

  const value = useMemo(() => ({ cart }), [cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Context jest ok :+1:
// Stwórz koszyk (lub update) jak user przejdzie do checkoutu (na stronę z koszykiem)
// sprawdzać dostępność koszyka na stronie z koszykiem
