import { Product } from "@/features/products/types/Product";

import { getProductsCount } from "./getProductsCount";

describe("getProductsCount", () => {
  it("should return 0 when there are no products", () => {
    expect(getProductsCount([])).toBe(0);
  });

  it("should return 1 when one product is added to cart", () => {
    expect(
      getProductsCount([{ product: { id: 1 } as Product, quantity: 1 }])
    ).toBe(1);
  });

  it("should return 2 when quantity is 2", () => {
    expect(
      getProductsCount([{ product: { id: 1 } as Product, quantity: 2 }])
    ).toBe(2);
  });

  it("should sum up all quantities", () => {
    expect(
      getProductsCount([
        { product: { id: 1 } as Product, quantity: 2 },
        { product: { id: 2 } as Product, quantity: 5 }
      ])
    ).toBe(7);
  });
});
