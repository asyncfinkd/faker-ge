import {
  gender,
  last_name,
  job_descriptor,
  first_name,
  job_type,
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
        return generic ?? [];
    }
  };

  firstName(sex?: SexType): string {
    return this.mapTheArray(this.selectDefinition(first_name, sex));
  }

  lastName(sex?: SexType): string {
    return this.mapTheArray(this.selectDefinition(last_name, sex));
  }

  middleName(sex?: SexType): string {
    return this.mapTheArray(this.selectDefinition(first_name, sex));
  }

  fullName(sex?: SexType): string {
    return `${this.firstName(sex)} ${this.lastName(sex)}`;
  }

  prefix(sex?: SexType): string {
    return this.mapTheArray(this.selectDefinition(prefix, sex));
  }

  gender(sex?: SexType): string {
    return this.mapTheArray(this.selectDefinition(gender, sex));
  }

  jobDescriptor(): string {
    return this.mapTheArray(this.selectDefinition(job_descriptor));
  }

  jobType(): string {
    return this.mapTheArray(this.selectDefinition(job_type));
  }
}
