
/*
 * Напиши скрипт обработки покупки в магазине.
 *
 * - Баланс пользователя хранится в переменной balance
 * - Сумма покупки хранится в переменной payment
 *
 * - Перед проверкой вывести сообщение:
 * «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
 *
 * - Если сумма покупки не превышает баланс:
 *    - Вычесть из баланса сумму покупки
 *    - Вывести сообщение «На счету осталось [число] кредитов»
 * - Если сумма покупки превышает баланс:
 *    - Вывести сообщение «На счету недостаточно средств для проведения операции!»
 * - В конце вывести сообщение «Операция завершена»
 */

let balance = 1000;
const payments = 500;


if (payments <= balance) {
    console.log(`Общая стоимость заказа ${payments} кредитов. Доступных средств на счету: ${balance} кредитов `);
    
    balance -= payments;
    console.log(`Операция упешна, спасибо за покупку! На счету осталось ${balance} кредитов.`);
  
} else {
    (payments > balance)
 
    console.log(`На счету недостаточно средств для проведения операции!`);
}
 console.log(`Операция завершена`); 

