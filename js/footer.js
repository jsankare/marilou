function footer() {
    const medias = document.getElementById('footer__content__medias')
    const links = document.getElementById('footer__content__linktoPages')
    const infos = document.getElementById('footer__content__infos')

    const mediasContainer = document.createElement('p')
    const facebook = document.createElement('a')
    const instagram = document.createElement('a')
    const patent = document.createElement('a')
    
    facebook.href = `https://www.facebook.com/profile.php?id=100090481339100&mibextid=LQQJ4d`
    facebook.alt = `Facebook`
    facebook.target = `blank`
    facebook.innerHTML = `facebook`
    facebook.className = `facebook`
    instagram.href = `https://www.instagram.com/marilou_pet_sitting/`
    instagram.alt = `Instagram`
    instagram.target = `blank`
    instagram.innerHTML = `instagram`
    instagram.className = `instagram`
    patent.href = `https://www.jsankare.dev`
    patent.alt = `developper website JSankare`
    patent.target = `blank`
    patent.innerHTML = `JSankare`
    patent.className = `patent`
    mediasContainer.innerHTML = `Retrouvez-moi sur ${facebook.outerHTML} et ${instagram.outerHTML}. Création ${patent.outerHTML}`
    medias.appendChild(mediasContainer)

    // links footer
    const footerLinks = {
        home :'Accueil',
        prestations: 'Prestations',
        //feedback: 'Avis',
        contact: 'Contact',
    };

    for (const [link, label] of Object.entries(footerLinks)) {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.innerText = label
        a.href = `./${link}.html`
        a.classList.add('footer__link')
        li.appendChild(a)
        links.appendChild(li)
    }

    const phone = document.createElement('a')
    phone.classList.add('footer__link')
    phone.href = `tel:0674802188`
    phone.innerHTML = `<i class="fa-solid fa-phone"></i> 06.74.80.21.88`
    infos.appendChild(phone)
}
footer()