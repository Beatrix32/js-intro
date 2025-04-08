const n1 = 7;
const n2 = 5;

// function declaration
function sum(a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);

// kintamajam priskirta anonimine funkcija
const minus = function (a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${minus(n1, n2)}`);

// arrow function
const multi = (a, b) => {
    return a * b;
}
console.log(`${n1} * ${n2} = ${multi(n1, n2)}`);

// 3a) arrow function
// jei logikos bloke yra TIK 1 salyga (statement)
// tai galima nerasyti {return}
const div = (a, b) => {
    return a / b;
}
console.log(`${n1} / ${n2} = ${div(n1, n2)}`);

// 3b) arrow function
// jei parametru bloke yra TIK 1 parametras
// tai galima narasyti ()
const sqr = a => a * a

console.log(`${n1} * ${n1} = ${sqr(n1)}`);
console.log(`${n2} * ${n2} = ${sqr(n2)}`);
console.log(`${n1} * ${n2} = ${multi(n1, n2)}`);

// Funkcija grazina vardo pirma raide
const firstLetter = name => name[0];

console.log(firstLetter('John'));
console.log(firstLetter('Mary'));

// funkcija grazina pataisyta varda
function correctName (name) {
    const first = name[0].toUpperCase();
    const rest = name.slice(1).toLowerCase();
    return first + rest;
}

console.log(correctName('john'));
console.log(correctName('Mary'));
console.log(correctName('peTEr'));
console.log(correctName('ONA'));

console.log('-----------');

// funkcija grazina atbuline teksta
function reverseString(text) {
    return text.split('').reverse().join('');
}

console.log(reverseString('hello'));
console.log(reverseString('chair'));
console.log(reverseString('beer'));