/* Following will work perfectly fine */

function merge<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}

let result = merge(
    {name: 'Piyush'},
    {age: 25}
);

console.log(result);

/* Now following will not work as expected. */

let result2 = merge(
    {name: 'Piyush'},
    25
);

/* Following will result only {name: "Piyush"}.
   However, it doesn’t prevent you from passing a non-object which is 25 here.
   TypeScript doesn’t issue any errors below. */
console.log("The result 2 : ", result2);


/* Instead of working with all types, you may want to add a constraint to the merge() function so that it works with objects only. */

function mergeObjs<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}

// let result3 = mergeObjs({firstName: "ABC"}, 25); // Now, you will get compilation error as expected is object type not primitive type.

let result3 = mergeObjs({firstName: "ABC"}, {age: 34});
console.log("The result 3 : ", result3);


/* ================= Using type parameters in generic constraints ============= */

// function prop<T, K>(obj: T, key: K) {
//     return obj[key];
// }


// let propValue = prop({firstName: "Piyush", lastName: "Kumar"}, "firstName"); // Here compiler issues error Type 'K' cannot be used to index type 'T'.
// console.log("The prop value is :: ", propValue);

/* To fix above error, you add a constraint to K to ensure that it is a key of T as follows: */

function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
let propValue = prop({firstName: "Piyush", lastName: "Kumar"}, "firstName");
console.log("The prop value is :: ", propValue);

// If you pass a key that doesn’t exist on the first argument, the compiler will issue an error as depicted below : 

// let propValue2 = prop({firstName: "Piyush", lastName: "Kumar"}, "age"); //
// console.log("The prop value2 is :: ", propValue2);




































