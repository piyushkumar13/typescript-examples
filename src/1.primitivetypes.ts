

/* Variable declaration with their types. */
let myNum: number;
let myStr: string;
let myBool: boolean;
let myNull: null;
let myUndefined: undefined;


/* Variable initialization : We can assign value to variables only as per their types. */
myNum = 10;
myStr = "Hello World";
myBool = true;
myNull = null;
myUndefined = undefined;

console.log("myNum value : ", myNum);
console.log("myStr value : ", myStr);
console.log("myBool value : ", myBool);
console.log("myNull value : ", myNull);
console.log("myUndefined value : ", myUndefined);

/* We cannot assign value to variables other than their types. So, following are invalid. */
// myNum = "Hello World";
// myStr = 10;
// myBool = 1;
// myNull = undefined;
// myUndefined = null;


/* We can also declare variables and assign value together. */

let myNum2: number = 12;
let myStr2: string = "Hello again";
let myBool2: boolean = false;
let myNull2: null = null;
let myUndefined2: undefined = undefined;

console.log("myNum2 value : ", myNum2);
console.log("myStr2 value : ", myStr2);
console.log("myBool2 value : ", myBool2);
console.log("myNull2 value : ", myNull2);
console.log("myUndefined2 value : ", myUndefined2);