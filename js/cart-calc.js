function calcCostAndDelivery() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartItems = cartWrapper.querySelectorAll('.cart-item');
    const totalCartPriceHTML = document.querySelector('.total-price');

    let totalCartPrice = 0;

    cartItems.forEach(function (item) {

        const amountEl = item.querySelector('[data-counter]').innerText;
        const priceEl = item.querySelector('.price__currency').innerText;
        const totalItemPrice = parseInt(amountEl) * parseInt(priceEl);

        totalCartPrice += totalItemPrice;

    });

    totalCartPriceHTML.innerText = totalCartPrice;

    const deliveryCostHTML = document.querySelector('.delivery-cost');
    const deliveryHTML = document.querySelector('[data-cart-delivery]');

    if (totalCartPrice > 0) {
        deliveryHTML.classList.remove('none');
    } else {
        deliveryHTML.classList.add('none');
    }

    if (totalCartPrice >= 600) {
        deliveryCostHTML.classList.add('free')
        deliveryCostHTML.innerText = 'бесплатно'

    } else {
        deliveryCostHTML.classList.remove('free')
        deliveryCostHTML.innerText = '250 ₽'
    }

}