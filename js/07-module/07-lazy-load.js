/*
 * Ленивая загрузка изображений (концепция)
 * - нативная поддержка
 * - событие загрузки изображения
 */

const lazyImage = document.querySelectorAll('img[loading="lazy"]');

console.log(lazyImage);

lazyImage.forEach(image => {
    // { once: true } третий параметр слушателя событий- срабатывает один раз потом удаляется
    image.addEventListener('load', onImageLoad, { once: true });
});

function onImageLoad(evt) {
    console.log('Image loaded');
    // console.log(evt.target);
    evt.target.classList.add('appear');
}
