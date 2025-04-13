import { FoodModule } from "./modules/food";
import { LocationModule } from "./modules/location";
import { PersonModule } from "./modules/person";
import { PersonalNumberModule } from "./modules/personal_number";
import { PhoneNumberModule } from "./modules/phone_number";
import { VehicleModule } from "./modules/vehicle";

export class Faker {
  readonly person: PersonModule = new PersonModule(this);
  readonly personalNumber: PersonalNumberModule = new PersonalNumberModule(
    this
  );
  readonly phoneNumber: PhoneNumberModule = new PhoneNumberModule(this);
  readonly location: LocationModule = new LocationModule(this);
  readonly food: FoodModule = new FoodModule(this);
  readonly vehicle: VehicleModule = new VehicleModule(this);
}
