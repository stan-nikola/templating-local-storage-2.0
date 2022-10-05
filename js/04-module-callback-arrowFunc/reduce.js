/*
 * Array.prototype.reduce()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает что угодно 🤯
 * - Заменяет всё на свете, но использовать нужно с умом
 */

const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, value) => {
//   return acc + value;
// }, 5);

const total = numbers.reduce((acc, value) => acc + value, 0);
// console.log(total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25

/*
 * Считаем общую зарплату
 */

const salary = {
    mango: 100,
    poly: 50,
    ajax: 150,
};

const totalSalary = Object.values(salary).reduce(
    (total, value) => total + value,
    0,
);
// console.log('totalSalary:', totalSalary);

/*
 * Считаем общее количество часов
 */

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

const totalTimePlayed = players.reduce(
    (totalTime, player) => totalTime + player.timePlayed,
    0,
);
// console.log('totalTimePlayed', totalTimePlayed);

/*
 * Считаем общую сумму товаров корзины
 */
const cart = [
    { label: 'Apples', price: 100, quantity: 2 },
    { label: 'Bananas', price: 120, quantity: 3 },
    { label: 'Lemons', price: 70, quantity: 4 },
];

const cartPrice = cart.reduce(
    (totalPrice, { price, quantity }) => totalPrice + price * quantity,
    0,
);
// console.log('cartPrice:', cartPrice);

/*
 * Собираем все теги из твитов
 */
const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// const allTags = tweets.reduce((tags, tweet) => {
//  ===!!!====// старая запись, линтеры будут давать ошибку,
// === !!!!=== //    изменяются параметры функции(мутации)
//   //   tags.push(...tweet.tags);
//   // return tags;

//   return [...tags, ...tweet.tags];
// }, []);

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
console.log(allTags);

// const tagsStats = allTags.reduce((acc, tag) => {
//   //   console.log(acc);
//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }

//   acc[tag] = 1;
//   return acc;
// }, {});

const tagsStats = allTags.reduce((acc, tag) => {
    console.log(acc);
    //   if (acc[tag]) {

    //     return { ...acc, [tag]: acc.tag + 1 };
    //   }

    //   return {
    //     ...acc,
    //     [tag]: 1,
    //   };

    //тернарником

    return { ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 };
}, {});

// const tagsStats = allTags.reduce(
//   (acc, tag) => ({ ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 }),
//   {}
// );

console.log(tagsStats);

// Change code below this line
const getTotalFriendCount = users => {
    return users.reduce((acc, friend) => [...acc, ...friend.friends], [])
        .length;
};
// Change code above this line
