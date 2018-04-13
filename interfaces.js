function greet(person) {
    console.log('Hello,  ' + person.firstName);
}
function changeName(person) {
    person.firstName = 'Anna';
}
var person = {
    firstName: 'Danzig',
    age: 38,
    hobbies: ['exercise', 'gardening'],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
// greet({firstName: 'Joe', age: 27});
changeName(person);
greet(person);
person.greet('Darklord');
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    ;
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = 'Matthew';
myPerson.lastName = 'Darklord';
greet(myPerson);
myPerson.greet(myPerson.lastName);
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 54,
    firstName: 'Glen',
    greet: function (lastName) {
        console.log('Hello!');
    }
};
console.log(oldPerson);
