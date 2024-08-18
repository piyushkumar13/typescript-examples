/* ================== Introduction to TypeScript interfaces. ================ */

/* TypeScript interfaces define the contracts within your code. They also provide explicit names for type checking.  */

function getFullName(person: {
    firstName: string,
    lastName: string
}): string {

    return person.firstName + " " + person.lastName;
}

let person = {
    firstName: "Piyush",
    lastName: "kumar"
};

let fullName = getFullName(person);
console.log("The fullname is : ", fullName);

/*
In the above example, the TypeScript compiler checks the argument you pass into the getFullName() function.
If the argument has two properties firstName and lastName and their types are strings, then the TypeScript compiler passes the check. Otherwise, it’ll issue an error.
The type annotation of the function argument makes the code difficult to read. To address this issue, TypeScript introduces the concept of interfaces.
*/

interface MyPerson {

    firstName: string;
    lastName: string;
}

function getFullNameAgain(myPerson: MyPerson): string {
    return myPerson.firstName + " " + myPerson.lastName;
}

let fullNameAgain = getFullNameAgain(person);
console.log("Full name again is : ", fullNameAgain);


/* person2 can also be passed to interface type MyPerson as it fulfills the contract i.e firstName and lastName though it has extra properties.
   The required properties by interface are fulfilled by person2. */
let person2 = {
    firstName: "ABC",
    lastName: "Kumar",
    age: 34,
    location: "Blr"
};

let fullNameAgain2 = getFullNameAgain(person2);
console.log("Full name again2 is : ", fullNameAgain2);

/* ====================== Interface with optional properties. =================== */

interface MyStudent {

    firstName: string;
    lastName: string;
    subject: string;
    age?: number
    readonly college: string
}

let student1: MyStudent = {
    firstName: "Abhi",
    lastName: "shek",
    subject: "Science",
    college: "SOME College"
};

function getStudentName(myStudent1: MyStudent): String{

    return myStudent1.firstName + myStudent1.lastName + " " + myStudent1.subject;
}

let student1FullNameWithSubject = getStudentName(student1);
console.log("Student1 : ", student1FullNameWithSubject);

// student1.college = "ABC College"; // This will give error as college is readonly property and cannot be set again.

/* ================ Interface with function type ===================== */

interface StringFormat1 {

    (str: string, addOn: number): string;
}


let myStringFormatter1: StringFormat1 = (name: string, addOn: number) => {

    return name + addOn;
};

console.log("My string formatter 1", myStringFormatter1("PK", 3));


/* ===================== Interface with array type ==================== */

interface INumArray {
    [index: number]: number;
}
let myNumArray: INumArray = [1,3,4];
console.log("MyNumArray : ", myNumArray);

interface IStrArray {
    [index: string]: string;
}
let myStrArray: IStrArray = {firstElement: "Piyush", secondElement: "Kumar"};
myStrArray["thirdElement"] = "Kirad";
console.log("MyStrArray : ", myStrArray);


/* ===================== Interface implementation by classes ========================= */

interface StringFormat2 {

    format(str: string, addOn: number): string;
}

let myStringFormatter2: StringFormat2 = { // It is duck typing. Implementing StringFormat2

    format(str: string, addOn: number): string {
        return str + " " + addOn;
    }
};

console.log("My string formatter 2", myStringFormatter2.format("AB", 2));

interface StringFormat3 {

    format(str: string, addOn: number): string;
}

class MyStringFormatter3 implements StringFormat3 {

    constructor(private formatterName: string, private formatterType: string) {
    }
    format(str: string, addOn: number): string {
        return "Formatter : " + this.formatterName + ", Formatter type : " + this.formatterType + ", value : " +  str + " " + addOn;
    }
}

let myStringFormatter3: StringFormat3 = new MyStringFormatter3("StringFormatter", "string");
console.log("My string formatter 3 :::: ", myStringFormatter3.format("XY", 2));
