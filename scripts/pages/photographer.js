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






/***************************************************************** */
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
        displayHeaderPhotographer(photographers);
    }
    
    initPhotographerHedaer();








/********************************************* */
/************************* Affiche les photos  */

async function displayDataMedia(photographers) {
    const photographersSection = document.querySelector(".photograph__photo");

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
    displayDataMedia(photographers);
}

initMedia();





/*************************************************************** */
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
        displayPricePhotographer(photographers);
    }
    
    initPhotographerPrice();


  




























/*************************************************************** */
/*********************************** Système LIKE ****************/

function likeArticle(id, type) {

    // Récupère les éléments du DOM
    let nbLike = document.getElementById("like__" + id).innerHTML;
    nbLike = parseInt(nbLike);

    let nbLikeTotal = document.getElementById('photographer__infos__likes').innerHTML;
    nbLikeTotal = parseInt(nbLikeTotal);


    console.log("NBLike", nbLike);
    console.log("NBTotAL", nbLikeTotal);

    // Gère le like
    if (type == "like") {

        nbLike = nbLike + 1;
        nbLikeTotal = nbLikeTotal + 1;
        document.getElementsByClassName("like__heart__" + id)[0].style.color = "#db8876";

        //Change la fonction
        document.getElementsByClassName("like__heart__" + id)[0].setAttribute("onclick", "likeArticle('" + id + "', 'unlike')");
    }else {

        nbLike = nbLike - 1;
        nbLikeTotal = nbLikeTotal - 1;
        document.getElementsByClassName("like__heart__" + id)[0].style.color = "#901c1c";

        // Change la fonction 
        document.getElementsByClassName("like__heart__" + id)[0].setAttribute("onclick", "likeArticle('" + id + "', 'like')");
    }
    //change dans les éléments
    document.getElementById("like__" + id).innerHTML = nbLike;
    document.getElementById("photographer__infos__likes").innerHTML = nbLikeTotal;


}






/************************************************ */
/************************************ TOTALE LIKE */








function sumOfLike() {

	const likeDom = document.getElementsByClassName('photo__like'); 

    console.log("select", likeDom);

	const likeDomArray = Array.from(likeDom, e => parseFloat(e.innerText));
    
    console.log('ARRAY', likeDomArray);

	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	const sumOfLikes = likeDomArray.reduce(reducer);

    document.getElementById("photographer__infos__likes").innerHTML = sumOfLikes;
	
    return console.log("SUM LIKE", sumOfLikes);
    //return sumOfLikes;
}


setTimeout(function(){
    sumOfLike();
},100)








// Système de tri
function photoSort(choixTrier) {
    let listePhotos = document.querySelectorAll('.photo');
    let tableauTrier = [];
    for (let i = 0; i < listePhotos.length; i++) {
        tableauTrier.push(listePhotos[i]);
    }
    switch (choixTrier.value) {
        case "Popularité":
            tableauTrier.sort(function (a, b) {
                return a.dataset.likes - b.dataset.likes;
            });
            break;
        case "Date":
            tableauTrier.sort(function (a, b) {
                return a.dataset.date.localeCompare(b.dataset.date);
            });
            break;
        case "Titre":
            tableauTrier.sort(function (a, b) {
                return a.dataset.title.localeCompare(b.dataset.title);
            });
            break;
        default:
            break;
    }
    tableauTrier.forEach(function (photo, index) {
        let indexModif = index + 1;
        let titreModif = photo.dataset.titre;
        photo.setAttribute("id", indexModif);
        photo.getElementsByClassName("photographer__profil")[0].setAttribute("onclick", "openLightbox(" + `${indexModif}` + ", '" + titreModif + "')")
        document.getElementById("profil__liste__photos").append(photo);
    });
}







//get Name contact


function getNameModaleCOntact(){

    let name = document.getElementsByClassName('photographer__profil__name')[0].innerHTML;


    console.log('NAME', name);


}


setTimeout(function(){
    getNameModaleCOntact();
},1000)

