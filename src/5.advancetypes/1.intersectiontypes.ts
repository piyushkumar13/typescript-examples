interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}

type MyEmployee = Identity & Contact;
type MyCustomer = BusinessPartner & Contact;

let myEmployee: MyEmployee = {
    id: 100,
    name: "Piyush Kumar",
    email: "pk@example.com",
    phone: "9999999999"
};

let mycustomer: MyCustomer = {

    name: "ABC Kumar",
    credit: 123,
    email: "abc@example.com",
    phone: "8888888888"
};