// photgrapher page
// eslint-disable-next-line no-unused-vars
function photographerFactoryMedia (data) {
    const { id, photographerId, title, image, video, likes, date } = data

    const getThumbnail = () => {
        if (image) {
            return `<img class='photo__img src__photo' src='assets/photographers/Sample_Photos/${idUrl}/${image}' alt='Nom de la photo: ${title}'>`
        }
        if (video) {
            return `<video class='photo__img' aria-label='${this.title}'>
                        <source class='src__photo' src='assets/photographers/Sample_Photos/${idUrl}/${video}' type='video/mp4'>
                        
                    </video>`
        }
        return '<p>Aucun média n\'a été trouvé</p>'
    }

    const DisplayImgVideo = getThumbnail()

    function getUserCardDOM () {
            if (photographerId == idUrl) {
                const article = document.createElement('article')
                article.classList.add('photo__post')
                article.setAttribute('data-likes', likes)
                article.setAttribute('data-date', date)
                article.setAttribute('data-title', title)
                article.setAttribute('class', 'photo')

                const indexPhoto = document.querySelectorAll('.photo__img').length + 1
                article.setAttribute('id', `${indexPhoto}`)

                const displayPhotoAndVideo =
                `<a class='photographer__profil' href='#' aria-label='${title}' onclick='openLightbox(${indexPhoto}, "${title}")'>
                    
                    ${DisplayImgVideo}
                </a>    
                <footer class='photo__infos'>
                    <h2 class='photo__title'>${title}</h2>
                    <span aria-label='likes' class='photo__likes like__${id}'>
                        <span id='like__${id}' class='photo__like' aria-label="nombre de j'aimes ${likes}">${likes}</span>
                        <i class='fas fa-heart like__heart__${id} like-button' id='${id}' aria-label='likes' role='button' tabindex='0' onclick='likeArticle(${id}, "like")'></i>
                    </span>
                </footer>
                `

                article.innerHTML = displayPhotoAndVideo

                return article
            }
    }
    return { getUserCardDOM }
}
