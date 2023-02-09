function presentationTitle() {

    const presentation = document.getElementById('presentation__container')
    const title = document.createElement('h1')
    title.id = `presentation__title`
    title.innerText = `Mes prestations`
    presentation.appendChild(title)
}
presentationTitle()

// v2
function presta() {
    const cards = document.getElementById('cards')

    const price__cards = {
        thirty: 'Promenade de 30 min',
        fortyFive: 'Promenade de 45 min',
        hour: `Promenade d'une heure`,
        home: `Visite à domicile`
    };

    const prices = {
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
presta()

