/*
 * 1. Открыть и закрыть по кнопке
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackDropClick);

function onOpenModal() {
    // добавляем слушателя на клавиатуру когда модалка открыта
    window.addEventListener('keydown', onCloseWscModal);
    document.body.classList.add('show-modal');
}

function onCloseModal() {
    // удаляем  слушателя на клавиатуру когда модалка закрыта
    window.removeEventListener('keydown', onCloseWscModal);
    document.body.classList.remove('show-modal');
}
function onBackDropClick(event) {
    // на чем произошло событие
    console.log(event.target);
    // в чем произошло событие
    console.log(event.currentTarget);

    if (event.target === event.currentTarget) {
        console.log('Back drop click');
        onCloseModal();
    }
}

function onCloseWscModal(event) {
    console.log(event.code);
    const ESC_KEY_CODE = 'Escape';
    if (event.code === ESC_KEY_CODE) {
        onCloseModal();
    }
}
