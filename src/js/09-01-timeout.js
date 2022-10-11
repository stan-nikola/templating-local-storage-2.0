import '../css/common.css';

/*
 * Метод window.setTimeout(callback, delay, args)
 */
// const logMessage = () => {
//     console.log('Лог при вызове callback-функции через 3 секунды');
// };

// console.log('До вызова setTimeout');
// console.log('После вызова setTimeout');

// setTimeout(
//     x => {
//         console.log('x=', x);
//         console.log('1-я Внутри callback для setTimeout'), 2000;
//     },
//     2000,
//     10,
// );

// setTimeout(
//     y => {
//         console.log('y=', y);
//         console.log('2-я Внутри callback для setTimeout'), 2000;
//     },
//     3000,
//     20,
// );

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

const logger = time => {
    console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
};

const timerId = setTimeout(logger, 2000, 2000);
//  получаем timeout ID
console.log('timerId:', timerId);

const shouldCancelTimer = Math.random() > 0.3;
console.log('shouldCancelTimer', shouldCancelTimer);

if (shouldCancelTimer) {
    // передаем id таймаута
    clearTimeout(timerId);
}

/*
 * Отложенная функция выполнится после того,
// как стек будет пустой даже если delay=0    setTimeout(callback, delay)
 */

// console.log('До вызова setTimeout');
// setTimeout(() => {
//     console.log('вызов отложенной функции');
// });
// console.log('После вызова setTimeout');
