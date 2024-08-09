

/* Arrays */

let myNumArr: number[];
let myStrArr: string[];
let myBoolArr: boolean[];

myNumArr = [];
myNumArr = [1, 2, 3];
myNumArr.push(4);
//myNumArr.push("Hello"); // Invalid as type is number.
// myNumArr = ["Invalid", "Array"]; // Invalid array - not matching with the type
console.log("myNumArr : ", myNumArr);

myStrArr = [];
myStrArr = ["Valid", "Array"];
// myStrArr = [1, 2, 3]; // Invalid array - not matching with the type

myBoolArr = [];
myBoolArr = [false, true, false];
// myBoolArr = [1, 2, 3];  // Invalid array - not matching with the type

/* We can also initialize arrays with declaration. */

let myNumArr2: number[] = [1,2,3];
let myStrArr2: string[] = ["Array","with", "initialization"];
let myBoolArr2: boolean[] = [true, false, true];

/* Support for multipe 1.types in array */
let myNumArr3: (number | string)[] = ["Piyush"]; // it can contain elements of 1.types number or string or for both.
myNumArr3 = ["Valid", 1];
myNumArr3 = [2, "Valid", 1];

/* Tuple */

let myTuple: [number, string];
myTuple = [1, "Hello"];
// myTuple = [2, false]; // Invalid as elements should exactly match the order of 1.types.

let myTuple2: [number, string] = [2, "Hello again"];

let myTuple3: [number, string, boolean?]; // here boolean will be optional in tuple.
myTuple3 = [3, "Valid", true];
myTuple3 = [4, "Valid too"];
