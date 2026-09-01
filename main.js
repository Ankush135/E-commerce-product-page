// ==========================================
// MOBILE SIDEBAR
// ==========================================

const sideBar = document.querySelector('[data-sideBar]');
const openSideBar = document.querySelector('[data-openSideBar]');
const closeSideBar = document.querySelector('[data-closeSideBar]');

if (openSideBar && sideBar) {

    openSideBar.addEventListener('click', () => {

        sideBar.classList.remove('d-none');

    });

}


if (closeSideBar && sideBar) {

    closeSideBar.addEventListener('click', () => {

        sideBar.classList.add('d-none');

    });

}


// ==========================================
// PRODUCT QUANTITY
// ==========================================

const decrementBtn = document.querySelector('[data-decrementBtn]');
const incrementBtn = document.querySelector('[data-incrementBtn]');
const quantity = document.querySelector('[data-quantity]');

let actualValue = 0;


incrementBtn.addEventListener('click', () => {

    actualValue++;

    quantity.innerText = actualValue;

});


decrementBtn.addEventListener('click', () => {

    if (actualValue > 0) {

        actualValue--;

    }

    quantity.innerText = actualValue;

});


// ==========================================
// CART ELEMENTS
// ==========================================

const addToCart = document.querySelector('[data-addToCart]');
const totalItems = document.querySelector('[data-totalItems]');

const cartQuantity = document.querySelector('[data-cartQuantity]');
const cartPrice = document.querySelector('[data-cartPrice]');

const selectProduct = document.querySelector('[data-selectProduct]');
const noSelection = document.querySelector('[data-noSelection]');

const basket = document.querySelector('[data-basket]');
const cart = document.querySelector('[data-cart]');

const resetCart = document.querySelector('[data-resetCart]');


// ==========================================
// ADD TO CART
// ==========================================

addToCart.addEventListener('click', () => {

    if (actualValue <= 0) {

        return;

    }


    // Update cart quantity
    cartQuantity.innerText = actualValue;


    // Calculate total price
    const totalPrice = actualValue * 125;

    cartPrice.innerText = `$${totalPrice}.00`;


    // Update cart notification number
    totalItems.innerText = actualValue;


    // Show product
    selectProduct.classList.remove('d-none');

    // Hide empty message
    noSelection.classList.add('d-none');

});


// ==========================================
// OPEN / CLOSE CART
// ==========================================

cart.addEventListener('click', () => {

    basket.classList.toggle('d-none');

});


// ==========================================
// DELETE / RESET CART
// ==========================================

resetCart.addEventListener('click', () => {

    // Reset quantity
    actualValue = 0;

    quantity.innerText = 0;


    // Reset cart number
    totalItems.innerText = 0;


    // Reset cart quantity
    cartQuantity.innerText = 0;


    // Reset cart price
    cartPrice.innerText = '$0.00';


    // Hide selected product
    selectProduct.classList.add('d-none');


    // Show empty cart message
    noSelection.classList.remove('d-none');

});


// ==========================================
// PRODUCT IMAGE GALLERY
// ==========================================

const imageThumbnail = document.querySelectorAll(
    '[data-imageThumbnail]'
);

const banner = document.querySelector(
    '[data-banner]'
);


const bannerGallery = [

    './images/image-product-1.jpg',

    './images/image-product-2.jpg',

    './images/image-product-3.jpg',

    './images/image-product-4.jpg'

];


// Change main image when thumbnail is clicked

imageThumbnail.forEach((thumbnail, index) => {

    thumbnail.addEventListener('click', () => {

        banner.src = bannerGallery[index];

        banner.alt = `image product ${index + 1}`;

    });

});


// ==========================================
// PRELOAD PRODUCT IMAGES
// ==========================================

bannerGallery.forEach((imageSource) => {

    const image = new Image();

    image.src = imageSource;

});
