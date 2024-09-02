import { Product } from "@/features/products/types/Product";

export const getTotalPrice = (
  products: Array<{ product: Product; quantity: number }>
) => {
  return products.reduce((acc, { product, quantity }) => {
    return acc + product.price * quantity;
  }, 0);
};
