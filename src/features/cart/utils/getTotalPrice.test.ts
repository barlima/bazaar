import { Product } from "@/features/products/types/Product";

import { getTotalPrice } from "./getTotalPrice";

describe("getTotalPrice", () => {
  it("should return 0 when there are no products", () => {
    expect(getTotalPrice([])).toBe(0);
  });

  it("should return the price of one product that is added to cart", () => {
    expect(
      getTotalPrice([
        { product: { id: 1, price: 123 } as Product, quantity: 1 },
      ])
    ).toBe(123);
  });

  it("should return prices of all products", () => {
    expect(
      getTotalPrice([
        { product: { id: 1, price: 100 } as Product, quantity: 1 },
        { product: { id: 2, price: 200 } as Product, quantity: 1 },
        { product: { id: 3, price: 300 } as Product, quantity: 1 },
      ])
    ).toBe(600);
  });

  it("should sum up all quantities", () => {
    expect(
      getTotalPrice([
        { product: { id: 1, price: 100 } as Product, quantity: 2 },
        { product: { id: 2, price: 100 } as Product, quantity: 5 },
      ])
    ).toBe(700);
  });
});
