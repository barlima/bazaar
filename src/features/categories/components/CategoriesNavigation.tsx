import React from "react";
import Link from "next/link";

import { getAllCategories } from "../actions/getAllCategories";
import { Pill } from "@/components/molecules/Pill";

type CategoriesNavigationProps = {
  currentCategory: string;
};

export const CategoriesNavigation: React.FC<
  CategoriesNavigationProps
> = async ({ currentCategory }) => {
  const { data: categories } = await getAllCategories();

  return (
    <nav className="flex gap-4 flex-row flex-wrap">
      {categories.map((category) => (
        <Link
          key={category}
          href={`/category/${category}`}
          className={"capitalize whitespace-nowrap rounded-full"}
        >
          <Pill active={category === currentCategory}>{category}</Pill>
        </Link>
      ))}
    </nav>
  );
};
