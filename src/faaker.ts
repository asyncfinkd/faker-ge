import { PersonModule } from "./modules/person";

export class Faaker {
  readonly person: PersonModule = new PersonModule(this);
}
