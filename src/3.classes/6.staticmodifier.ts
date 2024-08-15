
class Person {
    private static count: number = 0; // by default, initialized with undefined.

    constructor(private _firstName: string, private _lastName: string) {

        Person.count++
    }


    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    static getCount(){
        return Person.count;
    }
}

let personA: Person = new Person("ABC", "Kumar");

console.log("Person firstName is : ", personA.firstName);
console.log("Person lastName is : ", personA.lastName);
console.log("Person count is : ", Person.getCount());