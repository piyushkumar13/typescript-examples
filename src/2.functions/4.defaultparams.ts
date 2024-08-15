
let sum1 = function (a: number, b: number = 2): number {

    return a + b;
};

console.log("Sum1 : ", sum1(1,undefined));

/*
Optional parameters must come after the required parameters. However, default parameters don’t need to appear after the required parameters.
When a default parameter appears before a required parameter, you need to explicitly pass undefined to get the default initialized value.
*/
let sum2 = function (a: number = 3, b: number): number {

    return  a + b;
};
console.log("Sum2 : ", sum2(undefined,4));


let sum3 = function (a: number, b: number = 4, c: number): number{
    return a + b + c;
};

console.log("Sum3 : ", sum3(1, undefined, 2));;