// Spausdinkite skaičius nuo 1 iki 10 naudodami for ciklą.
for (let k = 1; k < 11; k++) {
    console.log(k);
}
console.log('------');

// Spausdinkite skaičius nuo 10 iki 1 atvirkštine tvarka naudodami for ciklą. 
for (let w = 10; w > 0; w--) {
    console.log(w);

}
console.log('-----');

// Spausdinkite kiekvieną lyginį skaičių nuo 0 iki 20 naudodami for ciklą.
for (let p = 0; p < 21; p+= 2) {
    console.log(p);

} 
console.log('-----');

// Spausdinkite kiekvieną nelyginį skaičių nuo 0 iki 20 naudodami for ciklą.
for (let m = 21; m > 0; m-= 2) {
    console.log(m);

}
console.log('-----');
//Išspausdinkite pirmuosius 10 skaičių kvadratų (1^2, 2^2, 3^2 ir t. t.). 
for (let i = 1; i <= 10; i++) {
    console.log(`${i}^2`);

}
console.log('-----');

//Išspausdinkite pirmuosius 10 skaičių kubų (1^3, 2^3, 3^3 ir t. t.). 
for (let i = 1; i <= 10; i++) {
    console.log(`${i}^3`);

}
console.log('-----');

// Atspausdinkite 7 daugybos lentelę (7 × 1, 7 × 2 ir t. t.).

const n = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);

} 
console.log('-----');

// Atspausdinkite nuo 1 iki 5 žvaigždučių () seriją (pvz.,, , * ir t. t.).

for (let i = 1; i <= 5; i++) {
    console.log('*'.repeat(i));

}
console.log('-----');
// Atspausdinkite atvirkštinę eigą su žvaigždutėmis 5 eilutėse (pvz., , , ** ir t. t.).

for (let i = 5; i >= 1; i--) {
    console.log('*'.repeat(i));

}
console.log('-----');

//  Spausdinti skaičius nuo 1 iki 50, kurie dalijasi iš 3.

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }

}
console.log('-----');

// Spausdinti skaičius nuo 1 iki 50 imtinai, kurie dalijasi iš 5.

for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }

}
console.log('-----');

//  Spausdinti skaičius nuo 1 iki 100, kurie dalijasi ir iš 3, ir iš 5.

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }

}
console.log('-----');

// Sukurkite for ciklą, kuris penkis kartus išspausdintų "Hello, World!".

for (i = 5; i >= 1; i-= 5) {
    console.log("Hello, World! ".repeat(i));

}
console.log('-----');
/* Sukurkite for ciklą, kuris spausdina skaičius nuo 1 iki 100, tačiau kiekvieną skaičių, kuris 
dalijasi iš 4, reikia pakeisti žodžiu „Fizz“. 
*/
for (let i = 1; i <= 100; i++) {
    if (i % 4 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

// 1, 2, 3, 6, 8, 10 [Do not need to do]  ||  7, 11, 12, 13

console.log('--------------');

function numberList(number1) {
    return number1[0] * number1[1] * number1[2];
}

const b = numberList[5];
console.log(b);

const a = numberList[10];
console.log(a);