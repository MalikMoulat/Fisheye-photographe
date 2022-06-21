function photographerPriceFactory(data) {
    const { id, price } = data;

    function photographerPrice() {
        if (id == idUrl) {
            const span = document.createElement('span');
            span.classList.add('photographer__price');
            const card_photographer = `<span class='photographer__infos__price'>${price}€/jour</span>`;

            span.innerHTML = card_photographer;
            return span;
        }
    }
    return { photographerPrice };
}
