/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */


// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
    
//     if (number < smallestNumber) {
//     smallestNumber = number;
//     }
   
// }

// console.log(smallestNumber);

/*
 * Напиши скрипт поиска самого большого числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */
 
const numbers = [51, 18, 13, 24, 7, 85, 19, 105, 205, 141,171];
let biggestNumber = numbers[0];

for (const number of numbers) {
    
    if (number > biggestNumber) {
    biggestNumber = number;
    }
   
}

 console.log(biggestNumber);