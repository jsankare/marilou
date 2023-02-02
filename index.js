function navigation() {

    const navbar = document.getElementById('nav__links');
    const links = {
        work: 'Mon entreprise',
        prices: 'Prestations & tarifs',
        feedback: 'Avis',
        contact: 'Contact',
    };

    for (const [link, label] of Object.entries(links)) {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.innerText = label
        a.href = `/${link}.html`
        li.appendChild(a)
        navbar.appendChild(li)
    }
}
navigation();

function hero() {

    const hero = document.getElementById('hero')
    const image = document.createElement('img')
    image.src = './images/pexels-jozef-fehér-1633522.jpg'
    image.alt = `Two dogs enjoying a walk`
    image.id = `hero__img`
    hero.appendChild(image)

    const presentation = document.getElementById('presentation')
    const title = document.createElement('h1')
    const subtitle = document.createElement('h2')
    title.id = `presentation__title`
    subtitle.id = `presentation__subtitle`
    title.innerText = `Marilou`
    subtitle.innerText = `Prenez soin de votre animal de compagnie avec Marilou - Services de garde d'animaux de qualité pour votre tranquillité d'esprit.`
    presentation.appendChild(title)
    presentation.appendChild(subtitle)
}
hero()