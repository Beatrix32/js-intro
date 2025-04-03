/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
*/

console.log(isFinite(5));
console.log(isFinite(-3.14));
console.log(isFinite(Infinity));
console.log(isFinite(NaN));
console.log(isFinite(true));
console.log(isFinite([]));
console.log(isFinite({}));

console.clear();

console.log(Number.isFinite(5));
console.log(Number.isFinite(-5));
console.log(Number.isFinite(0));
console.log(Number.isFinite(5));

console.clear();

console.log(Number.isNaN(5), isNaN(5));
console.log(Number.isNaN(3.14), isNaN(3.14));
console.log(Number.isNaN(Infinity), isNaN(Infinity));
console.log(Number.isNaN(NaN), isNaN(NaN));

console.clear();

const userInput = '22';
const userNumber = parseInt(userInput);
const date = userNumber + 5;

console.log(date);

console.log('----------');

console.log(parseInt('65'));
console.log(parseInt('65.314'));
console.log(parseInt('-65'));
console.log(parseInt('-65.314'));

const a = 12.3456789;
console.log(a);
console.log(typeof a);

console.log(typeof typeof a);
console.log(typeof 'number');
console.log('string');
