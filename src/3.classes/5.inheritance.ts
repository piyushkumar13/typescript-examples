
class Person {

    // private firstName: string;
    // private lastName: string;

    // constructor(firstName: string, lastName: string) {
    //
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }

    constructor(private firstName: string, private lastName: string) {
    }

    getFullName(){
        return this.firstName + this.lastName;
    }

    describe(){
        console.log("This is Person describe method.");
    }
}

class Employee extends Person{

    /* Notice only jobTitle is having private as it is the property of Employee which will be implicitly declared and initialized
       Whereas firstName and lastName is private property of person which cannot be inherited, it can only be initialized via constructor of Employee. */
    constructor(firstName: string,lastName: string, private jobTitle: string) { 
        super(firstName, lastName);
    }

    getTitle(){
        return this.jobTitle;
    }

    describe() {
        console.log("This is Employee describe method.");
    }
}

let person: Person = new Person("Piyush", "Kumar");

console.log("The person is : ", person);
console.log("The person fullname is : ", person.getFullName());
person.describe();

let employee: Employee = new Employee("P", "K", "Engineer");
console.log("The employee is ", employee);
console.log("The employee fullname is ", employee.getFullName());
console.log("The employee title is ", employee.getTitle());
employee.describe();

let employee2: Person = new Employee("P2", "K2", "Engineer2");
console.log("The employee2 is ", employee2);
console.log("The employee2 fullname is ", employee2.getFullName());
// console.log("The employee2 title is ", employee2.getTitle()); // This will give compilation error as Person time does not recognises getTitle method.
employee2.describe();