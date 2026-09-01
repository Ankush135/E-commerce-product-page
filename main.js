/* =========================
   ELEMENTS
========================= */

const sideBar = document.querySelector('[data-sideBar]');
const closeSideBar = document.querySelector('[data-closeSideBar]');
const openSideBar = document.querySelector('[data-openSideBar]');

const decrementBtn = document.querySelector('[data-decrementBtn]');
const quantity = document.querySelector('[data-quantity]');
const incrementBtn = document.querySelector('[data-incrementBtn]');

const price = document.querySelector('[data-price]');
const discount = document.querySelector('[data-discount]');

const cartQuantity = document.querySelector('[data-cartQuantity]');
const cartPrice = document.querySelector('[data-cartPrice]');
const totalItems = document.querySelector('[data-totalItems]');

const selectProduct = document.querySelector('[data-selectProduct]');
const noSelection = document.querySelector('[data-noSelection]');

const addToCart = document.querySelector('[data-addToCart]');
const resetCart = document.querySelector('[data-resetCart]');

const basket = document.querySelector('[data-basket]');
const cart = document.querySelector('[data-cart]');

const checkoutBtn = document.querySelector('[data-checkout]');
const checkoutPopup = document.querySelector('[data-checkoutPopup]');
const closePopup = document.querySelector('[data-closePopup]');

const continueShopping = document.getElementById('continueShopping');


/* =========================
   VALUES
========================= */

let actualValue = quantity ? Number(quantity.innerText) : 0;
let cartItems = 0;

const productPrice = 125;
const originalPrice = 250;


/* =========================
   SIDEBAR
========================= */

if (openSideBar && sideBar) {
    openSideBar.addEventListener('click', (event) => {
        event.preventDefault();
        sideBar.classList.remove('d-none');
    });
}

if (closeSideBar && sideBar) {
    closeSideBar.addEventListener('click', (event) => {
        event.preventDefault();
        sideBar.classList.add('d-none');
    });
}


/* =========================
   UPDATE PRODUCT PRICE
========================= */

function updatePrice() {

    if (!price || !discount || !quantity) return;

    if (actualValue === 0) {
        price.innerText = `$${productPrice.toFixed(2)}`;
        discount.innerText = `$${originalPrice.toFixed(2)}`;
    } else {
        const totalPrice = actualValue * productPrice;
        const totalOriginalPrice = actualValue * originalPrice;

        price.innerText = `$${totalPrice.toFixed(2)}`;
        discount.innerText = `$${totalOriginalPrice.toFixed(2)}`;
    }

    quantity.innerText = actualValue;
}


/* =========================
   UPDATE CART DISPLAY
========================= */

function updateCartDisplay() {

    if (
        !selectProduct ||
        !noSelection ||
        !cartQuantity ||
        !cartPrice ||
        !totalItems
    ) return;

    if (cartItems > 0) {

        selectProduct.classList.remove('d-none');
        noSelection.classList.add('d-none');

        cartQuantity.innerText = cartItems;
        totalItems.innerText = cartItems;

        const total = cartItems * productPrice;
        cartPrice.innerText = `$${total.toFixed(2)}`;

    } else {

        selectProduct.classList.add('d-none');
        noSelection.classList.remove('d-none');

        cartQuantity.innerText = 0;
        totalItems.innerText = 0;
        cartPrice.innerText = '$0.00';
    }
}


/* =========================
   INCREMENT
========================= */

if (incrementBtn) {

    incrementBtn.addEventListener('click', (event) => {

        event.preventDefault();

        actualValue++;

        updatePrice();
    });
}


/* =========================
   DECREMENT
========================= */

if (decrementBtn) {

    decrementBtn.addEventListener('click', (event) => {

        event.preventDefault();

        if (actualValue > 0) {
            actualValue--;
        }

        updatePrice();
    });
}


/* =========================
   ADD TO CART
========================= */

if (addToCart) {

    addToCart.addEventListener('click', (event) => {

        event.preventDefault();

        if (actualValue === 0) {
            alert('Please select at least one item.');
            return;
        }

        cartItems = actualValue;

        updateCartDisplay();
    });
}


/* =========================
   REMOVE ITEM FROM CART
========================= */

if (resetCart) {

    resetCart.addEventListener('click', (event) => {

        event.preventDefault();

        cartItems = 0;

        updateCartDisplay();
    });
}


/* =========================
   OPEN / CLOSE CART
========================= */

if (cart && basket) {

    cart.addEventListener('click', (event) => {

        event.preventDefault();

        basket.classList.toggle('d-none');
    });
}


/* =========================
   CHECKOUT
========================= */

if (checkoutBtn) {

    checkoutBtn.addEventListener('click', (event) => {

        event.preventDefault();

        if (cartItems === 0) {

            alert('Your cart is empty!');
            return;
        }

        /* Show popup */
        if (checkoutPopup) {
            checkoutPopup.classList.remove('d-none');
        }

        /* Empty cart */
        cartItems = 0;
        actualValue = 0;

        updateCartDisplay();
        updatePrice();

        /* Close cart */
        if (basket) {
            basket.classList.add('d-none');
        }
    });
}


/* =========================
   CLOSE POPUP
========================= */

if (closePopup && checkoutPopup) {

    closePopup.addEventListener('click', (event) => {

        event.preventDefault();

        checkoutPopup.classList.add('d-none');
    });
}


/* =========================
   CONTINUE SHOPPING
========================= */

if (continueShopping && checkoutPopup) {

    continueShopping.addEventListener('click', (event) => {

        event.preventDefault();

        checkoutPopup.classList.add('d-none');
    });
}


/* =========================
   PRODUCT IMAGE GALLERY
========================= */

const imageThumbnail = document.querySelectorAll(
    '[data-imageThumbnail]'
);

const banner = document.querySelector('[data-banner]');

const bannerGallery = [
    { src: './images/image-product-1.jpg' },
    { src: './images/image-product-2.jpg' },
    { src: './images/image-product-3.jpg' },
    { src: './images/image-product-4.jpg' }
];


if (imageThumbnail.length > 0 && banner) {

    imageThumbnail.forEach((thumbnail, index) => {

        thumbnail.addEventListener('click', () => {

            banner.src = bannerGallery[index].src;

            banner.alt = `Product image ${index + 1}`;
        });
    });
}


/* =========================
   INITIAL STATE
========================= */

updatePrice();
updateCartDisplay();
