function footer() {
    const medias = document.getElementById('footer__content__medias')
    const links = document.getElementById('footer__content__linktoPages')
    const infos = document.getElementById('footer__content__infos')

    const mediasContainer = document.createElement('p')
    const facebook = document.createElement('a')
    const instagram = document.createElement('a')
    
    facebook.href = `https://www.facebook.com/profile.php?id=100090481339100&mibextid=LQQJ4d`
    facebook.alt = `Facebook`
    facebook.innerHTML = `facebook`
    facebook.className = `facebook`
    instagram.href = `https://www.instagram.com/marilou_pet_sitting/`
    instagram.alt = `Instagram`
    instagram.innerHTML = `instagram`
    instagram.className = `instagram`
    mediasContainer.innerHTML = `Me retrouver sur ${facebook.outerHTML} et ${instagram.outerHTML}`
    medias.appendChild(mediasContainer)

    // links footer
    const footerLinks = {
        prestations: 'Prestations',
        //feedback: 'Avis',
        contact: 'Contact',
    };

    for (const [link, label] of Object.entries(footerLinks)) {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.innerText = label
        a.href = `./${link}.html`
        li.appendChild(a)
        links.appendChild(li)
    }

    const phone = document.createElement('a')
    phone.href = `tel:0674802188`
    phone.innerHTML = `06.74.80.21.88` // does not work
    infos.appendChild(phone)
}
footer()