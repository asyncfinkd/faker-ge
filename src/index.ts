import { Faker } from "./faker";

// export type { Faaker };

export const faker = new Faker();
console.log(faker.person.jobDescriptor());
