
/* ============ Generic functions =============== */
function getValues<T>(values: T[]): T[]{

    return values;
}

let names: string[] = ["Piyush", "Abhishek", "Satish"];
let namesValues = getValues(names);
console.log("The namesValues are : ", namesValues);

let nums: number[] = [1,23,32];
let numValues = getValues(nums);
console.log("The numValues are : ", numValues);

/* ========= Generic functions with multiple types ========== */

function merge<T, U>(obj1: T, obj2: U): (T & U){

    return {
        ...obj1,
        ...obj2
    };
}

let mergedObj = merge({firstName: "Piyush"}, {lastName: "Kumar"});
console.log("Merged object is : ", mergedObj);