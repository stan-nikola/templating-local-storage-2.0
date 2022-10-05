/*
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортирует и ИЗМЕНЯЕТ оригинальный массив
 * - По умолчанию:
 *    - сортирует по возрастанию
 *    - приводит элементы к строке и сортирует по [Unicode](https://unicode-table.com/en/)
 */

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log('sort', numbers);

const letters = ['b', 'B', 'a', 'A'];

letters.sort();
console.log('sort', letters);

/*
 * compareFunction - функция сравнения (callback)
 * Элементы массива сортируются в соответствии с её возвращаемым значением
 *  - eсли compareFunction(A, B) меньше 0, сортировка поставит A перед B
 *  - если compareFunction(A, B) больше 0, сортировка поставит B перед A
 *  - если compareFunction(A, B) вернёт 0, сортировка оставит A и B на неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам.
 */

// от меньшего к большему
const numbersFuncToBig = [1, 9, 6, 2, 3];
numbersFuncToBig.sort((curEl, nextEl) => {
  return curEl - nextEl;
});
console.log('numbers Func ToBig', numbersFuncToBig);

// от большего  меньшему
const numbersFuncToSmall = [1, 9, 6, 2, 3];
numbersFuncToSmall.sort((curEl, nextEl) => nextEl - curEl);
console.log('numbers Func Small', numbersFuncToSmall);

/*
 * Как сделать копию массива чтобы не сортировать оригинальный
 * - Array.prototype.slice()
 * - Операция spread
 */

const numbers = [1, 9, 6, 2, 3];

const copyToBig = [...numbers].sort((curEl, nextEl) => curEl - nextEl);
// console.log('numbers Func big copy', copyToBig);

const copyToSmall = [...numbers].sort((curEl, nextEl) => nextEl - curEl);
// console.log('numbers Func Small copy', copyToSmall);

/*
 * Кастомная сортировка сложных типов
 */
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// По игровому времени
const sortByBestPlayer = [...players].sort(
  (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed
);
// console.table(sortByBestPlayer);

const sortByWorstPlayer = [...players].sort(
  (curPlayer, nextPlayer) => nextPlayer.timePlayed - curPlayer.timePlayed
);
// console.table(sortByWorstPlayer);

const sortByName = [...players].sort((firstName, nextName) => {
  const result = firstName.name[0] > nextName.name[0];
  if (result) {
    return 1;
  }
  if (!result) {
    return -1;
  }
});
console.table(sortByName);

//  localeCompare, аналог сортировки по первому значению

const sortedByReversedPlayerName = [...players].sort((firstPlayer, secondPlayer) =>
  firstPlayer.name.localeCompare(secondPlayer.name)
);

const sortedBydPlayerName = [...players].sort((firstPlayer, secondPlayer) =>
  secondPlayer.name.localeCompare(firstPlayer.name)
);

// находить порядковый номер символа в таблице UTF
console.log('abc'.charCodeAt(1));
