import { describe, it, expect } from "vitest";
import { faker } from "../../../src";

describe("Person Module", () => {
  it("should generate a first name", () => {
    const firstName = faker.person.firstName();
    expect(firstName).toBeDefined();
    expect(typeof firstName).toBe("string");
    expect(firstName.length).toBeGreaterThan(0);
  });

  it("should generate a male first name", () => {
    const firstName = faker.person.firstName("male");
    expect(firstName).toBeDefined();
    expect(typeof firstName).toBe("string");
  });

  it("should generate a female first name", () => {
    const firstName = faker.person.firstName("female");
    expect(firstName).toBeDefined();
    expect(typeof firstName).toBe("string");
  });

  it("should generate a last name", () => {
    const lastName = faker.person.lastName();
    expect(lastName).toBeDefined();
    expect(typeof lastName).toBe("string");
    expect(lastName.length).toBeGreaterThan(0);
  });

  it("should generate a full name", () => {
    const fullName = faker.person.fullName();
    expect(fullName).toBeDefined();
    expect(typeof fullName).toBe("string");
    expect(fullName.split(" ").length).toBe(2);
  });

  it("should generate a job descriptor", () => {
    const jobDescriptor = faker.person.jobDescriptor();
    expect(jobDescriptor).toBeDefined();
    expect(typeof jobDescriptor).toBe("string");
  });

  it("should generate a job type", () => {
    const jobType = faker.person.jobType();
    expect(jobType).toBeDefined();
    expect(typeof jobType).toBe("string");
  });
});
