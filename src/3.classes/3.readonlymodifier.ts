
/*
The assignment to a readonly property can only occur in one of two places:

    In the property declaration.
    In the constructor of the same class.
*/
class Student {
    private readonly firstName: string;
    private readonly lastName: string;
    private readonly age: number;

    constructor(firstName: string, lastName: string, age: number) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // setAge(age: number){ // you cannot set the readonly property again
    //     this.age = age;
    // }
}

let student: Student = new Student("", "", 34);

console.log("The student : ", student);