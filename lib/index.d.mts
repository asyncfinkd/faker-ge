declare abstract class SimpleModuleBase {
    protected readonly faaker: Faaker;
    constructor(faaker: Faaker);
}
declare abstract class ModuleBase extends SimpleModuleBase {
    protected readonly faaker: Faaker;
    constructor(faaker: Faaker);
}

declare class PersonModule extends ModuleBase {
    private readonly selectDefinition;
    firstName(): string;
}

declare class Faaker {
    readonly person: PersonModule;
}

declare const faaker: Faaker;

export { faaker };
