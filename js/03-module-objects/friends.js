
/*
 * Работа с коллекцией (массивом объектов)
 */
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
// ];

// console.table(friends);
// for (const friend of friends) {
//     console.log(friend);

//     // в for ofе можно добавить свойство объекта,
//     // т.к.получаем ссылку на этот объект, значит можно изменять
//     friend.newProp = 111;

// }
// console.table(friends);

/*
 * Ищем друга по имени
 */
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
// ];
// const findFriendByName = function (allFriends, friendName) {
//     let findFriendName;
//     for (const friend of allFriends) {
//         // console.log(friend.name);
//         if (friend.name === friendName) {

//           return  `Friend ${friend.name} found, success!!!`;
//         }
        
//     }
//     return `Friend ${friendName} not found :((`;
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

/*
 * Получаем имена всех друзей
 */

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
// ];



// const getAllNames = function (allFriends) {
//     const names = [];

//     for (const friend of allFriends) {
//         // console.log(friend.name);
//          names.push(friend.name);
//     }
//     return names;
// }


// console.log(getAllNames(friends));


/*
 * Получаем имена только друзей которые онлайн
 */

const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: true },
];

const getOnlineFriends = function (allFriends) {
    const onlineFriends = [];

   for (const friend of allFriends) {
     if (!friend.online) { // сравнивать по === true плохая практика
         onlineFriends.push(friend);
     }
   }
   return onlineFriends;
}

console.table(getOnlineFriends(friends));