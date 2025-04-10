import type { FoodDefinition } from "./food";

export type LocaleEntry<TCategoryDefinition extends Record<string, unknown>> = {
  [P in keyof TCategoryDefinition]?: TCategoryDefinition[P] | null;
} & Record<string, unknown>; // Unsupported & custom entries
