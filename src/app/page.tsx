import React from "react";
import Link from "next/link";

import { Card } from "@/components/atoms/Card";
import { getAllCategories } from "@/features/categories/actions/getAllCategories";
import { Logo } from "@/layout/Logo";

const Home: React.FC = async () => {
  const { data: categories } = await getAllCategories();

  return (
    <div className="p-4 flex-1 flex flex-col gap-12 justify-center items-center relative before-rose-gradient after:bg-amber-50 after:h-full after:w-full after:absolute after:-top-4 after:left-0 after:z-[-1]">
      <Logo size="lg" className="z-10 hidden lg:flex absolute top-12" />
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <li key={category}>
            <Link
              href={`/category/${category}`}
              className="rounded-lg focus-within:outline-none group"
            >
              <Card className="h-52 w-52 flex justify-center items-center prose-xl prose-stone group-focus-within:bg-rose-100 group-focus-within:border-red-400">
                <h5 className="text-center capitalize">{category}</h5>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
