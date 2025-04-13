import { ModuleBase } from "../../internal/module-base";
import { city, street, region, zip_codes } from "../../data/location";

export class LocationModule extends ModuleBase {
  private readonly mapTheArray = <T>(array: T[]): T => {
    return array[Math.floor(Math.random() * array.length)];
  };

  private readonly generateNumber = (min: number, max: number): string => {
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
  };

  private readonly selectDefinition = (entry: {
    generic: string[];
  }): string[] => {
    return entry.generic;
  };

  /**
   * Generates a random region
   * @returns {string} A random region
   */
  getRegion(): string {
    return this.mapTheArray(this.selectDefinition(region));
  }

  /**
   * Generates a random city
   * @returns {string} A random city
   */
  getCity(): string {
    return this.mapTheArray(this.selectDefinition(city));
  }

  /**
   * Generates a random street
   * @returns {string} A random street
   */
  getStreet(): string {
    return this.mapTheArray(this.selectDefinition(street));
  }

  /**
   * Generates a random zip code
   * @returns {string} A random zip code
   */
  getZipCode(): string {
    return this.mapTheArray(this.selectDefinition(zip_codes));
  }

  /**
   * Generates a random building number
   * @returns {string} A random building number
   */
  getBuildingNumber(): string {
    return this.generateNumber(1, 500);
  }

  /**
   * Generates a random apartment number
   * @returns {string} A random apartment number
   */
  getApartmentNumber(): string {
    return this.generateNumber(1, 100);
  }

  /**
   * Generates a random floor number
   * @returns {string} A random floor number
   */
  getFloorNumber(): string {
    return this.generateNumber(1, 10);
  }
}
