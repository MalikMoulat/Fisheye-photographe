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
    const nom = document.getElementById('form-nom').value
    const prenom = document.getElementById('form-prenom').value
    const email = document.getElementById('form-email').value
    const message = document.getElementById('form-message').value

    event.preventDefault()

    console.log('NOM :', nom)
    console.log('PRENOM :', prenom)
    console.log('ADRESSE EMAIL :', email)
    console.log('MESSAGE :', message)
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
