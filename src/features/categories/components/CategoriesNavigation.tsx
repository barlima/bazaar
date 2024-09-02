import React from "react";
import Link from "next/link";
import { clsx } from "clsx";

import { getAllCategories } from "../actions/getAllCategories";

type CategoriesNavigationProps = {
  currentCategory: string;
};

export const CategoriesNavigation: React.FC<
  CategoriesNavigationProps
> = async ({ currentCategory }) => {
  const { data: categories } = await getAllCategories();

  return (
    <nav className="flex gap-4">
      {categories.map((category) => (
        <Link
          key={category}
          href={`/category/${category}`}
          className={clsx(
            category === currentCategory && "underline",
            "capitalize"
          )}
        >
          {category}
        </Link>
      ))}
    </nav>
  );
};
