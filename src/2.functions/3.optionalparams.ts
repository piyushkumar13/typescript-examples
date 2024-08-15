
function add(a: number, b: number, c?: number): number{

    if (!c){
        console.log("C is either undefined or null1 ");
        return a+b;
    }

    return a + b + c;
}

let sum1: number = add(1,2);
console.log("Sum1 is : ", sum1);

let sum2: number = add(1,2, 3);
console.log("Sum2 is : ", sum2);


