class Person {
    name: string;
    private type: string;
    //private means you can only access it inside of the class
    protected age: number = 38;
    //protected is the same as private but they are also accessible
    //from any object that inherits from this class

    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
        this.setType('Balding dude');
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }

}

const person = new Person('Matt', 'mrMatt');
console.log(person.name, person.username);
person.printAge();
// person.setType('The man'); won't work with private method

//Inheritance
//extends grabs the person class, gets all of the code inside it
//then appends it or overwrites it
class Matt extends Person{
    // name = 'Matt';

    constructor(username: string) {
        super('Matt', username); //calls the constructor of the parent class
        this.age = 31; //protected can be accessed
        // console.log(this.type); we get an error here because type is private
    }
}
const matt = new Matt('danzig');
console.log(matt);

//getters and setters
class Plant {
    private _species: string = 'Default'; //underscore is not best practice, just for example

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = 'Default';
        }
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);
plant.species = 'Green Plant';
console.log(plant.species);

// static properties and methods
//static means you can always use the property
//even if you don't instantiate the class
class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

//abstract classes
//they can't be instantiated directly
//you have to inherit from them, always
abstract class Project {
    projectName: string = 'default';
    budget: number = 1000;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void{
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super IT Project');
console.log(newProject);

//private constructors
class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public readonly name: string) {}

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}
let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right.name);
// right.name = 'Something else'; error because it is a readonly type