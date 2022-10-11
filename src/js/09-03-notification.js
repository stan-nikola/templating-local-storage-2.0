import '../css/common.css';

/**
 * - Показываем и скрываем добавляя/удаляя класс is-visible
 * - Скрываем через определённое время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */
const NOTIFICATION_DELAY = 3000;
let notificationTimeoutId = null;
const refs = {
    notification: document.querySelector('.js-alert'),
};
refs.notification.addEventListener('click', onNotificationClick);

showNotification();

/*
 * Функции
 */

function onNotificationClick() {
    hideNotification();

    clearTimeout(notificationTimeoutId);
}

function showNotification() {
    refs.notification.classList.add('is-visible');
    notificationTimeoutId = setTimeout(() => {
        console.log('Hide notification alert  automatically');
        hideNotification();
    }, NOTIFICATION_DELAY);
}

function hideNotification() {
    refs.notification.classList.remove('is-visible');
}
