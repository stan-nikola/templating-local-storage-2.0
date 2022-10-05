import products from '../data/products.js';

// console.log(products);

/*
 * Создаём карточку продукта
 * - В классе продукта может быть product--on-sale product--not-available
 */

// const product = {
//     name: 'Screwdrivers',
//     description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime delectus recusandae',
//     price: 200,
//     available: true,
//     onSale: true,
// };

{
    /*
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p product__pridct>Цена: 1111 кредитов</p>
</article>
*/
}

// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const nameEl = document.createElement('h2');
// nameEl.classList.add('product__name');
// nameEl.textContent = product.name;

// const descEl = document.createElement('p');
// descEl.classList.add('product__descr');
// descEl.textContent = product.description;

// const priceEl = document.createElement('p');
// priceEl.classList.add('product__price');
// priceEl.textContent = `Цена: ${product.price} кредитов`;

// // добавляем элементы внутрь article
// productEl.append(nameEl, descEl, priceEl);
// console.log('productEl', productEl);

// // добавляем article внутрь страницы с дивом
// const productMarkup = document.querySelector('.js-products');
// productMarkup.appendChild(productEl);

/*
 * Пишем функцию для создания карточки продукта
 */

const makeProductCart = ({ name, description, price }) => {
    const productEl = document.createElement('article');
    productEl.classList.add('product');

    const nameEl = document.createElement('h2');
    nameEl.classList.add('product__name');
    nameEl.textContent = name;

    const descEl = document.createElement('p');
    descEl.classList.add('product__descr');
    descEl.textContent = description;

    const priceEl = document.createElement('p');
    priceEl.classList.add('product__price');
    priceEl.textContent = `Цена: ${price} кредитов`;

    // добавляем элементы внутрь article
    productEl.append(nameEl, descEl, priceEl);

    return productEl;
};

// console.log(makeProductCart(products[1]));

// передаем ссылку на функцию makeProductCart
const elements = products.map(makeProductCart);

console.log('elements', elements);

const productsContainer = document.querySelector('.js-products');
productsContainer.append(...elements);
