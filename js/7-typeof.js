/*
TYPEOF - duomenu tipo nustatymo operatorius
*/

console.log(typeof 5);
console.log(typeof -5);
console.log(typeof 3.141592654);
console.log(typeof 'asd');
console.log(typeof '');
console.log(typeof true);
console.log(typeof false);
console.log(typeof []);
console.log(typeof [1, 2, 3]);
console.log(typeof ['a', 'b', 'c']);
console.log(typeof [true, false]);
console.log(typeof null);
console.log(typeof {});

const a = null;
if (a === null) {

}

const b = [];
if (Array.isArray(b)) {
    console.log('ARRAY');
} else {
    console.log('ARRAY')
}