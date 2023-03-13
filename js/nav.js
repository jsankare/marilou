function navigation() {

    const navbar = document.getElementById('nav__links')
    const links = {
        index: 'Accueil',
        prestations: 'Prestations',
        //feedback: 'Avis',
        contact: 'Contact',
    };

    const ul = document.createElement('ul');
    navbar.appendChild(ul);
    for (const [link, label] of Object.entries(links)) {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.innerText = label
        a.href = `./${link}.html`
        li.appendChild(a)
        ul.appendChild(li)
    }

    const logoDiv = document.getElementById('nav__logo')
    const logoImg = document.createElement('img')
    const logoLink = document.createElement('a')
    logoLink.href = `index.html`
    logoImg.src = `images/marilou-logo-cropped.png`
    logoImg.alt = `A dog face as logo`
    logoImg.id = `nav__logo__img`
    logoLink.appendChild(logoImg)


    logoDiv.appendChild(logoLink)
}
navigation()