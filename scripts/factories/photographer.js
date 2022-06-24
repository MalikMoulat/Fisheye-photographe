// eslint-disable-next-line no-unused-vars
function photographerFactory (data) {
    const { name, id, city, country, tagline, price, portrait } = data

    const picture = `assets/photographers/Sample_Photos/Photographers_ID_Photos/${portrait}`

    function getUserCardDOM () {
        const article = document.createElement('article')
        article.classList.add('photographersCard')

        const cardPhotographer = `<a id='${id}' class='photographer__profil' href='photographer.html?id=${id}' aria-label='${name}'>
            <img class='photographer__profil__img' src='${picture}' alt='Photo de profil de ${name}'>
            <h2 class='photographer__profil__name'>${name}</h2>
        </a>
        <div class='photographer__infos'>
            <p class='photographer__infos__city'>${city}, ${country}</p>
            <p class='photographer__infos__tagline'>${tagline}</p>
            <p class='photographer__infos__price'>${price}€/jour</p>
        </div>`

        article.innerHTML = cardPhotographer

        return article
    }
    return { getUserCardDOM }
}
