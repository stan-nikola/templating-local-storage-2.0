//Цикл for

// for (инициализация; условие; пост - выражение){
//     // тело цикла
// }

// for (let i = 0; i <= 10; i += 1){
//     console.log(i);
// }

// for (let i = 10; i >= 0; i -= 2){
//     console.log(i);
// }

//  console.log('Цикл закончился');


//  Pre-increment(++i) и Post-increment (i++)
//  ими пользоваться не рекомендуют

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log('Цикл закончился');


//  * Напиши скрипт который подсчитывает общую сумму зарплат работников.
//  * Кол-во работников хранится в перемнной employees.
//  * Зарплата каждого работника это случайное число от 500 до 5000
//  * Записать сумму в переменную totalSalary и вывести в консоль
//  */
 
// //  1 сделать вары
// const employees = 8;
// const minSalary = 100;
// const maxSalary = 1000;
// let totalSalary = 0;


// // // 2 перебрать работников в цикле
// for (let i = 1; i <= employees; i += 1){
//   //   // 3 сгенерить случайную зп
//   let salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//   // 4  прибавить к тоталу
//   totalSalary  += salary;
//   console.log(`Зарплата работника ${i} - ${salary}`);
// };
// // // 5 лог
// console.log(`Зарплата всех работников  - ${totalSalary}`);


//  * Напиши скрипт который подсчитывает сумму всех чётных чисел,
//  * которые входят диапазон чисел в переменных от min до max.
//  * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.

const min = 6;
const max = 13;
let total = 0;

// фор от min до max с шагом в 1
// for (let i = min; i <= max; i += 1){
//   if (i % 2 === 0) {
//     console.log('Четное: ', i);
//      // пишем в сумму
//     total += i;
//   }
//   }
// console.log('Сумма четных: ', total);

// та же задача по логике от обратного, более правильное решение 
for (let i = min; i <= max; i += 1){
  if (i % 2 !== 0) {
    console.log('Не Четное: ', i);
     // директива continue пропускает итерацию, если if  false
    continue;
  } 
   // пишем в сумму
  console.log('Четное: ', i);
   total += i;
  }
console.log('Сумма четных: ', total);








