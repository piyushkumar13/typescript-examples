

/* Variable declaration with their 1.types. */
let myNum: number;
let myBigNum: bigint;
let myStr: string;
let myBool: boolean;
let myNull: null;
let myUndefined: undefined;


/* Variable initialization : We can assign value to variables only as per their 1.types. */
myNum = 10;
myNum = 9.8;
myNum = 0b00101; // binary number, we can also use b in upper case like 0B00101
myNum = 0o10; // octal number, we can also use o in upper case like 0O10
myNum = 0xA; // hexadecimal number, we can also use x in upper case like 0XA
myBigNum = 9007199254740991n; //A Big integer literal has the n at the end of an integer literal

myStr = "Hello World";
myStr = ` Hello 
to the world of
Typescript: ${myNum}
`; // Using backticks, es6 feature for multi lines, also we can use expression in it with ${something}

myBool = true;
myNull = null;
myUndefined = undefined;

console.log("myNum value : ", myNum);
console.log("myStr value : ", myStr);
console.log("myBool value : ", myBool);
console.log("myNull value : ", myNull);
console.log("myUndefined value : ", myUndefined);

/* We cannot assign value to variables other than their 1.types. So, following are invalid. */
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