import { Cart } from "../types/Cart";

export const getProductsCount = (products: Cart["products"]) => {
  return products.reduce((acc, { quantity }) => acc + quantity, 0);
};
