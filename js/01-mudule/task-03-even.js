/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;

for ( const number of numbers) {

  if (number % 2 !== 0) {
    // console.log('Не Четное: ', number);
     // директива continue пропускает итерацию, если if  false
    continue;
  } 
   // пишем в сумму
  console.log('Четное: ', number);
   total += number;
  }
console.log('Сумма четных: ', total);

