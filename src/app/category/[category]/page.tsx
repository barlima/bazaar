import React from "react";

import { getCategoryProducts } from "@/features/categories/actions/getCategoryProducts";
import { formatTitle } from "@/utils/formatters/title";
import { AddToCart } from "@/features/cart/components/AddToCart";

type CategoryPageParams = {
  params: { category: string };
};

const CategoryPage: React.FC<CategoryPageParams> = async ({
  params: { category },
}) => {
  const { data: products } = await getCategoryProducts(category);

  return (
    <main>
      <h1>{formatTitle(category)}</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="flex gap-4">
            <span>{product.title}</span>
            <AddToCart productId={product.id.toString()} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default CategoryPage;
