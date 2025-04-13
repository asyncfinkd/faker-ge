import { fruit, ingredients, vegetable } from "../data/food";
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

  /**
   * Generates a random ingredient
   * @returns {string} A random ingredient
   */
  ingredients(): string {
    return this.mapTheArray(this.selectDefinition(ingredients));
  }

  /**
   * Generates a random vegetable
   * @returns {string} A random vegetable
   */
  vegetable(): string {
    return this.mapTheArray(this.selectDefinition(vegetable));
  }
}
