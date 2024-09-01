import React from "react";
import { getAllCategories } from "@/features/categories/actions/getAllCategories";
import Link from "next/link";

const Home: React.FC = async () => {
  const { data: categories } = await getAllCategories();

  return (
    <main>
      <div className="flex flex-row gap-4">
        {categories.map((category) => (
          <Link key={category} href={`/category/${category}`}>
            {category}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
