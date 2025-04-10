import { describe, it, expect } from "vitest";
import { faker } from "../../../src";

describe("Location Module", () => {
  it("should generate a region", () => {
    const region = faker.location.getRegion();
    expect(region).toBeDefined();
    expect(typeof region).toBe("string");
    expect(region.length).toBeGreaterThan(0);
  });

  it("should generate a city", () => {
    const city = faker.location.getCity();
    expect(city).toBeDefined();
    expect(typeof city).toBe("string");
    expect(city.length).toBeGreaterThan(0);
  });

  it("should generate a street", () => {
    const street = faker.location.getStreet();
    expect(street).toBeDefined();
    expect(typeof street).toBe("string");
    expect(street.length).toBeGreaterThan(0);
  });

  it("should generate a zip code", () => {
    const zipCode = faker.location.getZipCode();
    expect(zipCode).toBeDefined();
    expect(typeof zipCode).toBe("string");
    expect(zipCode.length).toBeGreaterThan(0);
  });

  it("should generate a building number", () => {
    const buildingNumber = faker.location.getBildingNumber();
    expect(buildingNumber).toBeDefined();
    expect(typeof buildingNumber).toBe("string");
  });

  it("should generate an apartment number", () => {
    const apartmentNumber = faker.location.getApartmentNumber();
    expect(apartmentNumber).toBeDefined();
    expect(typeof apartmentNumber).toBe("string");
  });
});
