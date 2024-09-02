import React from "react";
import Link from "next/link";

import { Card } from "@/components/atoms/Card";
import { getAllCategories } from "@/features/categories/actions/getAllCategories";
import { MoveUp } from "@/layout/animations/MoveUp";

const Home: React.FC = async () => {
  const { data: categories } = await getAllCategories();

  return (
    <div className="flex-1 flex justify-center items-center relative before-rose-gradient after:bg-amber-50 after:h-full after:w-full after:absolute after:-top-4 after:left-0 after:z-[-1]">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link key={category} href={`/category/${category}`}>
            <MoveUp>
              <Card className="h-52 w-52 flex justify-center items-center prose-xl prose-stone">
                <h5 className="text-center capitalize">{category}</h5>
              </Card>
            </MoveUp>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
