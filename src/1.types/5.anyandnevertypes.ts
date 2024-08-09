/* Any type */
let myAnyVarA; // if type is not declared, it will be of "any" type which can store any type of value.

myAnyVarA = 10;
myAnyVarA = "Some string";
myAnyVarA = false;

console.log(myAnyVarA);


/* Never type */

/* Never type is useful where functions that never completed normally (raise an exception or have an indefinite loop).
   Used for unreachable code paths. */
let myNeverVarA: never; // We cannot assign a value to variable of never type.

// myNeverVarA = 10; // It is invalid as we cannot assign a value to variable of never type.

