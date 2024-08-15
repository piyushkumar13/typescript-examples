/*
Type assertions instruct the TypeScript compiler to treat a value as a specified type. Basically, use to perform type casting.
In TypeScript, you can use the as keyword or <> operator for type assertions.
*/

let price: number;

price = 100;

let anotherPrice: any = price as any;

console.log("Another price is : ", anotherPrice);
console.log("Type of Another price is : ", typeof anotherPrice);


let price2: number;

price2 = 100;

let anotherPrice2: any = <any>price2;

console.log("Another price is : ", anotherPrice2);
console.log("Type of Another price is : ", typeof anotherPrice2);