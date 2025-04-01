function digitCount(n) {
    if (typeof n !== 'number'){
        return 'Reikalingas skaicius';
    }

    // v1
    if (n === Infinity || n === -Infinity || isNaN(n)) {
        return 'Reikalingas normalus skaicius';
    }

    //2
    if (!isFinite(n)) {
        return'Reikalingas normalus skaicius';
    }

    return 0;
}

console.log(digitCount());
console.log(digitCount(undefined));
console.log(digitCount('asfdg'));
console.log(digitCount(215452515));
console.log(digitCount(true));
console.log(digitCount([]));
console.log(digitCount({}));
console.log(digitCount(digitCount));
console.log(digitCount(null));

console.log(digitCount(Infinity));
console.log(digitCount(-Infinity));
console.log(digitCount(NaN));