//an interface is a contract signed by an object that says
//I guarantee that I have a certain property function
//we are defining the type of a certain field that is available
interface NamedPerson {
    firstName: string;
    age?: number; //? means its an optional argument
    [propName: string]: any; //this is if you know there will be more properties, but you are unsure what they will be
    greet(lastName: string): void;
}

function greet(person: NamedPerson) {
    console.log('Hello,  ' + person.firstName);
}

function changeName(person: NamedPerson) {
    person.firstName = 'Anna';
}

const person: NamedPerson = {
    firstName: 'Danzig',
    age: 38,
    hobbies: ['exercise', 'gardening'],
    greet(lastName: string) {
        console.log(`Hi, I am ${this.firstName} ${lastName}`);
    }
};

// greet({firstName: 'Joe', age: 27});
changeName(person);
greet(person);
person.greet('Darklord');

class Person implements NamedPerson {
    firstName: string;
    lastName: string;
    greet(lastName: string) {
        console.log(`Hi, I am ${this.firstName} ${lastName}`);
    };
}

const myPerson = new Person();
myPerson.firstName = 'Matthew';
myPerson.lastName = 'Darklord';
greet(myPerson);
myPerson.greet(myPerson.lastName);

//function type interfaces
interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(value1: number, value2: number) {
    return (value1 + value2) * 2;
};

console.log(myDoubleFunction(10, 20));

//interface inheritance
interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 54,
    firstName: 'Glen',
    greet(lastName: string) {
        console.log('Hello!');
    }
}

console.log(oldPerson);