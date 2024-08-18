
/* Generic type alias for object. */
type ListType<T> = {elements:T[]};
let myNumObjList: ListType<number> = {elements: [1,2,3,4]};
console.log("The my obj num list : ", myNumObjList);

/* Generic type alias for array. */
type ListItem<A> = A[];
let myNumList: ListItem<number> = [1, 2, 3];
console.log("myNumList : ", myNumList);

/* Generic type alias for function. */
type listFunc<T> = (args: T) => void;
let myListFunc: listFunc<number> = (args: number) => {
    console.log("List function : ",args);
};
myListFunc(1);