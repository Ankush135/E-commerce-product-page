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

const checkoutBtn = document.querySelector('.checkout');


/* ===============================
   SIDEBAR
================================ */

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


/* ===============================
   QUANTITY
================================ */

function updateQuantity() {
    quantity.innerText = actualValue;
}


/* ===============================
   PRICE CALCULATOR
================================ */

function priceCalculator() {
    if (actualValue === 0) {
        price.innerText = '$125.00';
        discount.innerText = '$250.00';
    } else {
        const totalPrice = actualValue * 125;
        const originalPrice = actualValue * 250;

        price.innerText = `$${totalPrice.toFixed(2)}`;
        discount.innerText = `$${originalPrice.toFixed(2)}`;

        cartPrice.innerText = `$${totalPrice.toFixed(2)}`;
    }
}


/* ===============================
   INCREMENT
================================ */

incrementBtn.addEventListener('click', (event) => {
    event.preventDefault();

    actualValue++;

    updateQuantity();
    priceCalculator();
});


/* ===============================
   DECREMENT
================================ */

decrementBtn.addEventListener('click', (event) => {
    event.preventDefault();

    if (actualValue > 0) {
        actualValue--;
    }

    updateQuantity();
    priceCalculator();
});


/* ===============================
   ADD TO CART
================================ */

addToCart.addEventListener('click', (event) => {
    event.preventDefault();

    if (actualValue === 0) {
        showMessage('Please select at least one item.');
        return;
    }

    totalItems.innerText = actualValue;
    cartQuantity.innerText = actualValue;

    selectProduct.classList.remove('d-none');
    noSelection.classList.add('d-none');

    priceCalculator();

    showMessage('Item added to your cart!');
});


/* ===============================
   DELETE / RESET CART
================================ */

resetCart.addEventListener('click', (event) => {
    event.preventDefault();

    actualValue = 0;

    updateQuantity();

    totalItems.innerText = '0';
    cartQuantity.innerText = '0';

    selectProduct.classList.add('d-none');
    noSelection.classList.remove('d-none');

    price.innerText = '$125.00';
    discount.innerText = '$250.00';
    cartPrice.innerText = '$0.00';

    showMessage('Item removed from your cart.');
});


/* ===============================
   CART OPEN / CLOSE
================================ */

cart.addEventListener('click', (event) => {
    event.preventDefault();

    basket.classList.toggle('d-none');
});


/* ===============================
   CHECKOUT
================================ */

if (checkoutBtn) {
    checkoutBtn.addEventListener('click', (event) => {
        event.preventDefault();

        if (actualValue === 0) {
            showMessage('Your cart is empty!');
            return;
        }

        showMessage('🎉 Purchase successful! Thank you for your order.');

        // Clear cart after successful checkout
        actualValue = 0;

        updateQuantity();

        totalItems.innerText = '0';
        cartQuantity.innerText = '0';

        selectProduct.classList.add('d-none');
        noSelection.classList.remove('d-none');

        price.innerText = '$125.00';
        discount.innerText = '$250.00';
        cartPrice.innerText = '$0.00';

        // Close cart after checkout
        setTimeout(() => {
            basket.classList.add('d-none');
        }, 1500);
    });
}


/* ===============================
   SUCCESS MESSAGE / POPUP
================================ */

function showMessage(message) {
    const oldMessage = document.querySelector('.custom-message');

    if (oldMessage) {
        oldMessage.remove();
    }

    const messageBox = document.createElement('div');

    messageBox.className = 'custom-message';
    messageBox.innerText = message;

    messageBox.style.position = 'fixed';
    messageBox.style.top = '30px';
    messageBox.style.left = '50%';
    messageBox.style.transform = 'translateX(-50%)';
    messageBox.style.background = '#ff7d1a';
    messageBox.style.color = 'white';
    messageBox.style.padding = '15px 25px';
    messageBox.style.borderRadius = '8px';
    messageBox.style.fontWeight = 'bold';
    messageBox.style.zIndex = '9999';
    messageBox.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';

    document.body.appendChild(messageBox);

    setTimeout(() => {
        messageBox.remove();
    }, 2500);
}


/* ===============================
   PRODUCT IMAGE GALLERY
================================ */

const imageThumbnail = document.querySelectorAll('[data-imageThumbnail]');
const banner = document.querySelector('[data-banner]');

const bannerGallery = [
    { src: './images/image-product-1.jpg' },
    { src: './images/image-product-2.jpg' },
    { src: './images/image-product-3.jpg' },
    { src: './images/image-product-4.jpg' }
];


const preloadImages = (images) => {
    images.forEach((image) => {
        const img = new Image();
        img.src = image.src;
    });
};

preloadImages(bannerGallery);


imageThumbnail.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        const image = index + 1;

        banner.src = bannerGallery[index].src;
        banner.alt = `image product ${image}`;
    });
});
