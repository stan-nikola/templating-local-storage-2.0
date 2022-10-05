/*
 * Создаём и добавляем коллекцию
 */
const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
];

// const option = colorPickerOptions[0];

// const buttonEl = document.createElement('button');

// buttonEl.type = 'button';
// buttonEl.textContent = option.label;
// buttonEl.style.backgroundColor = option.color;
// buttonEl.style.width = 40;

// console.log('buttonEl', buttonEl);

// numbers.forEach(function (number) {
//     console.log('number', number);
// });

//  создаём кнопки через forEach
// const elements = [];
// colorPickerOptions.forEach(option => {
//     const buttonEl = document.createElement('button');

//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker__option');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

//     elements.push(buttonEl);
// });
// console.log(elements);

//  создаём кнопки через MAP
// const elements = colorPickerOptions.map(option => {
//     const buttonEl = document.createElement('button');

//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker__option');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

//     return buttonEl;
// });

// const colorPickerContainer = document.querySelector('.js-color-picker');

// colorPickerContainer.append(...elements);

/*
 * Пишем функцию для создания разметки колорпикера
 */

const makeColorPickerOptions = option => {
    return option.map(option => {
        const buttonEl = document.createElement('button');

        buttonEl.type = 'button';
        buttonEl.classList.add('color-picker__option');
        buttonEl.textContent = option.label;
        buttonEl.style.backgroundColor = option.color;

        return buttonEl;
    });
};
const elements = makeColorPickerOptions(colorPickerOptions);

const colorPickerContainer = document.querySelector('.js-color-picker');
colorPickerContainer.append(...elements);
