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

  getRegion(): string {
    return this.mapTheArray(this.selectDefinition(region));
  }

  getCity(): string {
    return this.mapTheArray(this.selectDefinition(city));
  }

  getStreet(): string {
    return this.mapTheArray(this.selectDefinition(street));
  }

  getZipCode(): string {
    return this.mapTheArray(this.selectDefinition(zip_codes));
  }

  getBildingNumber(): string {
    return this.generateNumber(1, 500);
  }

  getApartmentNumber(): string {
    return this.generateNumber(1, 100);
  }

  getFloorNumber(): string {
    return this.generateNumber(1, 10);
  }
}
