/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30, 100];
const array3 = [10, 15, 0, 10];

let total = 0;
// сшиваем 2 массива в один. Конкатенация
const numbers = array1.concat(array2, array3);

// перебираем и суммируем

for (const number of numbers) {
    total += number;
}

console.log(total);
