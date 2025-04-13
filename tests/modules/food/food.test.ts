import { describe, expect, it } from "vitest";
import { faker } from "../../../src";

describe("Food Module", () => {
  it("should generate a random fruit", () => {
    const fruit = faker.food.fruit();
    expect(fruit).toBeDefined();
    expect(typeof fruit).toBe("string");
  });

  it("should generate a random ingredient", () => {
    const ingredient = faker.food.ingredients();
    expect(ingredient).toBeDefined();
    expect(typeof ingredient).toBe("string");
  });

  it("should generate a random vegetable", () => {
    const vegetable = faker.food.vegetable();
    expect(vegetable).toBeDefined();
    expect(typeof vegetable).toBe("string");
  });
});
