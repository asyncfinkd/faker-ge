import { PersonalNumberModule } from "./modules/personal_number";
import { Faker } from "./faker";

const faker = new Faker();
export const personalNumber = faker.personalNumber;
export type { PersonalNumberModule };
