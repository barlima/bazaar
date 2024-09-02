"use client";

import React from "react";

import { resetCart } from "../actions/resetCart";
import { Button } from "@/components/molecules/Button";

export const ResetCart: React.FC = () => {
  return (
    <Button color="danger" onClick={() => resetCart()}>
      Remove all items
    </Button>
  );
};
