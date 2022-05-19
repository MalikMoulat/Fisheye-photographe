function photographerFactory(data) {
    const { name, portrait, city, tagline } = data;

    const picture = `assets/photographers/Sample Photos/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = city;
        const p = document.createElement( 'p' );
        p.textContent = tagline;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}