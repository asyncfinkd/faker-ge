import { describe, it, expect } from "vitest";
import { faker } from "../../../src";

describe("Phone Number Module", () => {
  it("should generate a phone number with default provider", () => {
    const phone = faker.phoneNumber.phone();
    expect(phone).toBeDefined();
    expect(typeof phone).toBe("string");
    expect(phone.startsWith("+995")).toBe(true);
  });

  it("should generate a phone number for Magti provider", () => {
    const phone = faker.phoneNumber.phone("Magti");
    expect(phone).toBeDefined();
    expect(typeof phone).toBe("string");
    expect(phone.startsWith("+995555")).toBe(true);
  });

  it("should generate a phone number for Silknet provider", () => {
    const phone = faker.phoneNumber.phone("Silknet");
    expect(phone).toBeDefined();
    expect(typeof phone).toBe("string");
    expect(phone.startsWith("+995557")).toBe(true);
  });

  it("should generate a phone number for Geocell provider", () => {
    const phone = faker.phoneNumber.phone("Geocell");
    expect(phone).toBeDefined();
    expect(typeof phone).toBe("string");
    expect(phone.startsWith("+995559")).toBe(true);
  });

  it("should generate a phone number for Beeline provider", () => {
    const phone = faker.phoneNumber.phone("Beeline");
    expect(phone).toBeDefined();
    expect(typeof phone).toBe("string");
    expect(phone.startsWith("+995551")).toBe(true);
  });
});
