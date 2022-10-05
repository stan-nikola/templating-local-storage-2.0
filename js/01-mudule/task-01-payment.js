/*
 * Посчитать общую сумму покупок в корзине
 */

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// // // сделать переменную totalPrice
// let total = 0;

// решение циклом for
// // перебрать каждую сумму массива
// let lastIndex = cart.length - 1;

// for (let i = 0; i <= lastIndex; i += 1){
//     console.table(cart[i]);

// // посчитать все суммы элементов массива
//     total += cart[i];
// }

// console.log('Total :', total);


//======== решение циклом for ... of

// for (const value of cart) {
//     console.log(value);

//     total += value;

// }
// console.log('Total :', total);


// Усложняем задачу
// Добавить такс 10% решение циклом for ... of не подойдет

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
const tax = 20;
// // сделать переменную totalPrice
let total = 0;

for (let i = 0; i < cart.length; i += 1) {
    cart[i] = Math.round(cart[i] * ((tax + 100) / 100));
    console.table(cart[i]);
    total += cart[i];
}

console.log(`Total + ${tax}% tax :`, total);