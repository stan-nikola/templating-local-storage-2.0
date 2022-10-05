// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Bingo"];
// console.log(clients.slice(1, 2));

const array = ['Earth', 'Mars', 'Venus'];
//   // Change code below this line
// let firstAndLast;
//    firstAndLast = `${array[0]}, ${array[array.length-1]}`;
//   // Change code above this line

// console.log(firstAndLast);

//   // Change code below this line
// let firstAndLast;
// firstAndLast = `${array[0]}, ${array[array.length-1]}`;
//   // Change code above this line
// console.log(firstAndLast);
//  const calculateEngravingPrice=function(message, pricePerWord) {
//    // Change code below this line

// return (message.split(' ').length)*pricePerWord;

//    // Change code above this line
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls =fruits.slice(1,-1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line

//   let arrays = firstArray.concat(secondArray);
//   if (arrays.length > maxLength) {
//     arrays = arrays.slice(0, maxLength);
//     return arrays;
//   }
//   return arrays;
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// const calculateTotal = function (number) {

//   let total = 0;
//   for (let i = 0; i <= number; i += 1) { // Change this line
//     // console.log(i);
//     total += i;
//   }
//   return total;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));

// const findLongestWord = function(string) {
//   // Change code below this line
//   const words = string.split(' ');
//   let longestWord = words[0];
//   for (const word of words) {
//  if (word.length > longestWord.length) {
//     longestWord = word;
//     }

//   }
//    return longestWord;

//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// const createArrayOfNumbers = function (min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = 14; i <= 17; i += 1) {
//     // console.log(i);

//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(14, 17));

// const filterArray = function (numbers, value) {
//   // Change code below this line
//   const filterNumbers = [];
//   for (const number of numbers) {

//     // console.log(number);
//     if (number > value) {
//       // console.log(number);
//       filterNumbers.push(number);
//     }
//   //  console.log(filterNumbers);
//   }

//   return filterNumbers;

//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 4)); //5
// console.log(filterArray([1, 2, 3, 4, 5], 5));//[]

// const getCommonElements = function getCommonElements(array1, array2) {

//     let uniqueElements = [];

//     for (const element  of array1) {
//         if (array2.includes(element)) {
//             uniqueElements.push(element);
//         }
//     }
//     return uniqueElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); //2
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));//[12, 27, 3]
// Change code below this line

// console.log('a=', 3 % 3); //
// console.log('b=',4 % 3); //1
// console.log('c=',11 % 4); //3
// console.log('d=',12 % 7);//5
// console.log('e=',8 % 6);//2

// const getEvenNumbers=function (start, end) {
//     let numbers = [];
//     for (let i = start; i <= end; i += 1) {

//         if (i % 2 === 0) {
//             numbers.push(i);
//         }
//     }
//     return numbers;
// }

// console.log(getEvenNumbers(3, 11)); //[4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12)); // [6, 8, 10, 12]

function includes(array, value) {
  // Change code below this line
  let message;
  for (const element of array) {
    if (element === value) {
      message = true;
      break;
    }
    message = false;
  }
  return message;
}

console.log(includes([1, 2, 3, 4, 5], 3)); //true
console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus'));
false;
