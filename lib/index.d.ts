declare abstract class SimpleModuleBase {
    protected readonly faaker: Faaker;
    constructor(faaker: Faaker);
}
declare abstract class ModuleBase extends SimpleModuleBase {
    protected readonly faaker: Faaker;
    constructor(faaker: Faaker);
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
}

declare class Faaker {
    readonly person: PersonModule;
}

export { Faaker };
