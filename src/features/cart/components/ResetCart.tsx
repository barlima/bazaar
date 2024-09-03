"use client";

import React from "react";

import { resetCart } from "../actions/resetCart";
import { Button } from "@/components/molecules/Button";

export const ResetCart: React.FCS = ({ className }) => {
  return (
    <Button
      color="danger"
      variant="outlined"
      onClick={() => resetCart()}
      className={className}
    >
      Remove all items
    </Button>
  );
};
