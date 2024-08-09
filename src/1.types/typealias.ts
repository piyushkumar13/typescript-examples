
/* Type alias for primitive 1.types. */
type Name = string;

let myName: Name;
myName = "Piyush";
console.log("My name is : ", myName);
console.log("My name type is : ", typeof myName);

type Age = number;

let myAge: Age;
myAge = 34;
console.log("My age is : ", myAge);
console.log("My age type is : ", typeof myAge);


/* Type alias for object type. */
type student = {
    firstName: string,
    lastName: string,
    age: number,
    isFullTime: boolean
}

let myStudent: student = {
    firstName: "Piyush",
    lastName: "Kumar",
    age: 34,
    isFullTime: true
};

console.log("My student is : ", myStudent);
console.log("My student type is : ", typeof myStudent);


/* Type alias for union type. */
type studentId = string | number; // value can be either string or number
let myStudentId1 : studentId = "PL123";
let myStudentId2: studentId = 123;

console.log("myStudentId1 : ", myStudentId1);
console.log("myStudentId1 type : ", typeof myStudentId1);
console.log("myStudentId2 : ", myStudentId2);
console.log("myStudentId2 type : ", typeof myStudentId2);

/* Type alias for intersection type. */
type Personal = {
    name: string;
    age: number;
};

type Contact = {
    email: string;
    phone: string;
};

type Candidate = Personal & Contact; // value should be containing fields of both Personal and Contract.

let candidate: Candidate = {
    name: "Piyush",
    age: 34,
    email: "piyush@example.com",
    phone: "91-9999999999"
};

console.log("My candidate is : ", candidate);
console.log("My candidate type is : ", typeof candidate);