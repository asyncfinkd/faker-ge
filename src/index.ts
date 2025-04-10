import { Faker } from "./faker";
import { person } from "./person";
import { personalNumber } from "./personal_number";

const faker = new Faker();

export type { Faker };
export { faker, person, personalNumber };

console.log(person.firstName("male"));
