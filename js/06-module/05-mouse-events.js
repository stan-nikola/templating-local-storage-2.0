/*
 * События мыши
 * - mouseenter и mouseleave (это ховер)
 * - mouseover и mouseout работает для детей бокса
 * - mousemove (chatty event - болтливое событие)
 * - Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 * - Хорошая задачка - https://learn.javascript.ru/task/move-ball-field
 */

const boxRef = document.querySelector('.js-box');
// аналог ховера на JS
boxRef.addEventListener('mouseenter', onMouseEnter);
boxRef.addEventListener('mouseleave', onMouseLeave);

// болтливое событие, происходит на каждом движении мыши
// boxRef.addEventListener('mousemove', onMouseEnter);

function onMouseEnter(event) {
    console.log('Mouse in', event);
    boxRef.classList.add('box--active');
}

function onMouseLeave() {
    console.log('Mouse out');
    boxRef.classList.remove('box--active');
}
