function photographerPriceFactory(data) {

    const name = data.name;
    const id = data.id;
    const city = data.city;
    const country = data.country;
    const tagline = data.tagline;
    const price = data.price;
    const portrait = data.portrait;
    
    


    function photographerPrice() {

        if(id == idUrl){

        const span = document.createElement( 'span' );
        span.classList.add('photographer__price');
        
        let card_photographer =
        `
            <p class="photographer__infos__price">${price}€/jour</p>
        `
        
        span.innerHTML = card_photographer
       
        
        return span;
        
        }else if (id != idUrl) {
            //console.log("Erreur display profil", id)
            
            

        }

    }
    return { photographerPrice }
}