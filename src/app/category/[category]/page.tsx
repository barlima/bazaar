import React from "react";

import { getCategoryProducts } from "@/features/categories/actions/getCategoryProducts";
import { formatTitle } from "@/utils/formatters/title";
import { CategoriesNavigation } from "@/features/categories/components/CategoriesNavigation";
import { Container } from "@/components/atoms/Container";
import { PageTransition } from "@/layout/animations/PageTransition";
import { ProductCard } from "@/features/products/components/ProductCard";
import Link from "next/link";

type CategoryPageParams = {
  params: { category: string };
};

const CategoryPage: React.FC<CategoryPageParams> = async ({
  params: { category },
}) => {
  const { data: products } = await getCategoryProducts(category);

  return (
    <Container>
      <CategoriesNavigation currentCategory={decodeURIComponent(category)} />

      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 text-center mt-8">
          <h1 className="text-2xl">No products found for this category</h1>
          <span>
            Check out our{" "}
            <Link
              href="/"
              className="underline text-rose-400 hover:text-rose-500"
            >
              categories
            </Link>
          </span>
        </div>
      ) : (
        <PageTransition className="flex-col gap-4">
          <div className="prose-xl my-8">
            <h1 className="m-0 capitalize">{formatTitle(category)}</h1>
            <span>{products.length} products</span>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </PageTransition>
      )}
    </Container>
  );
};

export default CategoryPage;
