import { color, fuel, model } from "../../data/vehicle";
import { ModuleBase } from "../../internal/module-base";

export class VehicleModule extends ModuleBase {
  private readonly mapTheArray = <T>(array: T[]): T => {
    return array[Math.floor(Math.random() * array.length)];
  };

  private readonly selectDefinition = <T>(entry: { generic: T[] }): T[] => {
    return entry.generic;
  };

  /**
   * Generates a random vehicle model
   * @returns {string} A random vehicle model
   */
  model(): string {
    return this.mapTheArray(this.selectDefinition(model));
  }

  /**
   * Generates a random vehicle fuel
   * @returns {string} A random vehicle fuel
   */
  fuel(): string {
    return this.mapTheArray(this.selectDefinition(fuel));
  }

  /**
   * Generates a random vehicle color
   * @returns {string} A random vehicle color
   */
  color(): string {
    return this.mapTheArray(this.selectDefinition(color));
  }
}
