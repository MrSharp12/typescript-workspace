//simple generic
function echo(data: any) {
    return data;
}

console.log(echo('Matt'));
console.log(echo(38));
console.log(echo({name: 'Matt', age: 38}));

//better generic
//<and the letter you want> lets TS know its a generic
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho('Matt').length);
console.log(betterEcho(38));
console.log(betterEcho({name: 'Matt', age: 38}));

//built-in generic
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);

//array
function printAll<T>(args: T[]) {
    args.forEach((element => console.log(element)));
}
printAll<string>(['apple', 'banana']);

//generic types
const echo2: <T>(data: T) => T = betterEcho; // <T>(data: T) => T is the type

console.log(echo2<string>('something'));

//generic class
class SimpleMath<T extends number| string , U extends number | string> {
    baseValue: T;
    multiplyValue: U
    calculate(): number {
        return +this.baseValue * +this.multiplyValue; //+explictly casts these values to a number
    }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = '10';
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());