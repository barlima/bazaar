import { Product } from "@/features/products/types/Product";

import { mergeCartProducts } from "./mergeCartProducts";

describe("mergeCartProducts", () => {
  it("should return the same products when there are no cart products", () => {
    expect(mergeCartProducts([], { id: 1 } as Product)).toStrictEqual([
      { product: { id: 1 }, quantity: 1 },
    ]);
  });

  it("should return the same products when there are no matching products", () => {
    expect(
      mergeCartProducts(
        [
          { product: { id: 1 } as Product, quantity: 1 },
          { product: { id: 2 } as Product, quantity: 1 },
        ],
        { id: 3 } as Product
      )
    ).toStrictEqual([
      { product: { id: 1 }, quantity: 1 },
      { product: { id: 2 }, quantity: 1 },
      { product: { id: 3 }, quantity: 1 },
    ]);
  });

  it("should return updated products' quantity when there is a change", () => {
    expect(
      mergeCartProducts(
        [
          { product: { id: 1 } as Product, quantity: 1 },
          { product: { id: 2 } as Product, quantity: 1 },
        ],
        { id: 2, price: 100 } as Product
      )
    ).toStrictEqual([
      { product: { id: 1 }, quantity: 1 },
      { product: { id: 2 }, quantity: 2 },
    ]);
  });
});
