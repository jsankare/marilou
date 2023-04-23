function presentationTitle() {

    const presentation = document.getElementById('presentation__container')
    const title = document.createElement('h1')
    title.id = `presentation__title`
    title.innerText = `Mes prestations`
    presentation.appendChild(title)
}
presentationTitle()

function prices() {
    const cards = document.getElementById('cards')

    const price__cards = {
        fifteen: 'Promenade de 15 min',
        thirty: 'Promenade de 30 min',
        fortyFive: 'Promenade de 45 min',
        hour: `Promenade d'une heure`,
        // home: `Visite à domicile (par jour)*`,
        // smallSize: `Prix petite taille`
    };

    const prices = {
        fifteen: '5€',
        thirty: '9€',
        fortyFive: '12€',
        hour: `15€`,
        // home: `15€ pour 1 animal<br>20€ pour 2 animaux<br>25€ à partir de 3 animaux`,
        // smallSize: `Pour les chats, lapins, rongeurs ou autre animal domestique de petite taille, le prix est de 5€`
    }

    const asterisks = {
        fifteen: '',
        thirty: '',
        fortyFive: '',
        hour: ``,
        home: `*Prix pour 1 à 2 visite(s). À partir de 3 visites par jour, le prix augmente de 5€`,
        smallSize: ``
    }

    for (const [link, label] of Object.entries(price__cards)) {
        const cardContainer = document.createElement('div')
        const cardText = document.createElement('p')
        const cardPrice = document.createElement('span')
        const cardAsterisk = document.createElement('span')

        cardAsterisk.className = `asterisk`

        cardPrice.innerHTML = `${prices[link]}`
        cardContainer.className = `card flex center`
        cardText.innerText = `${label} :`
        cardAsterisk.innerHTML = `${asterisks[link]}`
        cardContainer.appendChild(cardText)
        cardContainer.appendChild(cardPrice)
        cardContainer.appendChild(cardAsterisk)
        cards.appendChild(cardContainer)

    }
}
prices()