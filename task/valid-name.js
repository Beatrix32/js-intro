/*
Funkcija, kuri gavusi zodi, is jo padaro korektiska varda.
*/

function validName(name) {
    const firstletter = name[0].toUpperCase();
    const restletters = name.slice(1).toLowerCase();


    return firstletter + restletters;
}

console.log(validName('john'), '-->', 'John');
console.log(validName('maRY'), '-->', 'Mary');