
function cartStatus() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartBage = document.querySelector('[data-cart-empty]');
    const cartOrderForm = document.querySelector('#order-form')

    if (cartWrapper.children.length > 0) {
        cartBage.classList.add('none');
        cartOrderForm.classList.remove('none');

    } else {
        cartBage.classList.remove('none');
        cartOrderForm.classList.add('none');
    }

}

