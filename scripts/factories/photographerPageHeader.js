function photographerFactoryHeaderProfil(data) {

    let name = data.name;
    let id = data.id;
    let city = data.city;
    let country = data.country;
    let tagline = data.tagline;
    let portrait = data.portrait;

    
    const picture = `assets/photographers/Sample_Photos/Photographers_ID_Photos/${portrait}`;



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

        <button class="contact_button" alt="Contact me" onclick="displayModal()">Contactez-moi</button>

        <img id="${id}" class="photographer__profil__img" src="${picture}" alt="${name}">
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


