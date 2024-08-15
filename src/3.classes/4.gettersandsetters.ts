
/*

Ref link : https://byby.dev/ts-getters-setters
strictPropertyInitialization

The strictPropertyInitialization compiler option is used to enforce stricter initialization rules for class properties. When strictPropertyInitialization is enabled, TypeScript requires that all non-optional properties of a class are initialized either in the constructor or at the point of declaration.

{
  "compilerOptions": {
    // Default to `true` if strict, `false` otherwise.
    "strictPropertyInitialization": false,
  }
}

In case strictPropertyInitialization is true, compiler will complain:
Property '_myProperty' has no initializer and is not definitely assigned in the constructor.


*/
class Student {
    private _firstName: string;
    private _lastName: string;
    private _age: number;

    constructor(private readonly _title: string) {
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

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get title(): string {
        return this._title;
    }
}

let student: Student = new Student("Engineer");

/* Setters being called. */
student.firstName = "XYZ";
student.lastName = "Kumar";
student.age = 34;

/* Getters being called. */
console.log("FirstName is : ", student.firstName);
console.log("LastName is : ", student.lastName);
console.log("Age is : ", student.age);
console.log("Title is : ", student.title);


console.log("The student : ", student);