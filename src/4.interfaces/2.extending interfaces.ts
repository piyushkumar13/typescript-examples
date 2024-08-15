
/* ===================== Interface extending interface ===================== */
interface Mailable{
    send(email: string): void;
    queue(email: string): void;
}

interface FutureMailable extends Mailable{

    later(email: string): void;
}

interface MailAttributes{

    getMetaData(): string;
}

class Email implements FutureMailable, MailAttributes{

    getMetaData(): string {
        return "sender: pk@some.com; receiver: abc@some.com";
    }

    later(email: string) {
        console.log("Will send email later. Email : ", email);
    }

    queue(email: string) {
        console.log("Email is queued. Email : ", email);
    }

    send(email: string) {
        console.log("Sending email : ", email);
    }
}

let myEmail: (FutureMailable & MailAttributes) = new Email();

myEmail.send("msg1");
myEmail.queue("msg2");
myEmail.later("msg3");
myEmail.getMetaData();


/* =================== Interfaces extending multiple interfaces ====================== */
interface B {
    b(): void
}

interface C {
    c(): void
}

interface D extends B, C {
    d(): void
}

/* ============== Interfaces extending classes ================== */

/*
TypeScript allows an interface to extend a class. In this case, the interface inherits the properties and methods of the class.
Also, the interface can inherit the private and protected members of the class, not just the public members.

It means that when an interface extends a class with private or protected members, the interface can only be
implemented by that class or subclasses of that class from which the interface extends.

By doing this, you restrict the usage of the interface to only classes or subclasses of the class from
which the interface extends. If you attempt to implement the interface from a class that is not a subclass of the class
that the interface inherited, you’ll get an error. For example:
*/

class Control {
    private state: boolean;
}

interface StatefulControl extends Control {
    enable(): void
}

class Button extends Control implements StatefulControl {
    enable() { }
}
class TextBox extends Control implements StatefulControl {
    enable() { }
}
class Label extends Control { }


// class Chart implements StatefulControl { // Its not valid as chart is not the subclass of Control.
//     enable() { }
//
// }