function photographerFactory(data) {

    this.name = data.name;
    this.id = data.id;
    this.city = data.city;
    this.country = data.country;
    this.tagline = data.tagline;
    this.price = data.price;
    this.portrait = data.portrait;
    
    

    const picture = `assets/photographers/Sample Photos/Photographers ID Photos/${portrait}`;


    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.classList.add('photographersCard');
        
        let card_photographer =
        `<a id="${id}" class="photographer__profil" href="photographer.html?id=${id}" aria-label="${name}">
            <img class="photographer__profil__img" src="${picture}" alt="${name}">
            <h2 class="photographer__profil__name">${name}</h2>
        </a>
        <div class="photographer__infos">
            <p class="photographer__infos__city">${city}, ${country}</p>
            <p class="photographer__infos__tagline">${tagline}</p>
            <p class="photographer__infos__price">${price}€/jour</p>
        </div>`
        
        article.innerHTML = card_photographer
       
        
        return article;
        


    }
    return { getUserCardDOM }
}