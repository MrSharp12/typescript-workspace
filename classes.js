var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    //protected is the same as private but they are also accessible
    //from any object that inherits from this class
    function Person(name, username) {
        this.username = username;
        //private means you can only access it inside of the class
        this.age = 38;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType('Balding dude');
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person('Matt', 'mrMatt');
console.log(person.name, person.username);
person.printAge();
// person.setType('The man'); won't work with private method
//Inheritance
//extends grabs the person class, gets all of the code inside it
//then appends it or overwrites it
var Matt = /** @class */ (function (_super) {
    __extends(Matt, _super);
    // name = 'Matt';
    function Matt(username) {
        var _this = _super.call(this, 'Matt', username) || this;
        _this.age = 31; //protected can be accessed
        return _this;
        // console.log(this.type); we get an error here because type is private
    }
    return Matt;
}(Person));
var matt = new Matt('danzig');
console.log(matt);
//getters and setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'Default'; //underscore is not best practice, just for example
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);
plant.species = 'Green Plant';
console.log(plant.species);
// static properties and methods
//static means you can always use the property
//even if you don't instantiate the class
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
//abstract classes
//they can't be instantiated directly
//you have to inherit from them, always
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'default';
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super IT Project');
console.log(newProject);
//private constructors
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
var wrong = new OnlyOne('The Only One');
var right = OnlyOne.getInstance();
console.log(right.name);
// right.name = 'Something else'; error because it is a readonly type
