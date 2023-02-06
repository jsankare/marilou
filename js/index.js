function hero() {

    const hero = document.getElementById('hero')
    const image = document.createElement('img')
    image.src = '../images/pexels-jozef-fehér-1633522.jpg'
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