class Student {
    private id: string;
    protected firstName: string;
    public lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.id = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getId(){
        return this.id;
    }
}

class FullTimeStudent extends Student{

    // constructor(protected firstName:string, public lastName: string, private ssn: string) {
    //     super(ssn, firstName, lastName);
    // }

    constructor(public firstName:string, public lastName: string, private ssn: string) {
        super(ssn, firstName, lastName);
    }

    getFullName(): string {
        return this.firstName; // protected is only accessible in subclasses.
    }

}

let student1 = new Student("1", "Piyush", "Kumar");
console.log("Student1 : ", student1);

let student2 = new FullTimeStudent("Piyush", "Kumar", "1");
console.log("Student2 : ", student2);


