function presentationTitle() {

    const presentation = document.getElementById('presentation__container')
    const title = document.createElement('h1')
    title.id = `presentation__title`
    title.innerText = `Mes prestations`
    presentation.appendChild(title)
}
presentationTitle()