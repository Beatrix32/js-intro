/*
FOR (loop) - ciklas
*/

for (let i =0; i < 5; i++) {
    console.log('a) number:', i);
}

console.log('------------');

for (let i = 1; i < 5; i++) {
    console.log('b) number:', i);
}

console.log('------------');

console.log('number:', 0);
console.log('number:', 1);
console.log('number:', 2);
console.log('number:', 3);
console.log('number:', 4);
console.log('number:', 5);
console.log('number:', 6);
console.log('number:', 7);
console.log('number:', 8);

let k = 5;
k = k + 1;
k += 1;
k++;
++k;

let m = 5;
m = m - 1;
m -= 1;
m--;
--m;

console.log('------------');

for (let k = 0; k < 11; k += 2) {
    console.log(k);
}

console.log('------------');

console.log('Labas');
console.log('Labas');
console.log('Labas');
console.log('Labas');


console.log('------------');

const n = 6;

console.log(`${n} * 1 = ${n * 1}`);
console.log(`${n} * 2 = ${n * 2}`);
console.log(`${n} * 3 = ${n * 3}`);
console.log(`${n} * 4 = ${n * 4}`);

console.log('------------');

console.clear();

const marks = [10, 2, 8, 4, 6];

let sum = 0;

sum += marks[0];
sum += marks[1];
sum += marks[2];
sum += marks[3];
sum += marks[4];

console.log(sum);

let sum2 = 0;

for (let i = 0; i < 5; i++) {
    console.log('index', i, '-->', marks[i]);
    sum2 += marks[i];
}

console.log(sum2);

console.log('------------');

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];

for (let i = 0; i < names.length; i++) {
    const s = `Studento vardas yra ${names[i]}.`;
    console.log(s);
}

// Vardas "VARDAS" yra sudarytas is N raidziu.

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const s = `Vardas "${name}" yra sudarytas is ${name.length} raidziu.`;
    console.log(s);
}



function sumMul(n, m) {
    if (n <= 0 || m <= 0) {
      return "INVALID";
    }
  
    let sum = 0;
  
    for (let i = n; i < m; i += n) {
      sum += i;
    }
  
    return sum;
  }
  
  console.log(sumMul(2, 9));
  console.log(sumMul(3, 13));
  console.log(sumMul(4, 123));
  console.log(sumMul(4, -7));
  console.log(sumMul(-4, 10)); 
  console.log(sumMul(0, 10)); 