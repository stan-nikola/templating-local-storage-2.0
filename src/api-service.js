// const fetchAllUsers = () => {
//     console.log(fetchAllUsers);
// };

// const fetchUserById = id => {
//     console.log(fetchUserById);
// };
// const updateUserById = id => {
//     console.log(updateUserById);
// };
// // экспортируем объект функций
// export default { fetchAllUsers, fetchUserById, updateUserById };

// экспортируем по одному
export const fetchAllUsers = () => {
    console.log(fetchAllUsers);
};

export const fetchUserById = id => {
    console.log(fetchUserById);
};
export const updateUserById = id => {
    console.log(updateUserById);
};

export const x = 10;
export const y = 'Mango';

import shortid from 'shortid';

export const addUser = name => {
    const user = {
        name,
        id: shortid.generate(),
    };
    console.log(user);
};
