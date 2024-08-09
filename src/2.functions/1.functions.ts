

/* Explicitly defining types. */
function addNums1(a: number, b: number): number {

    return a + b;
}

let addition1: number = addNums1(1, 2);
console.log("Adding two nums 1 : ", addition1);
console.log("addition1 type : ", typeof addition1);


let addition2 = addNums1(4, 5); // type of the variable will be inferred.
console.log("Adding two nums 2 : ", addition2);
console.log("addition2 type : ", typeof addition2);

/* With type inference for return type */
function addNums2(a: number, b: number){ // return type will be inferred.

    return a + b;
}

let addition3 = addNums2(5, 5); // Here type of the variable will be inferred.
console.log("Addition 3 : ", addition3);
console.log("Addition 3 type : ", typeof addition3);


let addition4; // here type of variable is any
addition4 = addNums2(4, 6);
console.log("Addition 4 : ", addition4);
console.log("Addition 4 type : ", typeof addition4);

function addNums3(a: number, b: number) : string { // return type is string.

    return (a + b).toString();
}
let addition5 = addNums3(3, 7);
console.log("Addition 5 : ", addition5);
console.log("Addition 5 type : ", typeof addition5);

function addNums4(a: number, b: number) { // return type is string.

    return String(a + b);
}
let addition6 = addNums4(3, 7);
console.log("Addition 6 : ", addition6);
console.log("Addition 6 type : ", typeof addition6);