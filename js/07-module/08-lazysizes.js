/*
 * Библиотека lazysizes
 * - feature detection
 */

// https://web.dev/browser-level-image-lazy-loading/

const lazyImage = document.querySelectorAll('img[data-src]');

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

// ==========+++++++Feature detection++++++++++======

if ('loading' in HTMLImageElement.prototype) {
    // supported in browser
    console.log('Браузер поддерживает Ленивая загрузка ');
    addLazyImagesSrc();
} else {
    // fetch polyfill/third-party library
    console.log('Браузер не поддерживает Ленивая загрузка ');
    addLazyLoadingScript();
}

function addLazyImagesSrc() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
        img.src = img.dataset.src;
    });
}

function addLazyLoadingScript() {
    const script = document.createElement('script');
    script.src =
        'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    script.integrity =
        'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
    script.crossOrigin = 'anonymous';
    script.referrerPolicy = 'no-referrer';

    document.body.appendChild(script);
}

{
    /* <script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
        integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script> */
}
