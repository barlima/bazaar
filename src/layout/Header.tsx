import React from "react";
import Link from "next/link";

import { CartTracker } from "@/features/cart/components/CartTracker";

export const Header: React.FC = () => {
  return (
    <header className="p-4 mb-4 lg:p-6 sticky top-0 bg-amber-50 flex flex-row gap-4 items-center justify-between z-20">
      <Link href="/">Home</Link>

      <CartTracker />
    </header>
  );
};
