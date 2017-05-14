import {IPerson} from "./IPerson";
import {Greeter} from "./greeter";

export class Person implements IPerson {
    constructor(public firstName:string="fn" ,
    public lastName:string="ln") {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    toString = () : string => {
        return this.stringify();
    }

    stringify():string {
        return `${this.greeting}, ${this.fullName}!`;
    }

    get greeting():string {
        return Greeter.message();
    }

    get fullName(): string {
        return `${this.firstName}, ${this.lastName}`
    }

}

