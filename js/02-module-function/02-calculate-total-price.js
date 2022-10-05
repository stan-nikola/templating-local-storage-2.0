/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log('Total: ', total);

const calculateTotalPrice = function (items) {
    console.log("Внутри:", items);
    let total = 0;

    for (const item of items) {
        total += item;
       
    }
     return total;
}
const result1 = calculateTotalPrice([1, 2, 3]);
console.log("Total :", result1); // 6

const result2 = calculateTotalPrice([5, 10, 15, 20]);
console.log(`Общая сумма покупок: ${result2}`); // 50

console.log("Total :", calculateTotalPrice([100, 200, 300])); // 600