/*
 * Цепочки вызовов - chaining
 */
const numbers = [1, 5, 2, 4, 3];

const greaterThenTwo = numbers.filter(value => value > 2);
console.log(greaterThenTwo);

const multiByThree = greaterThenTwo.map(value => value * 3);
console.log(multiByThree);

const sorted = multiByThree.sort((firstValue, nextValue) => firstValue - nextValue);
console.log(sorted);

// Цепочка предыдущих трёх

const chainSorted = numbers
  .filter(value => value > 2)
  .map(value => value * 3)
  .sort((firstValue, nextValue) => firstValue - nextValue);

console.log(chainSorted);

/*
 * Сортируем тех кто онлайн по рангу
 * - сначала фильтруем
 * - потом сортируем
 */
const players = [
  { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
  { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
  { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
  { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
  { id: 'id-5', tag: 'Chelsey', isOnline: false, rank: 200 },
];

const onlineAndSortedPlayers = players
  .filter(player => player.isOnline)
  .sort((prevPlayer, nextPlayer) => nextPlayer.rank - prevPlayer.rank);
console.table(onlineAndSortedPlayers);

/*
 * Chaining в методах объекта как jquery
 */

const element = {
  class: '',
  hovered: false,
  changeClass(cls) {
    this.class = cls;

    return this;
  },
  toggleHovered() {
    this.hovered = !this.hovered;

    return this;
  },
};

element.toggleHovered().changeClass('open').toggleHovered();
console.log(element);
