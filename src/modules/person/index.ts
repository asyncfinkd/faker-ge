import {
  gender,
  last_name,
  job_descriptor,
  first_name,
  job_type,
  zodiacs,
  bio,
} from "../../data";
import prefix from "../../data/person/prefix";
import { ModuleBase } from "../../internal/module-base";

export enum Sex {
  Female = "female",
  Male = "male",
}

export type SexType = `${Sex}`;

export type PersonEntryDefinition<T> =
  | {
      generic?: T[];
      male: T[];
      female: T[];
    }
  | {
      generic: T[];
      male?: never;
      female?: never;
    };

export class PersonModule extends ModuleBase {
  private readonly mapTheArray = <T>(array: T[]): T => {
    return array[Math.floor(Math.random() * array.length)];
  };

  private readonly selectDefinition = <T>(
    entry: PersonEntryDefinition<T>,
    sex?: SexType | undefined
  ): T[] => {
    const { generic, male, female } = entry;

    switch (sex) {
      case Sex.Male:
        return male ?? generic;
      case Sex.Female:
        return female ?? generic;
      default:
        return generic ?? [...male!, ...female!];
    }
  };

  /**
   * Generates a random first name
   * @param {SexType} [sex] Optional sex to generate a gender-specific name
   * @returns {string} A random first name
   */
  firstName(sex?: SexType): string {
    return this.mapTheArray(this.selectDefinition(first_name, sex));
  }

  /**
   * Generates a random last name
   * @returns {string} A random last name
   */
  lastName(): string {
    return this.mapTheArray(this.selectDefinition(last_name));
  }

  /**
   * Generates a random middle name
   * @param {SexType} [sex] Optional sex to generate a gender-specific middle name
   * @returns {string} A random middle name
   */
  middleName(sex?: SexType): string {
    return this.mapTheArray(this.selectDefinition(first_name, sex));
  }

  /**
   * Generates a random full name (first name + last name)
   * @param {SexType} [sex] Optional sex to generate a gender-specific full name
   * @returns {string} A random full name
   */
  fullName(sex?: SexType): string {
    return `${this.firstName(sex)} ${this.lastName()}`;
  }

  /**
   * Generates a random name prefix (e.g., Mr., Mrs., etc.)
   * @param {SexType} [sex] Optional sex to generate a gender-specific prefix
   * @returns {string} A random name prefix
   */
  prefix(sex?: SexType): string {
    return this.mapTheArray(this.selectDefinition(prefix, sex));
  }

  /**
   * Generates a random gender description
   * @param {SexType} [sex] Optional sex to filter the gender description
   * @returns {string} A random gender description
   */
  gender(sex?: SexType): string {
    return this.mapTheArray(this.selectDefinition(gender, sex));
  }

  /**
   * Generates a random job descriptor (e.g., "Senior", "Lead", etc.)
   * @returns {string} A random job descriptor
   */
  jobDescriptor(): string {
    return this.mapTheArray(this.selectDefinition(job_descriptor));
  }

  /**
   * Generates a random job type (e.g., "Developer", "Engineer", etc.)
   * @returns {string} A random job type
   */
  jobType(): string {
    return this.mapTheArray(this.selectDefinition(job_type));
  }

  /**
   * Generates a random zodiac sign
   * @returns {string} A random zodiac sign
   */
  zodiacSign(): string {
    return this.mapTheArray(this.selectDefinition(zodiacs));
  }

  /**
   * Generates a random biographical description
   * @returns {string} A random biographical description
   */
  bio(): string {
    return this.mapTheArray(this.selectDefinition(bio));
  }
}
