const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: false },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: false },
];

/*
 * Array.prototype.every()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если все элементы массива удовлетворяют условию
 */
// const allPlayersOnline = players.every(players => players.online);
// console.log('allPlayersOnline', allPlayersOnline);

// const allPlayersPoints = players.every(players => players.points > 47);
// console.log('allPlayersPoints', allPlayersPoints);

/*
 * Array.prototype.some()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если хотя бы один элемент массива удовлетворяет условию
 */

const allPlayersOnline = players.some(players => players.online);
console.log('allPlayersOnline', allPlayersOnline);

const hardcorePlayers = players.some(players => players.points > 90);
console.log('hardcorePlayers', hardcorePlayers);
