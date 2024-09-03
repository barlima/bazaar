import { Product } from "@/features/products/types/Product";
import { Cart } from "../types/Cart";

export const mergeCartProducts = (
  products: Cart["products"],
  nextProduct: Product
) => {
  const existingProduct = products.find(
    ({ product }) => product.id === nextProduct.id
  );

  if (existingProduct) {
    return products.map(({ product, quantity }) => {
      if (product.id === nextProduct.id) {
        return {
          product,
          quantity: quantity + 1,
        };
      }

      return { product, quantity };
    });
  }

  return [...products, { product: nextProduct, quantity: 1 }];
};
