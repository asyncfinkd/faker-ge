import { PersonModule } from "./modules/person";
import { Faker } from "./faker";

const faker = new Faker();
export const person = faker.person;
export type { PersonModule };
