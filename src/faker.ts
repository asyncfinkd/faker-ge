import { PersonModule } from "./modules/person";

export class Faker {
  readonly person: PersonModule = new PersonModule(this);
}
