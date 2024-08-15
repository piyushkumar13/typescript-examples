
abstract class Employee {

    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFirstName(){
        return this.firstName;
    }

    getLastName(){
        return this.lastName;

    }

    abstract getType(): string;
}

class FullTime extends Employee {
    
     constructor(firstName: string, lastName: string) {
         super(firstName, lastName);
     }

    getType(): string {
        return "Full Time";
    }
}

class Contract extends Employee{

    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    getType(): string {
        return "Contract";
    }
}

let employee1: Employee = new FullTime("Piyush", "Kumar");
console.log("Employee1 : ", employee1);
console.log("Employee1 type is : ", employee1.getType());

let employee2: Employee = new Contract("ABC", "Kumar");
console.log("Employee2 : ", employee2);
console.log("Employee2 type is : ", employee2.getType());