//Mettre le code JavaScript lié à la page photographer.html


// Récupération des données Média du fichier JSON

async function getMediaJSON() {
    return fetch('../data/photographers.json')
        .then(res => res.json())
        .then(res => res.media)
        .catch(err => console.log('erreur', err))
}


//Récupération de L'id dans l'url

var str = window.location.href;
var url = new URL(str);
var idUrl = url.searchParams.get("id");
console.log("id", idUrl);

/************************* Affiche le profil du photographe header */


async function displayHeaderPhotographer(photographers) {
    const photographersSection = document.querySelector(".photograph-header");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactoryHeaderProfil(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        try {
            photographersSection.appendChild(userCardDOM);
            }catch{
                
            }
    });
}

    async function initPhotographerHedaer() {
        const photographers = await getPhotographesJSON(); // Récupère les datas de media
        console.log("Photographe", photographers);
        displayHeaderPhotographer(photographers);
    }
    
    initPhotographerHedaer();









/************************* Affiche les photos  */

async function displayDataMedia(photographers) {
    const photographersSection = document.querySelector(".photograph-photo");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactoryMedia(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        try {
        photographersSection.appendChild(userCardDOM);
        }catch{
            
        }
       
    });
}


async function initMedia() {
    const photographers = await getMediaJSON(); // Récupère les datas de media
    console.log("Media", photographers);
    displayDataMedia(photographers);
}

initMedia();






/******************************** Affiche le prix du photographe */


async function displayPricePhotographer(photographers) {
    const photographersSection = document.querySelector(".profil__likes__tarif");

    photographers.forEach((photographer) => {
        const photographerModel = photographerPriceFactory(photographer);
        const userCardDOM = photographerModel.photographerPrice();
        try {
            photographersSection.appendChild(userCardDOM);
            }catch{
                
            }
    });
}

    async function initPhotographerPrice() {
        const photographers = await getPhotographesJSON(); // Récupère les datas de Photographe
        console.log("Photographe", photographers);
        displayPricePhotographer(photographers);
    }
    
    initPhotographerPrice();