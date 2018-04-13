//let & const
console.log('LET & CONST');
let variable = 'Test';
console.log(variable);
variable = 'Another value';
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99;

//block scope
function reset() {
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

//arrow functions
console.log('ARROW FUNCTIONS');
const addNumbers = function(number1: number, number2: number): number {
    return number1 + number2;
};
console.log(addNumbers(10, 3));

const mulitplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(mulitplyNumbers(10, 3));

const greet = () => {
    console.log('Hello!');
};
greet();

const greetFriend = friend => console.log(friend);
greetFriend('Danzig');

//default parameters
console.log('DEFAULT PARAMETERS');
const countdown = (start: number = 10): void => {
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log('Done!', start);
};
countdown(20);

//rest and spread
console.log('REST & SPREAD');
const numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max(...numbers));

//rest
function makeArray(...args: number[]) {
    return args;
}
console.log(makeArray(1, 2));

//destructuring
console.log('DESTRUCTURING');
const myHobbies = ['cooking', 'gardening'];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const userData = {userName: 'Matt', age: 38};
const {userName: myName, age: myAge} = userData;
console.log(myName, myAge);

//template literals
const theName = 'Matt';
const greeting = `Hello. I am ${theName}`;
console.log(greeting);