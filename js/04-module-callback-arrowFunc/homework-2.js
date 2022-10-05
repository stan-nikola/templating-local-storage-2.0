// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
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
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// const { indexOf } = require('lodash');

// // Дополни функцию sortByDescendingFriendCount(users) так,
// //   чтобы она возвращала массив пользователей отсортированный
// //  по убыванию количества их друзей(свойство friends).
// const sortByDescendingFriendCount = users => {
//   return [...users].sort((a, b) => a.friends.length - b.friends.length);
// };

// // console.table(sortByDescendingFriendCount(users));

// // tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// // ==============================================================

// // const getTotalFriendCount = users => {
// //   return users.reduce((acc, friend) => [...acc, ...friend.friends], []).length;
// // };

// // console.log(getTotalFriendCount(users));

// // const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // // const authors = ['Tanith Lee', 'Bernard Cornwell', 'Robert Sheckley', 'Fyodor Dostoevsky'];
// // // Change code below this line

// // const ascendingReleaseDates = releaseDates.sort((curEl, nextEl) => curEl - nextEl);

// // const alphabeticalAuthors = authors.sort();

// // console.log(ascendingReleaseDates);
// // console.log(alphabeticalAuthors);

// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
//   'Howard Lovecraft',
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort();

// const authorsInReversedOrder = [...authors].sort((firstName, nextName) => {
//   const result = firstName[0] > nextName[0];
//   if (result) {
//     return -1;
//   }
//   if (!result) {
//     return 1;
//   }
// });

// // console.log(authorsInAlphabetOrder);
// // console.log(authorsInReversedOrder);

// // const books = [
// //   {
// //     title: 'The Last Kingdom',
// //     author: 'Bernard Cornwell',
// //     rating: 8.38,
// //   },
// //   {
// //     title: 'Beside Still Waters',
// //     author: 'Robert Sheckley',
// //     rating: 8.51,
// //   },
// //   {
// //     title: 'The Dream of a Ridiculous Man',
// //     author: 'Fyodor Dostoevsky',
// //     rating: 7.75,
// //   },
// //   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// //   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// // ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author)
// );

// const sortedByReversedAuthorName = books.sort((firstName, nextName) => {
//   const result = firstName.author[0] > nextName.author[0];
//   if (result) {
//     return -1;
//   }
//   if (!result) {
//     return 1;
//   }
// });

// const sortedByAscendingRating = [...books].sort(
//   (prevRating, nextRating) => prevRating.rating - nextRating.rating
// );

// const sortedByDescentingRating = [...books].sort(
//   (prevRating, nextRating) => nextRating.rating - prevRating.rating
// );

// console.table(sortedByAuthorName);
// console.table(sortedByReversedAuthorName);
// console.table(sortedByAscendingRating);
// console.table(sortedByDescentingRating);

// ================================================

// Дополни код так, чтобы в переменной names получился
// массив имён авторов в алфавитном порядке,
//     рейтинг книг которых больше значения переменной MIN_BOOK_RATING.

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  {
    title: 'The Dreams in the Witch House',
    author: 'Howard Lovecraft',
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = [...books]
  .filter(book => book.rating > MIN_BOOK_RATING)
  .sort((prevAuthor, nextAuthor) => prevAuthor.author.localeCompare(nextAuthor.author))
  .map(book => book.author);

// console.log(names);

// Дополни функцию getNamesSortedByFriendCount(users) так
//     , чтобы она возвращала массив имён пользователей
//  отсортированный по возрастанию количества их друзей(свойство friends).

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

const getNamesSortedByFriendCount = users => {
  return [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);
};

// console.table(getNamesSortedByFriendCount(users));

// const getSortedFriends = users =>
//   [...users]
//     .flatMap(user => user.friends)
//     .sort((prevName, nextName) => prevName.localeCompare(nextName))
//     .filter((val, ind, arr) => arr.indexOf(val) === ind);

// console.table(getSortedFriends(users));
// ================================================

// Дополни функцию getTotalBalanceByGender(users, gender) так,
//     чтобы она возвращала общий баланс пользователей(свойство balance),
//     пол которых(свойство gender) совпадает со значением параметра gender.
const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter(usersGender => usersGender.gender === gender)
    .reduce((acc, usersBal) => acc + usersBal.balance, 0);
};

// console.table(getTotalBalanceByGender(users, 'male'));
// console.table(getTotalBalanceByGender(users, 'female'));

const hello = greet => greet;
// console.log(hello('hello, world'));

const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;
console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));
