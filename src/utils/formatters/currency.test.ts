import { formatCurrency } from "./currency";

describe("currency", () => {
  it("should return a string", () => {
    expect(typeof formatCurrency(123)).toBe("string");
  });

  it("should return a currency sign", () => {
    expect(formatCurrency(123)).toMatch(/€/);
  });

  it("should return a proper format", () => {
    expect(formatCurrency(123)).toBe("€123.00");
  });
});
