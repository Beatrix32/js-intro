let word = '';

if (4 > 2) {
    word = 'more'
} else {
    word = 'less';
}

console.log(word);

let number = 0;

if (7 <= 5) {
    number = 7
} else {
    number = 5;
}

console.log(number);

// klausimas ? teigiama : neigiama
const letters = 4 > 2 ? 'more' : 'less';
console.log(letters);

let numbers = 7 <= 5 ? 7 : 5;
console.log(numbers);

const years = 22;
const isAdult = years >= 18 ? 'grownup' : 'kid';
console.log(isAdult);

const value = 5;
const type = typeof value === 'numbers' ? 'skaicius' : 'not a number nor letter';
console.log(type);

console.log('----------');

// visi skaiciai yra pozityvus
// isskyrus - nuli
if (0) {
    console.log('YES');
} else {
    console.log('NO');
}

// visi tekstai yra pozityvus
// isskyrus - tuscias
if ('') {
    console.log('YES');
} else {
    console.log('NO');
}

// visi array yra pozityvus
if ([]) {
    console.log('YES');
} else {
    console.log('NO');
}

// visi object yra pozityvus
if ({}) {
    console.log('YES');
} else {
    console.log('NO');
}

console.clear();

const a = 0 ? 1 : 2;
console.log(a);

const b = 1 ? 2 : 3;
console.log(b);

const c = 2 ? 3 ? 4 : 5 : 6;
console.log(c);

const d = 0 ? 1 : 2 ? 3 : 4;
console.log(d);

// unari (vienas) =
// binari (du) +, -, *, /
// ternary (trys) ?: