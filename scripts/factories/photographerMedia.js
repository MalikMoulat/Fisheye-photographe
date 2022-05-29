//photgrapher page
function photographerFactoryMedia(data) {

    const id = data.id;
    const photographerId = data.photographerId;
    const title = data.title;
    const image = data.image;
    const video = data.video;
    const likes = data.likes;
    const date = data.date;
    const price = data.price;

    //console.log('photographe id', photographerId);
    //console.log('id url', idUrl);
    
    //console.log("NAME", name);

    getThumbnail = () => {
        if (image) {
            return `<img class="photo__img" src="assets/photographers/Sample Photos/${idUrl}/${image}" alt="Nom de la photo: ${title}">`
        }
        
        if (video){
            return `<video class="photo__img" aria-label="${this.title}" controls="controls">
                        <source src="assets/photographers/Sample Photos/${idUrl}/${video}" type="video/mp4">
                        
                    </video>`
        }

        return "<p>Aucun média n'a été trouvé</p>"
    }

    const DisplayImgVideo = getThumbnail();


    
    function getUserCardDOM() {

        
            if(photographerId == idUrl){

                const article = document.createElement( 'article' );
                article.classList.add('photo__post');
                
                let card_photographer =
                `<a id="${id}" class="photographer__profil" href="photographer.html?id=${id}" aria-label="${name}">
                    
                    ${DisplayImgVideo}
                    
                <footer class="photo__infos">
                    <h2 class="photo__title">${title}</h2>
                    <div class="photo__likes">
                        <p class="photo__like">${likes}</p>
                        <i class="fas fa-heart"></i>
                    </div>
                </footer>
                </a>`
                
                article.innerHTML = card_photographer
               
                
                return article;
            }else{
                //console.log("display photo", photographerId)
            }

    }
    return { getUserCardDOM }
}


