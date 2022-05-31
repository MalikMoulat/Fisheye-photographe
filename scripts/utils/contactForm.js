function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    modal.setAttribute('aria-hidden', 'false');
    
    //document.getElementById("close__modal").focus();

    const main = document.getElementById("main");
    main.setAttribute('aria-hidden', 'true');
    main.style.display = "none";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', 'true');

    //document.getElementById("contact-btn").focus();

    const main = document.getElementById("main");
    main.setAttribute('aria-hidden', 'false');
    main.style.display = "block";
}
