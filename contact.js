function navigation() {

    const navbar = document.getElementById('nav__links');
    const links = {
        work: 'Mon entreprise',
        prices: 'Prestations & tarifs',
        feedback: 'Avis',
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