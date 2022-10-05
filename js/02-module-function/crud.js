// C - create
// R - read
// U - update
// D - delete

// let user = 'Vova' - c
// console.log(user) - r
// user = 'Sara' - u
// user = null - d
// delete user - d

// =============================
// C - create
// let friends = ["vova", "sara", "bob", "mike"];

// [].slice()
// [].concat()

// ++i   i + = 1
// i++
// --i
// i--   i - = 1

// let users = [];
// let len = friends.length;
// for (let idx = 0; idx < len; idx += 1) {
//     users.push(friends[idx]);
// }

// console.log(friends);
// console.log(users);
// console.log(users === friends);

// let users = [];
// for (let friend of friends) {
//     users.push(friend);
// }

// console.log(friends);
// console.log(users);
// console.log(users === friends);

// ==================================
// R - read
// let friends = ["vova", "sara", "bob", "mike"];
// for (let friend of friends) {
//     console.log(friend);
// }

// let friends = ["vova", "sara", "bob", "mike"];
// for (let idx = 0; idx < friends.length; idx++) {
//     console.log(friends[idx]);
// }

// ==================================
// [].indexOf()
// [].includes()

// U - update
// let friends = ["jonh", "vova", "sara", "bob", "mike"];
// console.log(friends);

// let itemToFind = "sara";
// let nameToUpdate = "Sara Connor";

// for (let item of friends) {
//     // console.log(item);
//     if (item === itemToFind) {
//         let idx = friends.indexOf(item);
//         friends[idx] = nameToUpdate;
//         console.log("find", idx);
//     }
// }

// console.log(friends);

// let friends = ["jonh", "vova", "sara", "bob", "mike"];
// console.log(friends);

// let itemToFind = "sara";
// let nameToUpdate = "Sara Connor";

// for (let idx = 0; idx < friends.length; idx += 1) {
//     if (friends[idx] === itemToFind) {
//         friends[idx] = nameToUpdate;
//     }
// }

// console.log(friends);

// ======================================
// D - delete

// let friends = ["jonh", "vova", "sara", "bob", "mike"];
// console.log(friends);

// let itemToFind = "sara";

// for (let idx = 0; idx < friends.length; idx += 1) {
//     if (friends[idx] === itemToFind) {
//         console.log("Find");
//         friends.splice(idx, 1);
//     }
// }

// console.log(friends);

// let friends = ["jonh", "vova", "sara", "bob", "mike"];
// console.log(friends);

// let itemToFind = "sara";

// for (let friend of friends) {
//     if (friend === itemToFind) {
//         let idx = friends.indexOf(friend);
//         console.log(idx);
//         friends.splice(idx, 1);
//     }
// }

// console.log(friends);

// ========================================
// [].includes()
// let friends = ["jonh", "vova", "sara", "bob", "mike"];
// console.log(friends);

// let itemToFind = "sara";

// if (friends.includes(itemToFind)) {
//     let idx = friends.indexOf("sara");
//     console.log(idx);
//     friends.splice(idx, 1);
// }

// console.log(friends);
// ===============================

// [].findIndex();

// if (friends.findIndex("sara") !== -1) {
//     // let idx
//     // splice;
// }
