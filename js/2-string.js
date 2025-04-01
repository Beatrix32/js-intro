/*
STRING - tekstas, simboliu grandinele

Tekstines reiksmes iniciavimas:
- ' (vienaguba kabute)
- " (dviguba kabute)
- ` (backtick)

Specialieji simboliai:
- \ (privercia sekanti simboli buti spausdintiniu)
- \r (return, kursorius grizta i eilutes pradziai)
- \n (new line, kursorius nusileidzia viena eilute)
- \t (tab)
*/

const a = 'Labas';
console.log(a);

let b = 'rytas';
console.log(b);

b = 'diena';
console.log(b);

// Vienguba (') kabute.
const k1 = "Vienguba (') kabute.";
console.log(k1);

// Dviguba (") kabute.
const k2 = 'Dviguba (") kabute.';
console.log(k2);

const name = "Jonas";
const surname = "Jonaitis";

const fullname = name + ' ' +  surname;
console.log(fullname);

// Vienguba (') ir dviguba (") kabutes.
const k12 = "Vienguba (') ir" + ' dviguba (") kabutes.';
console.log(k12);

// Vienguba (') kabute.
const k3 = 'Vienguba (\') kabute.';
console.log(k3);

// Dviguba (") kabute.
const k4 = "Dviguba (\") kabute.";
console.log(k4);

// Vienguba (') ir dviguba (") kabutes.
const k5 = 'Vienguba (\') ir dviguba (") kabutes.';
const k6 = "Vienguba (') ir dviguba (\") kabutes.";
console.log(k5);
console.log(k6);

const k7 = 'Vienguba (\') ir dviguba (\") kabutes.';
const k8 = "Vienguba (\') ir dviguba (\") kabutes.";
console.log(k7);
console.log(k8);

const backSlash1 = '\\';
const backSlash2 = "\\\\";

console.log(backSlash1);
console.log(backSlash2);

console.clear();

/*
<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>
*/

const html = '<header>\r\n\
\t<img>\r\n\
\t<nav>\r\n\
\t\<a></a>\r\n\
\t\<a></a>\r\n\
\t\<a></a>\r\n\
\t\</nav>\r\n\
</header>';
console.log(html);

const html2 = '<header>\n\
\t<img>\n\
\t<nav>\n\
\t\t<a></a>\n\
\t\t<a></a>\n\
\t\t<a></a>\n\
\t</nav>\n\
</header>';
console.log(html2);

const html3 = '\
<header>\r\
    <img>\r\
    <nav>\r\
        <a></a>\r\
        <a></a>\r\
        <a></a>\r\
    </nav>\r\
</header>';
console.log('-------------------');
console.log(html3);

console.clear();


const studentName = 'Maryte';
const amount = 4;

// Maryte yra viena is 4 legendiniu studentu.
const student = studentName + ' yra viena is ' + amount + ' legendiniu studentu.';

console.log(student);

console.clear();

// Vienguba (') kabute.
const b1 = `Vienguba (\') kabute.`;
console.log(b1);

// Dviguba (") kabute.
const b2 = `Dviguba (\") kabute.`;
console.log(b2);

// Vienguba (') ir dviguba (") kabutes.
const b3 = `Vienguba (') ir" ir dviguba (") kabutes.`;
console.log(b3);

// Backtick (`) kabute.
const b4 = `Backtick (\`) kabute.`;
const b5 = 'Bakctick (`) kabute.';
const b6 = "Backtick (`) kabute.";

const student2 = `${studentName} yra viena is ${amount} legendiniu studentu`;
console.log(student2);

const demo = `Labas, ${studentName}.`;
console.log(demo);

console.clear();

const word = 'pomidoras';
const wordSymbolsCount = word.length;

console.log(word);
console.log(wordSymbolsCount);

const textSize = 'aaaaaaaaaaaaaaa'.length;
console.log(textSize);

const numbers = '1248562485';
console.log(numbers.length);

const number = 1248562485;
console.log(number.length);

const pi = '3.14';
console.log(pi.length);

const age = 99;

const ageDigitsCount = ('' + age).length;
console.log(ageDigitsCount);

const ageDigitsCount2 = age.toString().length;
console.log(ageDigitsCount2);

console.clear();

const text = 'Kebabas';
const firstSymbol = text[0];
console.log(firstSymbol);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text[3]);
console.log(text[4]);
console.log(text[5]);
console.log(text[6]);

console.log(text[0] + text[1]);

// Zodyje "Sachmatai" pirmoji raide yra "S".
const game = 'Sachmatai';
const gameSentence = `Zodyje "${game} pirmoji raide yra "S".`;

console.log(gameSentence);

console.clear();

const textname = 'burtininkas';
const Symbol = textname[10];
console.log(Symbol);

console.log(textname[9]);
console.log(textname[8]);
console.log(textname[7]);
console.log(textname[6]);
console.log(textname[5]);
console.log(textname[4]);
console.log(textname[3]);
console.log(textname[2]);
console.log(textname[1]);
console.log(textname[0]);
