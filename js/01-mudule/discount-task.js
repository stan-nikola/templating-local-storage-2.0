/*
 * Напиши скрипт подсчёта суммы покупки со скидкой в зависимости
 * от потраченной суммы за всё время (партнёрская программа).
 *
 * - Общая сумма потраченного хранится в переменной totalSpent
 * - Сумма текущего платежа хранится в переменной payment
 * - Скидка хранится в переменной discount
 *
 * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
 * - Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
 * - Если потрачено больше [5000 - золотой партрёр, скидка 10%
 * - Если потрачено меньше 100) - не партнёр, скидка 0%
 *
 * - В результате вывести сообщение
 * «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
 */

// const totalSpent = 50;
// const payment = 100;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//     discount = 0.02;
//       console.log(`бронзовый партнёр, скидка: ${discount * 100} %`);
// } else if
//     (totalSpent >= 1000 && totalSpent < 5000) {
//     discount = 0.05;
//     console.log(`серебрянный партрёр, скидка:  ${discount * 100} %`)
// } else if  (totalSpent >= 5000) {
//     discount = 0.1;
//     console.log(`золотой партрёр, скидка: ${discount * 100} %`);
// } else {
//     console.log(`не партнёр, скидка: ${discount * 100} %`);
//     }
    
// console.log(`Оформляем заказ на сумму ${payment} $ со скидкой ${discount * 100}%`)
// console.log(`Скидка составит: ${payment * discount}$`);


// const n = 5;
// const m = 0; 
// let paperWork = 0;

//   if (n < 0 || m < 0){
// paperWork = 0;
//   } else {
//       paperWork = n * m;
//   }
// console.log(paperWork);



const name = 'Bill';
console.log('Hello, ' + name + ' how are you doing today?');
