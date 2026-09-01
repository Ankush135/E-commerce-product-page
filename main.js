const sideBar = document.querySelector('[data-sideBar]');
const closeSideBar = document.querySelector('[data-closeSideBar]');
const openSideBar = document.querySelector('[data-openSideBar]');

const decrementBtn = document.querySelector('[data-decrementBtn]');
const quantity = document.querySelector('[data-quantity]');
const incrementBtn = document.querySelector('[data-incrementBtn]');

let actualValue = Number(quantity.innerText);

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
   UPDATE CART
========================= */

function updateCart() {
    if (actualValue > 0) {
        selectProduct.classList.remove('d-none');
        noSelection.classList.add('d-none');
    } else {
        selectProduct.classList.add('d-none');
        noSelection.classList.remove('d-none');
    }
}


/* =========================
   UPDATE PRICE
========================= */

function priceCalculator() {
    if (actualValue === 0) {
        price.innerText = '$125.00';
        discount.innerText = '$250.00';
        cartPrice.innerText = '$0.00';
    } else {
        const totalPrice = actualValue * 125;
        const originalPrice = actualValue * 250;

        price.innerText = `$${totalPrice.toFixed(2)}`;
        discount.innerText = `$${originalPrice.toFixed(2)}`;
        cartPrice.innerText = `$${totalPrice.toFixed(2)}`;
    }

    updateCart();
}


/* =========================
   INCREMENT
========================= */

incrementBtn.addEventListener('click', (event) => {
    event.preventDefault();

    actualValue++;

    quantity.innerText = actualValue;
    priceCalculator();
});


/* =========================
   DECREMENT
========================= */

decrementBtn.addEventListener('click', (event) => {
    event.preventDefault();

    if (actualValue > 0) {
        actualValue--;
    }

    quantity.innerText = actualValue;
    priceCalculator();
});


/* =========================
   ADD TO CART
========================= */

addToCart.addEventListener('click', (event) => {
    event.preventDefault();

    if (actualValue === 0) {
        alert('Please select at least one item.');
        return;
    }

    totalItems.innerText = actualValue;
    cartQuantity.innerText = actualValue;

    selectProduct.classList.remove('d-none');
    noSelection.classList.add('d-none');

    priceCalculator();
});


/* =========================
   RESET CART
========================= */

resetCart.addEventListener('click', (event) => {
    event.preventDefault();

    actualValue = 0;

    quantity.innerText = 0;
    cartQuantity.innerText = 0;
    totalItems.innerText = 0;

    price.innerText = '$125.00';
    discount.innerText = '$250.00';
    cartPrice.innerText = '$0.00';

    selectProduct.classList.add('d-none');
    noSelection.classList.remove('d-none');
});


/* =========================
   OPEN / CLOSE CART
========================= */

cart.addEventListener('click', (event) => {
    event.preventDefault();

    basket.classList.toggle('d-none');
});


/* =========================
   CHECKOUT
========================= */

if (checkoutBtn) {
    checkoutBtn.addEventListener('click', (event) => {
        event.preventDefault();

        if (actualValue === 0) {
            alert('Your cart is empty!');
            return;
        }

        // Show success popup
        checkoutPopup.classList.remove('d-none');

        // Reset everything after purchase
        actualValue = 0;

        quantity.innerText = 0;
        cartQuantity.innerText = 0;
        totalItems.innerText = 0;

        price.innerText = '$125.00';
        discount.innerText = '$250.00';
        cartPrice.innerText = '$0.00';

        selectProduct.classList.add('d-none');
        noSelection.classList.remove('d-none');

        // Close the cart
        basket.classList.add('d-none');
    });
}


/* =========================
   CLOSE SUCCESS POPUP
========================= */

if (closePopup) {
    closePopup.addEventListener('click', () => {
        checkoutPopup.classList.add('d-none');
    });
}


/* =========================
   PRODUCT IMAGE GALLERY
========================= */

const imageThumbnail = document.querySelectorAll('[data-imageThumbnail]');
const banner = document.querySelector('[data-banner]');

const bannerGallery = [
    { src: './images/image-product-1.jpg' },
    { src: './images/image-product-2.jpg' },
    { src: './images/image-product-3.jpg' },
    { src: './images/image-product-4.jpg' }
];


imageThumbnail.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        banner.src = bannerGallery[index].src;
        banner.alt = `image product ${index + 1}`;
    });
});
