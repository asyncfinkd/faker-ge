import { Faker } from "../faker";

export abstract class SimpleModuleBase {
  constructor(protected readonly faker: Faker) {}
}

export abstract class ModuleBase extends SimpleModuleBase {
  constructor(protected readonly faker: Faker) {
    super(faker);
  }
}
