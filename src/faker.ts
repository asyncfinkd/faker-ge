import { PersonModule } from "./modules/person";
import { PersonalNumberModule } from "./modules/personal_number";

export class Faker {
  readonly person: PersonModule = new PersonModule(this);
  readonly personalNumber: PersonalNumberModule = new PersonalNumberModule(
    this
  );
}
