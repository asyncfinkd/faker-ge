import { fruit } from "../data/food";
import { ModuleBase } from "../internal/module-base";

export class FoodModule extends ModuleBase {
  private readonly mapTheArray = <T>(array: T[]): T => {
    return array[Math.floor(Math.random() * array.length)];
  };

  private readonly selectDefinition = (entry: {
    generic: string[];
  }): string[] => {
    return entry.generic;
  };

  /**
   * Generates a random fruit
   * @returns {string} A random fruit
   */
  fruit(): string {
    return this.mapTheArray(this.selectDefinition(fruit));
  }
}
