function photographerFactoryHeaderProfil(data) {

    let name = data.name;
    let id = data.id;
    let city = data.city;
    let country = data.country;
    let tagline = data.tagline;
    let price = data.price;
    let portrait = data.portrait;

    
    const picture = `assets/photographers/Sample Photos/Photographers ID Photos/${portrait}`;



    function getUserCardDOM() {

        for (let i = 0; i < 15; i++) {
       

        if(id == idUrl){

        const article = document.createElement( 'article' );
       
        
        let card_photographer =
        `
        <div class="photographer__profil__infos">
        <h2 class="photographer__profil__name">${name}</h2>
            <p class="photographer__profil__city">${city}, ${country}</p>
            <p class="photographer__profil__tagline">${tagline}</p>
        </div>

        <button class="contact_button" onclick="displayModal()">Contactez-moi</button>

        <img id="${id}" class="photographer__profil__img" src="${picture}" alt="Photo de profil de ${name}">
        `
        
        
        article.innerHTML = card_photographer
       
        
        return article;
        
        }else if (id != idUrl) {
            //console.log("Erreur display profil", id)
            continue;
            

        }
    }

    }
    return { getUserCardDOM }
}