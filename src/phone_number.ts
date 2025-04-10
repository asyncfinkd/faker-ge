import { PhoneNumberModule } from "./modules/phone_number";
import { Faker } from "./faker";

const faker = new Faker();
export const phoneNumber = faker.phoneNumber;
export type { PhoneNumberModule };
