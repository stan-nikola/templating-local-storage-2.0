/*
 * Array.prototype.map()
 * - Поэлементо перебирает оригинальный массив
 * - Не изменяет оригинальный массив
 * - Возвращает новый массив такой же длины
 */

const numbers = [5, 10, 15, 20, 25];

const doableNumbers = numbers.map(number => number / 2);

// console.log(numbers);
// console.log(doableNumbers);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
console.table(players);
/*
 * Получаем массив имён всех игроков
 */
const playerNames = players.map(player => player.name);
// console.log('playerNames', playerNames);

const playerId = players.map(player => player.id);
// console.log('playerNames', playerId);

const res = players.map(({ name, timePlayed }) => ({
  name,
  timePlayed,
}));

// console.log('res', res);

/*
 * Увеличиваем кол-во поинтов каждого игрока на 10%
 */

const updatePlayers = players.map(player => ({
  ...player,
  points: player.points * 1.1,
}));
// console.table(updatePlayers);

/*
 * Увеличиваем кол-во часов игрока по id
 */

const playerIdToUpdate = 'player-4';

// const updatePlayer = players.map(player => {
//   if (playerIdToUpdate === player.id) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     };
//   }
//   return player;
// });

const updatePlayer = players.map(player =>
  playerIdToUpdate === player.id
    ? {
        ...player,
        timePlayed: player.timePlayed + 100,
      }
    : player
);

console.table(updatePlayer);
