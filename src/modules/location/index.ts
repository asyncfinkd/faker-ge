import { ModuleBase } from "../../internal/module-base";
import { lazyLoad } from "../../utils/data-loader";

const loadData = {
  city: lazyLoad(() => import("../../data/location/city")),
  street: lazyLoad(() => import("../../data/location/street")),
  region: lazyLoad(() => import("../../data/location/region")),
  zipCodes: lazyLoad(() => import("../../data/location/zip_codes")),
};

export class LocationModule extends ModuleBase {
  private readonly mapTheArray = <T>(array: T[]): T => {
    return array[Math.floor(Math.random() * array.length)];
  };

  private readonly generateNumber = (min: number, max: number): string => {
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
  };

  async getRegion(): Promise<string> {
    const regionData = await loadData.region();
    return this.mapTheArray(regionData.default.generic);
  }

  async getCity(): Promise<string> {
    const cityData = await loadData.city();
    return this.mapTheArray(cityData.default.generic);
  }

  async getStreet(): Promise<string> {
    const streetData = await loadData.street();
    return this.mapTheArray(streetData.default.generic);
  }

  async getZipCode(): Promise<string> {
    const zipData = await loadData.zipCodes();
    return this.mapTheArray(zipData.default.generic);
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
