function photographerPriceFactory(data) {

  
    const id = data.id;
  
   
  
    const price = data.price;
   
    
    


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