
/* Function types */
let add1: (operand1: number, operand2: number) => number;

add1 = function (a: number, b: number): number{

    return a + b;
};

let sum1 = add1(10, 4);
console.log("Sum1 is : ", sum1);

/* Declaration and initialization together */
let add2: (a: number, b: number) => number = function (a: number, b: number): number{
    return a + b;
};

let sum2 = add2(10, 5);
console.log("Sum2 is : ", sum2);


/* Function type inference */
let add3 = function (a: number, b: number): number {
    return a+b;
};

let sum3 = add3(12, 4);
console.log("Sum3 is : ", sum3);
