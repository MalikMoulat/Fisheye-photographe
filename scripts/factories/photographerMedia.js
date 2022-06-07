//photgrapher page
function photographerFactoryMedia(data) {

    const id = data.id;
    const photographerId = data.photographerId;
    const title = data.title;
    const image = data.image;
    const video = data.video;
    const likes = data.likes;
    const date = data.date;
    

    

    let getThumbnail = () => {
        if (image) {
            return `<img class="photo__img src__photo" src="assets/photographers/Sample_Photos/${idUrl}/${image}" alt="Nom de la photo: ${title}">`
        }
        
        if (video){
            return `<video class="photo__img" aria-label="${this.title}" controls="controls">
                        <source class="src__photo" src="assets/photographers/Sample_Photos/${idUrl}/${video}" type="video/mp4">
                        
                    </video>`
        }

        return "<p>Aucun média n'a été trouvé</p>"
    }

    const DisplayImgVideo = getThumbnail();


    
    function getUserCardDOM() {

        
            if(photographerId == idUrl){

                const article = document.createElement( 'article' );
                article.classList.add('photo__post');
                article.setAttribute('data-likes', likes);
                article.setAttribute('data-date', date);
                article.setAttribute('data-title', title);
                article.setAttribute('class', 'photo');


                let indexPhoto = document.querySelectorAll(".photo__img").length + 1;
                article.setAttribute("id", `${indexPhoto}`);
                
                let card_photographer =
                `<a id="${id}" class="photographer__profil" href="#" aria-label="${title}" onclick="openLightbox(${indexPhoto}, '${title}')">
                    
                    ${DisplayImgVideo}
                </a>    
                <footer class="photo__infos">
                    <h2 class="photo__title">${title}</h2>
                    <span class="photo__likes like__${id}">
                        <span id="like__${id}" class="photo__like">${likes}</span>
                        <i class="fas fa-heart like__heart__${id}" onclick="likeArticle(${id}, 'like')"></i>
                    </span>
                </footer>
                `
                
                article.innerHTML = card_photographer
               
                
                return article;
            }

    }
    return { getUserCardDOM }
}


