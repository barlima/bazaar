import { formatTitle } from "./title";

describe("title", () => {
  it("should return the same string", () => {
    expect(formatTitle("foo")).toBe("foo");
  });

  it("should decode the string", () => {
    expect(formatTitle("%C3%A9")).toBe("é");
  });
});
