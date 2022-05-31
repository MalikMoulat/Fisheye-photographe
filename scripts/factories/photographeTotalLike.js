const TotalLikes = [];




function photographerTotalLikesFactory(data) {

    const photographerId = data.photographerId;
    const likes = data.likes;
    

    //console.log("LIKE", data.likes)

    
    function toootoototal() {
    
            if(photographerId == idUrl){
                
                
                TotalLikes.push(likes);
            
                const initialValue = 0;
                const sumWithInitial = TotalLikes.reduce(
                (previousValue, currentValue) => previousValue + currentValue,
                initialValue
                );

                //console.log("OOKI", sumWithInitial);
                    
                
                return TotalLikes;
                //return sumWithInitial;
                 
            
            }else{
                return 'non';
            }
        
    }

    let TOTALTOTAL = toootoototal();

    const initialValue = 0;
    const sumWithInitial = TotalLikes.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
                );

    //console.log("TOTALTOTAL", TOTALTOTAL);

    

    












    function photographerTotalLike() {

        if(photographerId == idUrl){
            

            const span = document.createElement( 'span' );
            span.classList.add('photographer__total__like');
            //console.log("like", likes)
            
            let card_photographer =
            `
                <p class="photographer__infos__price">${likes}</p>
                <i class="fas fa-heart"></i>
            `
            
            span.innerHTML = card_photographer
        
            
            return span;
        
        }else if (photographerId != idUrl) {
            //console.log("Erreur display profil", id)
            
            

        }

    }
    return { photographerTotalLike }
}