import { describe, expect, it } from "vitest";
import { faker } from "../../../src";

describe("Vehicle Module", () => {
  it("should generate a random vehicle model", () => {
    const model = faker.vehicle.model();
    expect(model).toBeDefined();
    expect(typeof model).toBe("string");
  });

  it("should generate a random vehicle fuel", () => {
    const fuel = faker.vehicle.fuel();
    expect(fuel).toBeDefined();
    expect(typeof fuel).toBe("string");
  });
});
