/*
 * Сhatty events
 * Приемы throttling и debouncing c Lodash
 */

/*
 * Mousemove и throttle
// используется на scroll, resize, перетаскивания
 */
const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0;

// добавляем тротл на слушатель через lodash 500ms
// const throttleOnMouseMove = _.throttle(onMouseMove, 500);
window.addEventListener('mousemove', _.throttle(onMouseMove, 500));

function onMouseMove(event) {
    mouseMoveCbInvocationCounter += 1;

    coordsOutputRef.textContent = `
    Кол-во вызовов onMouseMove: ${mouseMoveCbInvocationCounter},
    X: ${event.clientX},
    Y:${event.clientY}
  `;
    console.log(event);
}

/*
 * Input и debounce
// используется при вводе пользователя при поиске
 */
const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');
let inputCbInvocationCounter = 0;

inputRef.addEventListener('input', _.debounce(onInputChange, 500));

function onInputChange(event) {
    inputCbInvocationCounter += 1;

    outputRef.textContent = `
    Кол-во вызовов onInputChange: ${inputCbInvocationCounter},
    Значение: ${event.target.value}
  `;
}
