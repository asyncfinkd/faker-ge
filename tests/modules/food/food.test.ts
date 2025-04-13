import { describe, expect, it } from "vitest";
import { faker } from "../../../src";

describe("Food Module", () => {
  it("should generate a random fruit", () => {
    const fruit = faker.food.fruit();
    expect(fruit).toBeDefined();
    expect(typeof fruit).toBe("string");
  });
});
