/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

const promise = new Promise((resolve, reject) => {
    const canFulFill = Math.random() > 0.5;
    setTimeout(() => {
        if (canFulFill) {
            resolve('Ok, promise with result');
        }
        reject('Error,rejected ');
    }, 1000);
});

// принимает 2 функции
// promise.then(onSuccess, onError);

// promise.then(
//     result => {
//         console.log(`✅ ${result}`);
//     },
//     error => {
//         console.log(`💩 ${error}`);
//     },
// );

// promise.then(onFulfilled, onRejected);

function onFulfilled(result) {
    console.log('onFulfilled => onFulfilled');
    console.log(`✅ ${result}`);
}
function onRejected(error) {
    console.log('onRejected => onRejected');
    console.log(`💩 ${error}`);
}

/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */
promise
    .then(onFulfilled)
    .then(x => {
        console.log(x);
        return 10;
    })
    .then(y => {
        console.log(y);
        throw new Error('error in 2ht then');
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('Я буду выполнен в любом случае');
    });
