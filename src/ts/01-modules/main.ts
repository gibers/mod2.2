import {IPerson} from "./IPerson";
import {Person} from "./Person";

function LogPeople<T extends IPerson>(people: T[]) {
    for(let person of people) {
        console.log(person.toString());
    }
}

export let people : Person[] = [
    new Person("Raja", "Mani"),
    new Person("jb", "Chanel")
]

LogPeople(people);

