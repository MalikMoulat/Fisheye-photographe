// eslint-disable-next-line no-unused-vars
function photographerPriceFactory (data) {
    const { id, price } = data

    function photographerPrice () {
        if (id == idUrl) {
            const span = document.createElement('span')
            span.classList.add('photographer__price')
            const photographerPriceFooter = `<span class='photographer__infos__price'>${price}€/jour</span>`

            span.innerHTML = photographerPriceFooter
            return span
        }
    }
    return { photographerPrice }
}
