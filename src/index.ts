import { Faaker } from "./faaker";

// export type { Faaker } from "./faaker";

export const faaker = new Faaker();
console.log("test", faaker.person.firstName(), faaker.person.lastName());
