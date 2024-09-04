import { formatDate } from "./date";

describe("date", () => {
  it("should return a string", () => {
    expect(typeof formatDate(new Date())).toBe("string");
  });

  it("should return a proper format", () => {
    expect(formatDate(new Date('2023-07-01'))).toBe("2023-7-1");
  });
});
