import { PersonModule } from "./modules/person";
import { PersonalNumberModule } from "./modules/personal_number";
import { PhoneNumberModule } from "./modules/phone_number";

export class Faker {
  readonly person: PersonModule = new PersonModule(this);
  readonly personalNumber: PersonalNumberModule = new PersonalNumberModule(
    this
  );
  readonly phoneNumber: PhoneNumberModule = new PhoneNumberModule(this);
}
