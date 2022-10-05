const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, onSuccess, onError) {
    if (this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName);
    }
    return onError(pizzaName);
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  //   console.log(error);
  return `There is no pizza with a name ${error} in the assortment. `;
}

// Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line
  orderedItems.forEach(number => (totalPrice += number));
  // Change code above this line
  return totalPrice;
}

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503

function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line
  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  return filteredNumbers;
}

// console.log(filterArray([1, 2, 3, 4, 5], 3)); //4.5
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // 5
// console.log(filterArray([1, 2, 3, 4, 5], 5)); //[]

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

  firstArray.forEach(item => {
    if (secondArray.includes(item)) {
      commonElements.push(item);
    }
  });
  return commonElements;
  // Change code above this line
}

// console.log(getCommonElements([1, 2, 3], [2, 4])); //2
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []

function changeEven(numbers, value) {
  // Change code below this line
  let newArray = [];
  numbers.forEach(number => {
    if (number % 2 === 0) {
      newArray.push(number + value);
    } else if (number % 2 !== 0) {
      newArray.push(number);
    }
  });
  return newArray;
}
// Change code above this line

// console.log(changeEven([1, 2, 3, 4, 5], 10));

// //Дополни функцию getUserNames(users) так, чтобы она возвращала
// массив имён пользователей(свойство name)
//  из массива объектов в параметре users.
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
// ];
// console.table(users);

// const getUserNames = users.map(user => user.name);

// console.table(getUserNames);

// // Дополни код так, чтобы в переменной
// evenNumbers получился массив чётных чисел
//  из массива numbers,
//   а в переменной oddNumbers массив
// нечётных.Обязательно используй метод filter().
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

// ==========================================================
// // Дополни код так, чтобы в переменной allGenres
//  был массив всех жанров книг(свойство genres)
//   из массива books,
//   а в переменной uniqueGenres массив
//   уникальных жанров - без повторений.

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    genres: ['adventure', 'history'],
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    genres: ['fiction', 'mysticism'],
  },
  {
    title: 'Redder Than Blood',
    author: 'Tanith Lee',
    genres: ['horror', 'mysticism', 'adventure'],
  },
];
// Change code below this line
const allGenres = books.flatMap(genre => genre.genres);
const uniqueGenres = allGenres.filter((genres, index, array) => array.indexOf(genres) === index);

// console.log(allGenres);
// console.log(uniqueGenres);

// ===============================
// Используя метод filter() дополни код так, чтобы:

// В переменной topRatedBooks получился массив книг
//  рейтинг которых(свойство rating) больше либо равно
//   значению переменной MIN_RATING.
// В переменной booksByAuthor получился
//  массив книг написанных автором
//  с именем(свойство author) которое
//  совпадает со значением в переменной AUTHOR.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// Дополни функцию getFriends(users) так,
//   чтобы она возвращала массив друзей всех
// пользователей(свойство friends).
// У нескольких пользователей могут быть одинаковые друзья,
//   сделай так чтобы возвращаемый массив не содержал повторений.
// Change code below this line

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39,
  },
];

// const getFriends = users => users.reduce((acc, user) => [...acc, ...user.friends], []);
// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.table(allTags(users));

// const getActiveUsers = users => users.filter(user => !user.isActive);
// console.table(getActiveUsers(users));

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

// console.log(getUserWithEmail(users, 'moorehensley@indexia.com'));
// console.log(getUserWithEmail(users, 'sharlenebush@tubesys.com'));

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(value => value % 2 !== 0);

const eachElementInSecondIsEven = secondArray;
const eachElementInSecondIsOdd = secondArray;

const eachElementInThirdIsEven = thirdArray;
const eachElementInThirdIsOdd = thirdArray;

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);

// Нашему сервису необходимо рассчитать среднее
//  время проведённое в одной игре для каждого игрока,
//   и получить общую сумму этих времён.
//   Рассчитать время для каждого из игроков,
//   можно разделив его время(свойство playtime)
//    на количество игр(свойство gamesPlayed).

const players = [
  { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
  { name: 'Poly', playtime: 469, gamesPlayed: 2 },
  { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
  { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce(
  (acc, { playtime, gamesPlayed }) => acc + playtime / gamesPlayed,
  0
);

// console.log(totalAveragePlaytimePerGame);
