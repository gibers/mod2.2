define(["require", "exports", "./Person"], function (require, exports, Person_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function LogPeople(people) {
        for (let person of people) {
            console.log(person.toString());
        }
    }
    exports.people = [
        new Person_1.Person("Raja", "Mani"),
        new Person_1.Person("jb", "Chanel")
    ];
    LogPeople(exports.people);
});
//# sourceMappingURL=main.js.map