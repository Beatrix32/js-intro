/*
Funkcija gauna sakini, kuris atrodo taip:
"Studentai: jonas, Maryte, peTRas, ONA."
Funkcijos darbas yra grazinti teisingai perasyta sakini.
T. y. reikia istaisyti vardu rasyma.
pvz.: "Studentai: Jonas, Maryte, Petras, Ona."
*/

/*
- atsiskiriame vardus is originalaus teksto
- issiskaidyti individualius vardus i masyva
- konvertuojame teksta i mazasias raides
- ciklas eina per individualius vardus ir:
    - pasiima prima raide
    - ja padydina
    - apjungia i galutini normalu vardu
- pagaminame galutini reikiama sakini
*/

function correctSentence(text) {
    const parts = text.split(': ');
    const names = parts[1]
        .slice(0, -1)
        .toLowerCase()
        .split(', ');

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const firstLetter = name[0].toUpperCase();
        const restName = name.slice(1);

        const newName = firstLetter + restName;
        names[i] = newName;
    }

    return parts[0] + ': ' + names.join(', ') + '.';
}

console.log(correctSentence('At this moment in class there is: john, Mary, peTEr, ONA.'));