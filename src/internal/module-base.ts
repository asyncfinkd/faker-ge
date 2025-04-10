import { Faaker } from "../faaker";

export abstract class SimpleModuleBase {
  constructor(protected readonly faaker: Faaker) {}
}

export abstract class ModuleBase extends SimpleModuleBase {
  constructor(protected readonly faaker: Faaker) {
    super(faaker);
  }
}
