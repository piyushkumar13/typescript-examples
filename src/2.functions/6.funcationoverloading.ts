
/*
Note: TypeScript function overloading is unlike the function overloading supported by other statically typed languages such as Java.
In typescript, function overloading allows you to define multiple signatures for a single function and provide one implementation that handles all defined signatures.
*/


function sum1(a: number, b: number): number;
function sum1(a: string, b: string): string;

function sum1(a: any, b: any): any{

    if (typeof a === "string" && typeof b === "string"){

        return a + b;
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }

    throw new Error("Invalid arguments");

}

let intRes = sum1(1, 3);
console.log("intResult : ", intRes);

let strRes = sum1("Hello ", "World");
console.log("strRes : ", strRes);

/* When you overload a function, the number of required parameters must be the same.
If an overload has more parameters than the other, you need to make the additional parameters optional. */

function sum2(a: number, b: number): number;
function sum2(a: number, b: number, c: number): number;
function sum2(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}

let sum2Res1 = sum2(1, 3);
console.log("sum2Res1 : ", sum2Res1);

let sum2Res2 = sum2(1, 3, 4);
console.log("sum2Res2 : ", sum2Res2);
