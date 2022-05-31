function closeLightBox() {
    const lightBox = document.getElementById("lightbox");
    lightBox.style.display = "none";
    lightBox.setAttribute('aria-hidden', 'true');

    //document.getElementsByClassName("close__lightbox").focus();

    const main = document.getElementById("main");
    main.setAttribute('aria-hidden', 'false');
}




function openLightbox(index, title){

    // Obtient le nombre total de photos
    let totalPhoto = document.querySelectorAll('.photo').length;

    // Récupère la photo lié à lindex
    let photos = document.getElementById(index);

    // Obtient la source de l'image
    let photosSrc = photos.getElementsByClassName("src__photo")[0].getAttribute("src");

    // Obtient le type de l'image
    let photoType = photosSrc.split('.').pop();
    let photoFormat = "";
    if (photoType === "jpg" || photoType === "jpeg" || photoType == "gif" || photoType === "png") {
        photoFormat = "image";
    } else if (photoType === "mp4" || photoType === "mkv" || photoType === "avi") {
        photoFormat = "video";
    }

    // Récupère l'id de la photo
    let idPhoto = index;

    // Affiche la lightbox
    document.getElementById("lightbox").style.display = "block";

    // Gère l'affichage des flèches 
    if (idPhoto === 1) {
        document.getElementById("fleche-gauche").style.display = "none";
        document.getElementById("fleche-droite").style.display = "block";
        // Change les index des flèches 
        document.getElementById("fleche-gauche").setAttribute("onclick", "");
        document.getElementById("fleche-droite").setAttribute("onclick", "flecheDroite(" + (idPhoto + 1) + ")");
    } else if (idPhoto === totalPhoto) {
        document.getElementById("fleche-gauche").style.display = "block";
        document.getElementById("fleche-droite").style.display = "none";
        // Change les index des flèches 
        document.getElementById("fleche-gauche").setAttribute("onclick", "flecheGauche(" + (idPhoto - 1) + ")");
        document.getElementById("fleche-droite").setAttribute("onclick", "");
    } else {
        document.getElementById("fleche-gauche").style.display = "block";
        document.getElementById("fleche-droite").style.display = "block";
        // Change les index des flèches 
        document.getElementById("fleche-gauche").setAttribute("onclick", "flecheGauche(" + (idPhoto - 1) + ")");
        document.getElementById("fleche-droite").setAttribute("onclick", "flecheDroite(" + (idPhoto + 1) + ")");
    }

    // Affiche la photo
    if (photoFormat === "image") {
        document.getElementById("contenu__photo__lightbox").innerHTML = "<img alt='" + title + "' id='photo-lightbox' src=" + photosSrc + ">";
    } else {
        document.getElementById("contenu__photo__lightbox").innerHTML = "<video title='" + title + "' id='photo-lightbox' controls><source src=" + photosSrc + ">";
    }

    // Affiche le titre 
    document.getElementById("title__photo__ightbox").innerHTML = title;



    
    console.log("SRC PHOTO", photosSrc);
    console.log("PHOTO TYPE", photoType);
    console.log('ID PHOTO', index);
}


// Gère la flèche gauche 
function flecheGauche(index) {
    let titreAvant = document.getElementsByClassName("photo")[index-1].getElementsByClassName("title__photo__ightbox")[0];
    openLightbox(index, titreAvant);
}


// Gère la flèche droite
function flecheDroite(index) {
    let totalPhoto = document.querySelectorAll(".photo").length;
    if (index === (totalPhoto)) {
        let titreApres = Array.from(document.querySelectorAll('.photo')).pop();
        titreApres = titreApres.getElementsByClassName("title__photo__ightbox")[0];
        openLightbox(index, titreApres);
    } else {
        let titreApres = document.getElementsByClassName("photo")[index-1].getElementsByClassName("title__photo__ightbox")[0];
        openLightbox(index, titreApres);
    }
}