/*
 * Деструктуризация объекта
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
//   author: 'user-1',
// };

// const { tracks,
//     name,
//     rating,
//     author = 'default',
//     trackCount: numberOfTrack,

// } = playlist;

// console.log(name, rating, author);
// console.log('Number of track: ',numberOfTrack);

// вместо громоздкого
// console.log(playlist.tracks);
// console.log(playlist.name);

/*
 * Глубокая деструктуризация
 */

// const profile = {
//   name: 'Jacques Glume',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name,
//     avatar,
//     stats: { followers, views, likes } //глубокая деструктуризация
// } = profile;

// глубокая деструктуризация в место этой записи
// const { followers, views }=stats;

// console.log(name, avatar, followers, views, likes);

/*
 * Деструктуризация массивов
 */

const rgb = [255, 100, 80];

// const [red, green, blue] = rgb;

// с пропуском
const [red, , blue] = rgb;

// console.log(red, blue);

const authors = {
  kiwi: 4,
  poly: 7,
  ajax: 9,
  mango: 6,
};

const entries = Object.entries(authors);

for (const [name, rating] of entries) {
  // console.log(entry);
  // const [name, rating]   = entry;
  // console.log(name, rating );
}

/*
 * Операция rest (сбор)
 */

//  const profile = {
//  name: 'Jacques Gluke',
//  tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, location, ...otherProps } = profile;

// console.log(name, tag, location, otherProps);

/*
 * Паттерн «Объект настроек»
 * - деструктуризация параметра-«Объект в подписи функции
 * - rest при деструктуризация в подписи
 */

// const showProfileInfo = function (userProfile) {
//     const { name, tag, location, stats:{ followers, likes } } = userProfile;

//     console.log(name, tag, location, followers, likes );
// };

// либо упрощенная запись деструктуризации

const showProfileInfo = function ({
  name,
  tag,
  location,
  stats: { followers, likes },
  ...restProps
}) {
  console.log(name, tag, location, followers, likes);
  console.log(restProps);
};

const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

showProfileInfo(profile);
