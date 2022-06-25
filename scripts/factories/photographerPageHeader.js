// eslint-disable-next-line no-unused-vars
function photographerFactoryHeaderProfil (data) {
    const { name, id, city, country, tagline, portrait } = data
    const picture = `assets/photographers/Sample_Photos/Photographers_ID_Photos/${portrait}`

    function getUserCardDOM () {
        if (id == idUrl) {
        const article = document.createElement('article')
        const headerPageProfil = `
        <div class='photographer__profil__infos'>
        <h2 class='photographer__profil__name'>${name}</h2>
            <p class='photographer__profil__city'>${city}, ${country}</p>
            <p class='photographer__profil__tagline'>${tagline}</p>
        </div>

        <button class='contact_button' aria-label='Contactez-moi' onclick='displayModal()'>Contactez-moi</button>

        <img id='${id}' class='photographer__profil__img' src='${picture}' alt='${name}'>
        `
        article.innerHTML = headerPageProfil
        return article
        }
    }
    return { getUserCardDOM }
}
