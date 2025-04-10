import { last_name } from "../../data";
import first_name from "../../data/person/first_name";
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
  private readonly selectDefinition = <T>(
    entry: PersonEntryDefinition<T>,
    sex?: SexType | undefined
  ): T => {
    const { generic } = entry;

    if (sex && entry[sex] && entry[sex].length > 0) {
      return entry[sex][Math.floor(Math.random() * entry[sex].length)] as T;
    }

    if (generic && generic.length > 0) {
      return generic[Math.floor(Math.random() * generic.length)] as T;
    }

    return {} as T;
  };

  firstName(sex?: SexType): string {
    return this.selectDefinition(first_name, sex);
  }

  lastName(sex?: SexType): string {
    return this.selectDefinition(last_name, sex);
  }

  middleName(sex?: SexType): string {
    return this.selectDefinition(first_name, sex);
  }

  fullName(sex?: SexType): string {
    return `${this.firstName(sex)} ${this.lastName(sex)}`;
  }

  prefix(sex?: SexType) {
    return this.selectDefinition<string>(prefix, sex);
  }
}
