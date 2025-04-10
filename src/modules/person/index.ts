import { last_name } from "../../data";
import first_name from "../../data/person/first_name";
import { ModuleBase } from "../../internal/module-base";

export class PersonModule extends ModuleBase {
  private readonly selectDefinition = (data: string[]) => {
    return data[Math.floor(Math.random() * data.length)];
  };

  firstName(): string {
    return this.selectDefinition(first_name);
  }

  lastName(): string {
    return this.selectDefinition(last_name);
  }
}
