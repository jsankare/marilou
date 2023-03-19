function presentationTitle() {

    const presentation = document.getElementById('presentation__container')
    const title = document.createElement('h1')
    title.id = `presentation__title`
    title.innerText = `Mes prestations`
    presentation.appendChild(title)
}
presentationTitle()

// v2
function prices() {
    const cards = document.getElementById('cards')

    const price__cards = {
        fifteen: 'Promenade de 15 min',
        thirty: 'Promenade de 30 min',
        fortyFive: 'Promenade de 45 min',
        hour: `Promenade d'une heure`,
        home: `Visite à domicile`
    };

    const prices = {
        fifteen: '5€',
        thirty: '9€',
        fortyFive: '12€',
        hour: `15€`,
        home: `18€ / animal et par jour`
    }

    for (const [link, label] of Object.entries(price__cards)) {
        const cardContainer = document.createElement('div')
        const cardText = document.createElement('p')
        const cardPrice = document.createElement('span')

        cardPrice.innerHTML = `${prices[link]}`
        cardContainer.className = `card flex center`
        cardText.innerText = `${label} :`
        cardContainer.appendChild(cardText)
        cardContainer.appendChild(cardPrice)
        cards.appendChild(cardContainer)
    }
}
prices()

function packages() {
    const cards = document.getElementById('cards_2')

    const price__cards = {
        thirty: 'Visite de jour/soir pendant -6 mois',
        fortyFive: 'Visite de jour/soir pendant + 6 mois',
    };

    const prices = {
        thirty: '17€ / jour',
        fortyFive: '15€ / jour',
    }

    for (const [link, label] of Object.entries(price__cards)) {
        const cardContainer = document.createElement('div')
        const cardText = document.createElement('p')
        const cardPrice = document.createElement('span')

        cardPrice.innerHTML = `${prices[link]}`
        cardContainer.className = `card flex center`
        cardText.innerText = `${label} :`
        cardContainer.appendChild(cardText)
        cardContainer.appendChild(cardPrice)
        cards.appendChild(cardContainer)
    }
}
packages()

