function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    modal.setAttribute('aria-hidden', 'false');
    

    const main = document.getElementById("main");
    main.setAttribute('aria-hidden', 'true');
    main.style.display = "none";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', 'true');

    const main = document.getElementById("main");
    main.setAttribute('aria-hidden', 'false');
    main.style.display = "block";
}
