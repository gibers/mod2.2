define(["require", "exports", "./greeter"], function (require, exports, greeter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Person {
        constructor(firstName = "fn", lastName = "ln") {
            this.firstName = firstName;
            this.lastName = lastName;
            this.toString = () => {
                return this.stringify();
            };
            this.firstName = firstName;
            this.lastName = lastName;
        }
        stringify() {
            return `${this.greeting}, ${this.fullName}!`;
        }
        get greeting() {
            return greeter_1.Greeter.message();
        }
        get fullName() {
            return `${this.firstName}, ${this.lastName}`;
        }
    }
    exports.Person = Person;
});
//# sourceMappingURL=Person.js.map