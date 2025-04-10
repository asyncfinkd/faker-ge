import { describe, it, expect } from "vitest";
import { faker } from "../../../src";

describe("Personal Number Module", () => {
  it("should generate a personal ID with default length", () => {
    const pid = faker.personalNumber.pid();
    expect(pid).toBeDefined();
    expect(typeof pid).toBe("string");
    expect(pid.length).toBe(11);
  });

  it("should generate a personal ID with specific prefix", () => {
    const prefix = "02";
    const pid = faker.personalNumber.pid(prefix);
    expect(pid).toBeDefined();
    expect(typeof pid).toBe("string");
    expect(pid.length).toBe(11);
    expect(pid.startsWith(prefix)).toBe(true);
  });
});
