/*
BOOLEAN - logine reiskme
- true
- false

Loginiai operatoriai
&& - and (ir) (prioritetas)
|| - or (arba)

*/

const isEven = true;
const isOdd = false;

console.log('&& --------');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('|| --------');
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('Ar mergina eis i pasimatyma');
const arGrazi = true;
const arTurtinga = false;

console.log(arGrazi || arTurtinga);

console.clear();

console.log(1, true && true || true);
console.log(2, true && true || false);
console.log(3, true && false || true);
console.log(4, true && false || false);
console.log(5, false && true || true);
console.log(6, false && true || false);
console.log(7, false && false || true);
console.log(8, false && false || false);

// ND: Surasyti visas imanomas kombinacijas, su && ir ||, kai yra naudojamos 4 boolean reiksmes.
// ND: Kiek gavosi kombinaciju?

