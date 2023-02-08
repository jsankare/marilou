function navigation() {

    const navbar = document.getElementById('nav__links');
    const links = {
        index: 'Accueil',
        prestations: 'Prestations',
        feedback: 'Avis',
        contact: 'Contact',
    };

    for (const [link, label] of Object.entries(links)) {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.innerText = label
        a.href = `./${link}.html`
        li.appendChild(a)
        navbar.appendChild(li)
    }

    const logoDiv = document.getElementById('nav__logo')
    const logoImg = document.createElement('img')
    const logoLink = document.createElement('a')
    logoLink.href = `index.html`
    logoImg.src = `images/marilou-logo-cropped.png`
    logoImg.alt = `A dog face as logo`
    logoImg.id = `nav__logo__img`
    logoDiv.appendChild(logoLink)
    logoLink.appendChild(logoImg)
}
navigation();

// function onScroll() {
//   let navbar = document.getElementById('nav');
//   let sticky = navbar.offsetTop;

//   window.onscroll = function() {
//       if (window.pageYOffset >= sticky) {
//           navbar.classList.add('sticky');
//           navbar.classList.remove('relative');
//       } else {
//           navbar.classList.remove('sticky');
//           navbar.classList.add('relative');
//       }
//   };
// }

// onScroll();