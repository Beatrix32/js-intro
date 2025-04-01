function biggestNumber (list) {
    // let (!Array.isArray(list)) {
      //   return 'Duomenys turi buti sarase';
    // } (vienas is variantu gauti skaicius is log, man rodos...)
 
    let biggest = list[0]; // rasyti list[0]; , jei salygoje sarase yra numeriai su -
     for (let i = 0; i < list.length; i++) {
         if (typeof list[i] !== 'number' || !isFinite(list[i])) {
             continue;
         }
         if (list[i] > biggest) {
             biggest = list[i];
         }
     }
     return biggest;
 }
 console.log(biggestNumber([1]), '--->', 1);
 console.log(biggestNumber([1, 2]), '--->', 2);
 console.log(biggestNumber([1, 2, 3]), '--->', 3);
 console.log(biggestNumber([4, 5, 8,]), '--->', 8);
 console.log(biggestNumber([-1, -2, -3]), '--->', -1);
 console.log(biggestNumber([3, 3, 3]), '--->', 3);
 
 console.log(biggestNumber([1, 2, 'abc']));
 console.log(biggestNumber([1, 'abc', 2]));
 console.log(biggestNumber(['abc', 1, 2]));
 
 console.log(biggestNumber([-1, -2, true]));
 console.log(biggestNumber([-1, true, -2]));
 console.log(biggestNumber([true, -1, -2]));
 
 console.log(biggestNumber([-1, -2, -Infinity]));
 console.log(biggestNumber([-1, -Infinity, -2]));
 console.log(biggestNumber([-Infinity, -1, -2]));
 
 console.log(biggestNumber([1, 2, Infinity]));
 console.log(biggestNumber([1, Infinity, 2]));
 console.log(biggestNumber([Infinity, 1, 2]));
 
 console.log(biggestNumber([1, 2, NaN]));
 console.log(biggestNumber([1, NaN, 2]));
 console.log(biggestNumber([NaN, 1, 2]));

 console.clear();




 console.log('-----');

function century(year) {
    if (year % 100 === 0) {
      return year / 100;
    } else {
      return ((year / 100) | 0) + 1;
    }
  }
  
  console.log(century(1705));
  console.log(century(1900));
  console.log(century(1601));
  console.log(century(2000));
  console.log(century(2742));


console.log('-----');


  function century(year) {
    var century = 0;
    
    for(var i = 0; i < year; i++) {
      if(i % 100 == 0) {
        century++;
      }
    }
    return century;
  }
  
  console.log(century(1705));
  console.log(century(1900));
  console.log(century(1601));
  console.log(century(2000));
  console.log(century(2742));