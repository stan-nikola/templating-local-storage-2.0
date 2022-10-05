class Storage {
    constructor(items) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    removeItem(item) {
        for (let i = 0; i < this.items.length; i += 1) {
            // console.log(this.storage[i]);
            if (this.items[i] === item) {
                return this.items.splice(i, 1);
            }
        }
    }
}

// Change code above this line
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);

// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class StringBuilder {
//     constructor(value) {
//         this.value = value;
//     }
//     getValue() {
//         return this.value;
//     }
//     padStart(str) {
//         this.value = str + this.value;
//     }
//     padEnd(str) {
//         this.value = this.value + str;
//     }
//     padBoth(str) {
//         this.value = str + this.value + str;
//     }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// class Car {
//     // Change code below this line
//     #price;
//     static MAX_PRICE = 50000;

//     constructor({ price }) {
//         this.#price = price;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//         if (Car.MAX_PRICE < newPrice) {
//             return;
//         }
//         this.#price = newPrice;
//     }

//     // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class Car {
//     static #MAX_PRICE = 50000;
//     // Change code below this line
//     static checkPrice(price) {
//         if (price > Car.#MAX_PRICE) {
//             return 'Error! Price exceeds the maximum';
//         }
//         return 'Success! Price is within acceptable limits';
//     }
//     // Change code above this line
//     constructor({ price }) {
//         this.price = price;
//     }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }

// class Admin extends User {
//     // Change code below this line

//     static AccessLevel = {
//         BASIC: 'basic',
//         SUPERUSER: 'superuser',
//     };
//     constructor({ email, accessLevel }) {
//         super(email);
//         this.accessLevel = accessLevel;
//     }

//     // Change code above this line
// }

// const mango = new Admin({
//     email: 'mango@mail.com',
//     accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

class User {
    email;

    constructor(email) {
        this.email = email;
    }

    get email() {
        return this.email;
    }

    set email(newEmail) {
        this.email = newEmail;
    }
}
class Admin extends User {
    // Change code below this line

    static AccessLevel = {
        BASIC: 'basic',
        SUPERUSER: 'superuser',
    };

    constructor({ email, accessLevel }) {
        super(email);
        this.accessLevel = accessLevel;
        this.blacklistedEmails = [];
    }
    blacklist(email) {
        this.blacklistedEmails.push(email);
    }

    isBlacklisted(email) {
        return this.blacklistedEmails.includes(email);
    }
    // Change code above this line
}

const mango = new Admin({
    email: 'mango@mail.com',
    accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted('mango@mail.com')); // false
console.log(mango.isBlacklisted('poly@mail.com')); // true
