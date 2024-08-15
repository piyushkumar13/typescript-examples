class Person {

    /* By default, the properties are having public access modifiers. */
    firstName: string;
    lastName: string;
    age: number;

    /* In typescript, we cannot have overloaded constructor, as in typescript we cannot have overloaded functions.
       Its way of having overloaded function is bit different than other languages like java. */
    constructor(firstName: string, lastName: string, age: number) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName(): string {

        return this.firstName + this.lastName;
    }

    getAge(): number {
        return this.age;
    }
}

let person = new Person("Piyush", "Kumar", 34);

console.log("Person is : " + person);
console.log("Person is : ", person);

/* Shorter way of defining classes. */

class Person2 {

    constructor(public firstName: string, public lastName: string, public age: number) {
        /* This typescript shorthand syntax auto assigns the properties of the class as the above class. */
    }

    getFullName(): string {

        return this.firstName + this.lastName;
    }

    getAge(): number {
        return this.age;
    }
}

let person2 = new Person2("Piyush", "Kumar", 34);

console.log("Person2 is : " + person2);
console.log("Person2 is : ", person2);