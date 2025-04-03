/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

// at
console.log('\nat');

console.log('Labas');
console.log('Labas'[0]);
console.log('Labas'[1]);
console.log('Labas'[2]);
console.log('Labas'[3]);
console.log('Labas'[4]);

const text = 'Pomidoras';
console.log(text[0]);
console.log(text[text.length - 1]);

console.log('--', text.at(0));
console.log('--', text.at(1));
console.log('--', text.at(2));
console.log('--', text.at(-1));
console.log('--', text.at(-2));
console.log('--', text.at(-3));

// includes
console.clear();
console.log('\nincludes');
console.log('Vasara'.includes('V'));
console.log('Vasara'.includes('v'));
console.log('Vasara'.includes('a'));
console.log('Vasara'.includes('A'));

console.log('Ačiū'.includes('č'));
console.log('Ačiū'.includes('Č'));

console.log('-----');

console.log('Bepasikulversciaudamasis'.includes('a'));
console.log('Bepasikulversciaudamasis'.includes('aaa'));
console.log('Bepasikulversciaudamasis'.includes('kul'));
console.log('Bepasikulversciaudamasis'.includes('ciauda'));
console.log('Bepasikulversciaudamasis'.includes('cauda'));
console.log('Bepasikulversciaudamasis'.includes('Bepasikulversciaudamasis'));

// startsWith
console.clear();
console.log('\nstartsWith');
console.log('Pomidoras'.startsWith('a'));
console.log('Pomidoras'.startsWith('p'));
console.log('Pomidoras'.startsWith('P'));
console.log('Pomidoras'.startsWith('Po'));
console.log('Pomidoras'.startsWith('Pom'));
console.log('Pomidoras'.startsWith('Pomi'));
console.log('Pomidoras'.startsWith('Pomidoras'));
console.log('Pomidoras'.startsWith('doras'));
console.log(' Pomidoras'.startsWith(' Pom'));

// endsWith
console.clear();
console.log('\nendsWith');
console.log('Pomidoras'.endsWith('a'));
console.log('Pomidoras'.endsWith('Pom'));
console.log('Pomidoras'.endsWith('s'));
console.log('Pomidoras'.endsWith('as'));
console.log('Pomidoras'.endsWith('ras'));
console.log('Pomidoras'.endsWith('doras'));
console.log('Pomidoras'.endsWith('Pomidoras'));
console.log('Pomidoras'.endsWith(' Pomidoras'));
console.log(' Pomidoras'.endsWith(' Pomidoras'));

// indexOf
console.clear();
console.log('\nindexOf');
//           012345678
console.log('Pomidoras'.indexOf('a'));
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('om'));
console.log('Pomidoras'.indexOf('p'));
console.log('Pomidoras'.indexOf('x'));
console.log('Pomidoras'.indexOf('xXx'));
console.log('Pomidoras'.indexOf('mido'));

console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('o', 0));
console.log('Pomidoras'.indexOf('o', 1));
console.log('Pomidoras'.indexOf('o', 2));

console.log('---');

const k = 'Kulverstukas';
console.log(k.indexOf('u'));
console.log(k.indexOf('u', 2));

console.log(k.indexOf('u', k.indexOf('u') + 1));

console.log(k.indexOf('s'));
console.log(k.indexOf('s', k.indexOf('s') + 1));

console.log(k.indexOf('e'));
console.log(k.indexOf('e', k.indexOf('e') + 1));

// repeat
console.clear();
console.log('\nrepeat');
console.log('a');

const symbol = 'labas';
const megaSymbol = symbol.repeat(3);
console.log(symbol);
console.log(megaSymbol);

function stringRepeat(text, count) {
    let result = '';

    for (let i = 0; i < count; i++) {
        result += text;
    }

    return result;
}

console.log(stringRepeat('rikiki', 3));
console.log(stringRepeat('apple', 7));

// replace
console.clear();
console.log('\nreplace');

const Anime = 'Toriko'.replace('o', 'O');
console.log(Anime);

const Anime2 = 'Toriko'.replace('o', 'O').replace('o', 'O');
console.log(Anime2);

const Anime3 = 'Toriko'.replace('o', 'O').replace('o', 'O').replace('i', 'I');
console.log(Anime3);

const Dinosaur = 'T-Rex'.replace('e', '*'.repeat(3));
console.log(Dinosaur);

// replaceAll
console.clear();
console.log('\nreplaceAll');

console.log('Naginata');
console.log('Naginata'.replace('a', 'x'));
console.log('Naginata'.replaceAll('a', 'x'));

console.log('pokemon'.replace('o', ''));
console.log('pokemon'.replaceAll('o', ''));

// toUpperCase
console.clear();
console.log('\ntoUpperCase');

console.log('hello'.toUpperCase());
console.log('Hello'.toUpperCase());
console.log('HELLO'.toUpperCase());

// toLowerCase
console.clear();
console.log('\ntoLowerCase');

console.log('goodbye'.toLowerCase());
console.log('Goodbye'.toLowerCase());
console.log('GOODBYE'.toLowerCase());

// slice
console.clear();
console.log('\nslice');

console.log('cucumber'.slice());
console.log('cucumber'.slice(0));
console.log('cucumber'.slice(1));
console.log('cucumber'.slice(2));
console.log('cucumber'.slice(3));
console.log('cucumber'.slice(4));

console.log('cucumber'.slice(0, 1));
console.log('cucumber'.slice(0, 2));
console.log('cucumber'.slice(0, 3));

console.log('----------');

console.log('cucumber'.slice(1, 3));
console.log('cucumber'.slice(1, 4));
console.log('cucumber'.slice(1, 5));

console.log('----------');

console.log('cucumber'.slice(0, -1));
console.log('cucumber'.slice(0, -2));
console.log('cucumber'.slice(0, -3));
console.log('cucumber'.slice(0, -4));

// trim
console.clear();
console.log('\ntrim');

console.log(`"${'cucumber'.trim()}"`);
console.log(`"${'  cucumbers    are    delicious  '.trimEnd()}"`);
console.log(`"${'  cucumbers    are    delicious  '.trimStart()}"`);

// split
console.clear();
console.log('\nsplit');

const t1 = 'word';
const t1Parts = t1.split();
const t1Parts2 = t1.split('o');
const t1Parts3 = t1.split('d');

console.log(t1Parts);
console.log(t1Parts2);
console.log(t1Parts3);

const t2 = 'invincible';
const t2Parts = t2.split('i');

console.log(t2Parts);

const t3 = 'Surprise egg!';
const t3Parts = t3.split(' ');

console.log(t3Parts);

console.log('bread'.split('b'));
console.log('bread'.split('r'));
console.log('bread'.split('e'));
console.log('bread'.split('a'));
console.log('bread'.split('d'));

const t4 = 'Hello. What are you. What are you up to.';
const sentenceCount = t4.split('.').length - 1;

console.log(sentenceCount);

console.log('crocodile'.split('dil'));
console.log('samurai'.split('mu'));

// charCodeAt
console.clear();
console.log('\ncharCodeAt');

console.log('A'.charCodeAt(0));
console.log('a'.charCodeAt(0));
console.log('Ą'.charCodeAt(0));
console.log('ą'.charCodeAt(0));

if ('A' > 'a') {
    console.log('daugiau');
} else {
    console.log('maziau');
}

if ('labas' > 'labai') {
    console.log('daugiau');
} else {
    console.log('maziau');
}

const s1 = String.fromCharCode(65);
console.log(s1);

const s2 = String.fromCharCode(260);
console.log(s2);

const s3 = String.fromCharCode(2600);
console.log(s3);

const s4 = String.fromCharCode(26000);
console.log(s4);

const s5 = String.fromCharCode(9845);
console.log(s5);