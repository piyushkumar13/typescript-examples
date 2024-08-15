
let add1 = function (...nums: number[]): number{

    let total = 0;
    nums.forEach(num => total += num);

    return total;
};

let sum1 = add1(1,2,3);

console.log("Sum1 is : ", sum1);

/* With multiple types */


let add2 = function (...nums: (number | string)[]): [number, string] {

    let totalNum = 0;
    let totalStr = "";

    nums.forEach(num => {

        if (typeof num === "number"){
            totalNum += num;
        }else if (typeof num === "string"){

            totalStr += num;
        }
    });
    return [totalNum, totalStr];
};

let [numResult, strResult] =  add2(1, 3, "Hello", 4, "Kumar");

console.log("numResult is : ", numResult);
console.log("strResult is : ", strResult);
