//let & const
console.log('LET & CONST');
var variable = 'Test';
console.log(variable);
variable = 'Another value';
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99;
//block scope
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
//arrow functions
console.log('ARROW FUNCTIONS');
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var mulitplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(mulitplyNumbers(10, 3));
var greet = function () {
    console.log('Hello!');
};
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend('Danzig');
//default parameters
console.log('DEFAULT PARAMETERS');
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log('Done!', start);
};
countdown(20);
//rest and spread
console.log('REST & SPREAD');
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max.apply(Math, numbers));
//rest
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2));
//destructuring
console.log('DESTRUCTURING');
var myHobbies = ['cooking', 'gardening'];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var userData = { userName: 'Matt', age: 38 };
var myName = userData.userName, myAge = userData.age;
console.log(myName, myAge);
//template literals
var theName = 'Matt';
var greeting = "Hello. I am " + theName;
console.log(greeting);
