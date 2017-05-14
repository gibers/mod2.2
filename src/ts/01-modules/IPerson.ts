export interface IPerson {
    firstName: string;
    lastName: string;
    toString: () => string;
    readonly greeting: string;
    readonly fullName: string;
}

