//simple generic
function echo(data) {
    return data;
}
console.log(echo('Matt'));
console.log(echo(38));
console.log(echo({ name: 'Matt', age: 38 }));
//better generic
//<and the letter you want> lets TS know its a generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho('Matt').length);
console.log(betterEcho(38));
console.log(betterEcho({ name: 'Matt', age: 38 }));
//built-in generic
var testResults = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);
//array
function printAll(args) {
    args.forEach((function (element) { return console.log(element); }));
}
printAll(['apple', 'banana']);
//generic types
var echo2 = betterEcho; // <T>(data: T) => T is the type
console.log(echo2('something'));
//generic class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return this.baseValue * this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
