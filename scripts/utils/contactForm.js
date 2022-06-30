// eslint-disable-next-line no-unused-vars
function displayModal () {
    const modal = document.getElementById('contact_modal')
    modal.style.display = 'block'
    modal.setAttribute('aria-hidden', 'false')
    modal.focus()

    const main = document.getElementById('main')
    main.setAttribute('aria-hidden', 'true')
}

function closeModal () {
    const modal = document.getElementById('contact_modal')
    modal.style.display = 'none'
    modal.setAttribute('aria-hidden', 'true')

    const main = document.getElementById('main')
    main.setAttribute('aria-hidden', 'false')
}

// Valide le formulaire
// eslint-disable-next-line no-unused-vars
function validContactForm (event) {
    // Elements du DOM
    const nom = document.getElementById('form-nom')
    const prenom = document.getElementById('form-prenom')
    const email = document.getElementById('form-email')
    const message = document.getElementById('form-message')

    // Variable affichage erreur
    const prenomEr = 'prénom' // afficher dans le message d'erreur
    const errorPrenom = 'error-prenom' // ID du <p> (html) pour afficher l'rreur
    const inputPrenom = 'form-prenom' // ID de l'input

    const nomEr = 'nom' // afficher dans le message d'erreur
    const errorNom = 'error-nom' // ID du <p> (html) pour afficher l'rreur
    const inputNom = 'form-nom' // ID de l'input

    const mailEr = 'mail' // afficher dans le message d'erreur
    const errorMail = 'error-email' // ID du <p> (html) pour afficher l'rreur
    const inputMail = 'form-email' // ID de l'input

    const messageEr = 'message' // afficher dans le message d'erreur
    const errorMessage = 'error-message' // ID du <p> (html) pour afficher l'rreur
    const InputMessage = 'form-message' // ID de l'input

    // Regex
    // eslint-disable-next-line no-useless-escape
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const regexName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
    // eslint-disable-next-line no-useless-escape
    const regexMessage = /^[a-zA-Z0-9!@#,!? ;:/\$%\^\&*\)\(+=._-]+$/

    // Fonction
    /*
    name = Variable à vérifier
    errorId = id ou le message d'erreur seras affiché
    contentError = Contenue du message d'erreur
    borderRed = Id de l'input pour la modification de la couleur du border
    regex = regex a utiliser pour la vérification de la valeur de la variable
    */
    function checkValueFormMore (name, errorId, contentError, borderRed, regex) {
        if (!name.value) { // Si la valeur de la variable est vide
            error = 'Veuillez renseigner un ' + contentError + '.'
            document.getElementById(errorId).style.display = 'block'
            document.getElementById(errorId).innerHTML = error
            document.getElementById(borderRed).style.border = '3px solid red'
        } else if (name.value.length == 1 || name.value.length < 2) { // Si value.length == 1 ou < 2
            error = 'Veuillez entrer 2 caractères ou plus pour le champ du ' + contentError + '.'
            document.getElementById(errorId).style.display = 'block'
            document.getElementById(errorId).innerHTML = error
            document.getElementById(borderRed).style.border = '3px solid red'
        } else if (regex.test(name.value) !== true) { // Vérification du format de la variable
            error = 'Le format du ' + contentError + ' n\'est pas valide.'
            document.getElementById(errorId).style.display = 'block'
            document.getElementById(errorId).innerHTML = error
            document.getElementById(borderRed).style.border = '3px solid red'
        } else { // reset le style border et le message si il y a eu une première entrée avec une erreur
            document.getElementById(errorId).style.display = 'none'
            document.getElementById(errorId).innerHTML = ''
            document.getElementById(borderRed).style.border = ''
        }
    }

    // Variable erreur
    let error

    // Vérification des variables
        checkValueFormMore(prenom, errorPrenom, prenomEr, inputPrenom, regexName)
        checkValueFormMore(nom, errorNom, nomEr, inputNom, regexName)
        checkValueFormMore(email, errorMail, mailEr, inputMail, regexEmail)
        checkValueFormMore(message, errorMessage, messageEr, InputMessage, regexMessage)

    // Si la variable error est appelée le formulaire ne s'envoie pas sinon OK
        if (error) {
            event.preventDefault()
            return false
        } else {
            console.log('NOM :', nom.value)
            console.log('PRENOM :', prenom.value)
            console.log('ADRESSE EMAIL :', email.value)
            console.log('MESSAGE :', message.value)
            event.preventDefault()
            closeModal()
    }
}

// Affiche le nom du photographe dans le modal de contact
function getNameModaleCOntact () {
    const name = document.getElementsByClassName('photographer__profil__name')[0].innerHTML
    document.getElementById('name__photographer').innerHTML = name
    console.log('NAME', name)
}

setTimeout(function () {
    getNameModaleCOntact()
}, 1000)

// Ferme le modal de contact clavier (escape)
document.onkeydown = function (event) {
    // Si la modal est ouverte
    if (document.getElementById('contact_modal').style.display === 'block') {
        if (event.key === 'Escape') {
            closeModal()
        }
    }
}

// Ferme le modal de contact clavier (enter)
const closeModalBtn = document.getElementById('close__modal')

closeModalBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        closeModal()
    }
})
