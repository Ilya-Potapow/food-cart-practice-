const cartHTML = document.querySelector('.cart-wrapper');

window.addEventListener('click', function (event) {

    if (event.target.hasAttribute('data-cart')) {
        const card = event.target.closest('.card');

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInbox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            amount: card.querySelector('[data-counter]').innerText
        }
        const itemInCart = cartHTML.querySelector(`[data-id="${productInfo.id}"]`);

        if (itemInCart) {
            const counterInCart = itemInCart.querySelector('[data-counter]');
            counterInCart.innerText = parseInt(counterInCart.innerText) + parseInt(productInfo.amount);
        } else {
            const cartItemHTML = `
            <div class="cart-item" data-id="${productInfo.id}">
                <div class="cart-item__top">
                    <div class="cart-item__img">
                        <img src="${productInfo.imgSrc}" alt="">
                    </div>
                    <div class="cart-item__desc">
                        <div class="cart-item__title">${productInfo.title}</div>
                        <div class="cart-item__weight">${productInfo.itemsInbox} / ${productInfo.weight}</div>

                        <!-- cart-item__details -->
                        <div class="cart-item__details">

                            <div class="items items--small counter-wrapper">
                                <div class="items__control" data-action="minus">-</div>
                                <div class="items__current" data-counter="">${productInfo.amount}</div>
                                <div class="items__control" data-action="plus">+</div>
                            </div>

                            <div class="price">
                                <div class="price__currency">${productInfo.price}</div>
                            </div>

                        </div>
                        <!-- // cart-item__details -->

                    </div>
                </div>
            </div>
                                `
            cartHTML.insertAdjacentHTML('beforeend', cartItemHTML);
        };

        card.querySelector('[data-counter]').innerText = '1' 
        cartStatus();
        calcCostAndDelivery();
    }
})