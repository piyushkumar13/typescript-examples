let employee: object;

employee = {
    firstName: "Piyush",
    lastName: "Kumar",
    company: "ABC"
};

console.log("Employee : ", employee);

let employeeWithInit: object = {
    firstName: "Piyush",
    lastName: "Kumar",
    company: "ABC"
};

console.log("EmployeeWithInit : ", employeeWithInit);


/* To explicitly specify properties of the employee object. */
let employee2: {
    firstName: string,
    lastName: string,
    age: number
};

employee2 = {
    firstName: "Piyush",
    lastName: "Kumar",
    age: 34
};

console.log("Employee2 : ", employee2);


let employee2WithInit: {
    firstName: string,
    lastName: string,
    age: number
} = {
    firstName: "Piyush",
    lastName: "Kumar",
    age: 34
};

console.log("Employee2WithInit : ", employee2WithInit);

/* Empty object */

let employee3: {};

employee3 = {};

// employee3.firstName = "Piyush"; // It will give error
// employee3 = { // TODO : This does not give error. Not sure why ?
//     firstName: "Piyush"
// };

console.log("Empty employee3 : ", employee3);

let employee3WithInit: {} = {};
console.log("employee3WithInit : ", employee3WithInit);


let employee4: Object = {
    firstName: "Piyush"
};