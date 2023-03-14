function hero() {

    const hero = document.getElementById('hero')
    const image = document.createElement('img')
    image.src = 'images/dogsOutside.jpg'
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
    aboutMeTitle.innerHTML = `A propos de Moi`
    aboutMeContent.innerHTML = `22 ans, jeune auto entrepreneuse qui se lance. Je possède 3 ans d'expérience en refuge animalier (Refuge de la Picoterie à Château Thierry).`
    meImage.src = `images/mrl.jpg`
    meImage.alt = `A picture of the owner of the company`
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
    animalsImg.src = `images/dog_and_cat.png`
    animalsImg.alt = `A dog on a walk in the forest`
    animalsImg.id = `animals__img`
    animalsTitle.innerHTML = `Ma passion des animaux`
    animalsText.innerHTML = `Passionnée depuis toute petite, j'ai toujours vécu avec des animaux. Chiens, chats, lapins, cochons d'Inde etc .. Je peux m'occuper de tout types d'animaux, domestiques ou non.`
    animalsImgDiv.appendChild(animalsImg)
    animalsContentDiv.appendChild(animalsTitle)
    animalsContentDiv.appendChild(animalsText)
}
mainContent()