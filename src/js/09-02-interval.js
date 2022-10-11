import '../css/common.css';

/*
 * Метод setInterval(callback, delay, args)
 */
const logger = time => {
    console.log(`Лог через ${time}ms-${Date.now()}`);
};

// console.log('до вызова setInterval');
// setInterval(logger, 2002, 2000);
// console.log('после вызова setInterval');

/*
 * Очистка   clearInterval(intervalId)
 */

const intervalId = setInterval(logger, 2000, 2000);

const shouldCancelInterval = Math.random() > 0.3;
console.log(shouldCancelInterval);

if (shouldCancelInterval) {
    clearInterval(intervalId);
}
