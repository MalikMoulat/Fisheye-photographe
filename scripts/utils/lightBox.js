function closeLightBox () {
    const lightBox = document.getElementById('lightbox')
    lightBox.style.display = 'none'
    lightBox.setAttribute('aria-hidden', 'true')

    const main = document.getElementById('main')
    main.setAttribute('aria-hidden', 'false')
    main.style.display = 'block'

    const headerLogo = document.getElementById('logo')
    headerLogo.setAttribute('aria-hiden', 'false')
    headerLogo.style.display = 'block'
}

function openLightbox (index, title) {
    //
    const main = document.getElementById('main')
    main.setAttribute('aria-hidden', 'true')
    main.style.display = 'none'

    const headerLogo = document.getElementById('logo')
    headerLogo.setAttribute('aria-hiden', 'true')
    headerLogo.style.display = 'none'

    // Obtient le nombre total de photos
    const totalPhoto = document.querySelectorAll('.photo').length

    console.log('LIGTH BOX', totalPhoto)

    // Récupère la photo lié à lindex
    const photos = document.getElementById(index)

    // Obtient la source de l'image
    const photosSrc = photos.getElementsByClassName('src__photo')[0].getAttribute('src')

    // Obtient le type de l'image
    const photoType = photosSrc.split('.').pop()

    console.log('PHOTO TYPR', photosSrc)

    let photoFormat = ''
    if (photoType === 'jpg' || photoType === 'jpeg' || photoType == 'gif' || photoType === 'png') {
        photoFormat = 'image'
    } else if (photoType === 'mp4' || photoType === 'mkv' || photoType === 'avi') {
        photoFormat = 'video'
    }

    // Récupère l'id de la photo
    const idPhoto = index

    // Affiche la lightbox
    document.getElementById('lightbox').style.display = 'block'

    // Gère l'affichage des flèches
    if (idPhoto === 1) {
    document.getElementById('fleche-gauche').style.display = 'none'
    document.getElementById('fleche-droite').style.display = 'block'
    // Change les index des flèches
    document.getElementById('fleche-gauche').setAttribute('onclick', '')
    document.getElementById('fleche-droite').setAttribute('onclick', 'flecheDroite(' + (idPhoto + 1) + ')')
    } else if (idPhoto === totalPhoto) {
    document.getElementById('fleche-gauche').style.display = 'block'
    document.getElementById('fleche-droite').style.display = 'none'
    // Change les index des flèches
    document.getElementById('fleche-gauche').setAttribute('onclick', 'flecheGauche(' + (idPhoto - 1) + ')')
    document.getElementById('fleche-droite').setAttribute('onclick', '')
    } else {
    document.getElementById('fleche-gauche').style.display = 'block'
    document.getElementById('fleche-droite').style.display = 'block'
    // Change les index des flèches
    document.getElementById('fleche-gauche').setAttribute('onclick', 'flecheGauche(' + (idPhoto - 1) + ')')
    document.getElementById('fleche-droite').setAttribute('onclick', 'flecheDroite(' + (idPhoto + 1) + ')')
    }

    // Affiche la photo
    if (photoFormat === 'image') {
    document.getElementById('contenu__photo__lightbox').innerHTML = '<img alt="' + title + '" src=' + photosSrc + '>'
    } else {
    document.getElementById('contenu__photo__lightbox').innerHTML = '<video title="' + title + '" controls><source src=' + photosSrc + '>'
    }

    // Affiche le titre
    document.getElementById('title__photo__lightbox').innerHTML = title

    // Gére les flèches du clavier
    document.onkeydown = function (event) {
        // Si la Lightbox est ouverte
        if (document.getElementById('lightbox').style.display === 'block') {
            switch (event.key) {
                case 'ArrowLeft':
                    flecheGauche(idPhoto - 1)
                    break
                case 'ArrowRight':
                    flecheDroite(idPhoto + 1)
                    break
                case 'Escape':
                    closeLightBox()
                    break
                default:
                    break
            }
        }
    }

    console.log('SRC PHOTO', photosSrc)
    console.log('PHOTO TYPE', photoType)
    console.log('ID PHOTO', index)
    console.log('TITLE', title)
}

// Gère la flèche gauche
function flecheGauche (index) {
    const titreAvant = document.getElementsByClassName('photo')[index - 1].getElementsByClassName('photo__title')[0].innerHTML
    openLightbox(index, titreAvant)
}

// Gère la flèche droite
function flecheDroite (index) {
    const totalPhoto = document.querySelectorAll('.photo').length
    if (index === (totalPhoto)) {
        let titreApres = Array.from(document.querySelectorAll('.photo')).pop()
        titreApres = titreApres.getElementsByClassName('photo__title')[0].innerHTML
        openLightbox(index, titreApres)
    } else {
        const titreApres = document.getElementsByClassName('photo')[index - 1].getElementsByClassName('photo__title')[0].innerHTML
        openLightbox(index, titreApres)
    }
}
