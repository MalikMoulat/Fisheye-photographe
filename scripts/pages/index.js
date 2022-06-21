// fecth photographer data json file
    async function getPhotographesJSON() {
        return fetch('../data/photographers.json')
            .then(res => res.json())
            .then(res => res.photographers)
            .catch(err => console.log('erreur', err));
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector('.photographer_section');

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            try {
                photographersSection.appendChild(userCardDOM);
            } catch {

            }
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const photographers = await getPhotographesJSON();
        console.log('photographers', photographers);
        displayData(photographers);
    }
    
    init();