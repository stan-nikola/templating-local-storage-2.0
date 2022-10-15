/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */

// const makeOrder = dish => {
//     const DELAY = 1000;

//     return (promise = new Promise((resolve, reject) => {
//         const passed = Math.random() > 0.5;
//         setTimeout(() => {
//             if (passed) {
//                 resolve(resolve(`✅ Вот ваш заказ: ${dish}`));
//             }
//             reject('❌ Упс,повар ушел домой');
//         }, DELAY);
//     }));
// };
// makeOrder('Пирожок').then(onSuccess).catch(onError);

// function onSuccess(result) {
//     console.log(result);
// }
// function onError(error) {
//     console.log(error);
// }

/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */
// const makeOrder = dish => {
//     return Promise.resolve(`✅ Вот ваш заказ: ${dish}`);
// };
// makeOrder('Пирожок').then(onSuccess);

// function onSuccess(result) {
//     console.log(result);
// }
// function onError(error) {
//     console.log(error);
// }
/*
 * Покемоны с https://pokeapi.co/
 */

// function fetchPokemonByID(id) {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
// }

// fetchPokemonByID(4).then(onFetchSuccess).catch(onFetchError);

// function onFetchSuccess(pokemon) {
//     console.log(pokemon);
// }
// function onFetchError(error) {
//     console.log('onFetchError');
//     console.log(error);
// }
