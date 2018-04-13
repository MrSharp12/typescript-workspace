//string
//typecript inplicitly sets this variable as a string
//however, we get an error when trying to overwrite it as a number
//like we could in js.  This is because
//ts is a strictly typed language
var myName = 'Matt';
// 
//number
//same issue as above
//also ts can have numbers as an integer
//or as float (.5 for example)
var myAge = 38.5;
// myAge = 'Matt';
//boolean
//we are seeing an error because we are trying to set
//hasHobbies to 1, even though we could cast 1 as true
var hasHobbies = true;
// hasHobbies = 1;
//assign types
//what is happening here is ts is setting the variable
//to any.  If we set the type, using a colon then the type
//the variable is now whatever we set as the default
var myRealAge;
myRealAge = 38;
// myRealAge = '38';
//array
//next line after intialization is an error
//because ts thinks it will be an array of strings
var hobbies = ['gardening', 'rpgs'];
// hobbies = [100];
hobbies = ['exercise'];
//tuples
//arrays with mixed types and a limited number of items
//tuples have to be a string and a number, order is important
var address = ['Beststreet', 4567];
//enum
//a feature that makes numbers more expressive
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; //to then set the number back in order
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
//any
var car = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);
//functions
//the type declarations refers to the return, not to
//the arguments
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void
//refers to functions without a return statement
function sayHello() {
    console.log('Hello');
}
//argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 4));
//function types
//in order to set function type, follow es6 arrow function,
//set the argument types and what it returns
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
//objects
//names and types matter in object types
var userData = {
    name: 'Matt',
    age: 38
};
// userData = {};
//complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
//union types
//syntax is ONE pipe
var myReallyRealAge = 38;
myReallyRealAge = '38';
// myReallyRealAge = true;
//check types
var finalValue = 30;
if (typeof finalValue === 'number') {
    console.log('Final value is a number.');
}
//never type
//this is never because the function nevers finish
function neverReturns() {
    throw new Error('An error!');
}
//nullable types
//you can add a union type to set nulls
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
// canThisBeAny = 12;
