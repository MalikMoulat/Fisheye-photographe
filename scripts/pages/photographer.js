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
        displayPricePhotographer(photographers);
    }
    
    initPhotographerPrice();


  










    /******** TOTALE LIKE */

  function totaleLikes(){

    let likesDom = document.getElementsByClassName('photo__like');

    console.log("LIKE DOME", likesDom);






  }


  totaleLikes();





  /********** Système LIKE */

function likeArticle(id, type) {

    // Récupère les éléments du DOM
    let nbLike = document.getElementById("like__" + id).innerHTML;
    nbLike = parseInt(nbLike);

    let nbLikeTotal = document.getElementById('photographer__infos__likes').innerHTML;
    nbLikeTotal = parseInt(nbLikeTotal);



    let TEST = document.getElementsByClassName("like__heart__" + id)[0].style.color = "#db8876";

    console.log("TEST", TEST);



    console.log("NBLike", nbLike);
    console.log("NBTotAL", nbLikeTotal);

    // Gère le like
    if (type == "like") {

        nbLike = nbLike + 1;
        nbLikeTotal = nbLikeTotal + 1;
        //document.getElementsByClassName("Like__" + id)[0].getElementsByClassName("like__heart")[0].style.color = "#db8876";
        document.getElementsByClassName("like__heart__" + id)[0].style.color = "#db8876";

        //Change la fonction
        //document.getElementsByClassName("like__" + id)[0].getElementsByClassName("like__heart")[0].setAttribute("onclick", "likeArticle('" + id + "', 'unlike')");
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


