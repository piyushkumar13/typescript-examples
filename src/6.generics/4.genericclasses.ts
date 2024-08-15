

class MyStack<T> {

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

let strStack = new MyStack<string>();
strStack.add("piyush");
strStack.add("kumar");
console.log("StrStack is : ", strStack.getCollection());

let numStack = new MyStack<number>();
numStack.add(1);
numStack.add(2);
console.log("NumStack is : ", numStack.getCollection());