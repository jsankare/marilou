function hero() {

    const hero = document.getElementById('hero')
    const image = document.createElement('img')
    image.src = 'images/pexels-jozef-fehér-1633522.jpg'
    image.alt = `Two dogs enjoying a walk`
    image.id = `hero__img`
    hero.appendChild(image)

    const presentation = document.getElementById('presentation__container')
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

function mainContent() {
    // About me section
    const aboutMe = document.getElementById('aboutMe')
    const meImg = document.getElementById('aboutMe__picture')
    const meImage = document.createElement('img')
    const aboutMeTitle = document.createElement('h3')
    const aboutMeContent = document.createElement('p')
    aboutMeTitle.innerHTML = `A propos de Marilou`
    aboutMeContent.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente maiores accusantium beatae esse fugiat reiciendis voluptates? Blanditiis, exercitationem facilis pariatur necessitatibus illo saepe quo impedit.`
    meImage.src = `images/female-tempo.png`
    meImage.alt = `A picture of the owner of th ecompany`
    meImage.id = `aboutMe__image`
    meImg.appendChild(meImage)
    aboutMe.appendChild(aboutMeTitle)
    aboutMe.appendChild(aboutMeContent)
    
    // Animals section
    const animalsImgDiv = document.getElementById('animals__img__container')
    const animalsContentDiv = document.getElementById('animals__content')
    const animalsImg = document.createElement('img')
    const animalsTitle = document.createElement('h3')
    const animalsText = document.createElement('p')
    animalsImg.src = `images/dog__leash.jpg`
    animalsImg.alt = `A dog on a walk in the forest`
    animalsImg.id = `animals__img`
    animalsTitle.innerHTML = `Ma passion des animaux`
    animalsText.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus libero consequuntur aspernatur laudantium, ab distinctio excepturi iusto facilis quos! Harum fugit aliquam eos.`
    animalsImgDiv.appendChild(animalsImg)
    animalsContentDiv.appendChild(animalsTitle)
    animalsContentDiv.appendChild(animalsText)
}
mainContent()