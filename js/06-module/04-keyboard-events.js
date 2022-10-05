/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

const refs = {
    output: document.querySelector('.js-output'),
    clearBtn: document.querySelector('.js-clear'),
};

// для всех клавиш на клавиатуре
// window.addEventListener('keydown', onKeyDown);

function onKeyDown(event) {
    console.log('Key pressed', event.key);
}

// для всех кроме служебных (ctrl, esc, tab ...)
window.addEventListener('keypress', onKeyPress);

function onKeyPress(event) {
    // код физической клавиши
    console.log('code:', event.code);

    // значение клавиши на данный момент с учетом языковой раскладки
    console.log('Key:', event.key);
    // добавляем текст в спан
    refs.output.textContent += event.key;
}

refs.clearBtn.addEventListener('click', onClearOutput);
function onClearOutput(event) {
    refs.output.textContent = '';
}
