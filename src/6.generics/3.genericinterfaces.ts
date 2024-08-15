

/* ============ Generic interfaces that describe object properties ============ */
interface Pair<K, V>{
    key: K;
    value: V;
}

let mon: Pair<string, number> = {
    key: "Mon",
    value: 2
};

console.log("Mon : ", mon);

/* =============== Generic interfaces that describe methods ================ */

interface MyCollection<T>{

    add(o: T): void;
    remove(o: T): T | undefined;
    getCollection(): T[];
}

class MyList<T> implements MyCollection<T>{

    private items: T[] = [];

    add(o: T): void {

        this.items.push(o);
    }

    remove(o: T): T | undefined {
        return this.items.pop();
    }

    getCollection(): T[] {
        return this.items;
    }
}

let myList = new MyList<string>();
myList.add("Hello");
myList.add("World");
console.log("List is : ", myList.getCollection());

let myList2 = new MyList<number>();
myList2.add(1);
myList2.add(2);
console.log("List is : ", myList2.getCollection());