import type { LocaleEntry } from "./definitions";

export type FoodDefinition = LocaleEntry<{
  adjective: string[];
  description_pattern: string[];
  dish: string[];
  dish_pattern: string[];
  ethnic_category: string[];
  fruit: string[];
  ingredient: string[];
  meat: string[];
  spice: string[];
  vegetable: string[];
}>;
