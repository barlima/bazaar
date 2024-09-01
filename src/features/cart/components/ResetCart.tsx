"use client";

import React from "react";

import { resetCart } from "../actions/resetCart";

export const ResetCart: React.FC = () => {
  return <button onClick={() => resetCart()}>Reset Cart</button>;
};
