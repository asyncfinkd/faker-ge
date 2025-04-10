declare abstract class SimpleModuleBase {
    protected readonly faker: Faker;
    constructor(faker: Faker);
}
declare abstract class ModuleBase extends SimpleModuleBase {
    protected readonly faker: Faker;
    constructor(faker: Faker);
}

declare enum Sex {
    Female = "female",
    Male = "male"
}
type SexType = `${Sex}`;
declare class PersonModule extends ModuleBase {
    private readonly mapTheArray;
    private readonly selectDefinition;
    firstName(sex?: SexType): string;
    lastName(sex?: SexType): string;
    middleName(sex?: SexType): string;
    fullName(sex?: SexType): string;
    prefix(sex?: SexType): string;
    gender(sex?: SexType): string;
    jobDescriptor(): string;
    jobType(): string;
}

declare class PersonalNumberModule extends ModuleBase {
    private generateTheId;
    pid(prefix?: string): string;
}

declare class Faker {
    readonly person: PersonModule;
    readonly personalNumber: PersonalNumberModule;
}

declare const faker: Faker;

export { Faker, faker };
