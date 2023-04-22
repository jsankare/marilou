document.querySelector(".inputBtn").addEventListener("click", function (event) {
  event.preventDefault()

  const firstName = document.querySelector("input[name='firstName']").value
  const lastName = document.querySelector("input[name='lastName']").value
  const email = document.querySelector("input[name='email']").value
  const phone = document.querySelector("input[name='phone']").value
  const address = document.querySelector("input[name='address']").value
  const city = document.querySelector("input[name='city']").value
  const startDate = document.querySelector("input[name='startDate']").value
  const endDate = document.querySelector("input[name='endDate']").value
  const time = document.querySelector("input[name='hour']").value
  const number = document.querySelector("input[name='number']").value
  const race = document.querySelector("input[name='pets']").value
  const message = document.querySelector("textarea").value

  const textRegex = /^[a-zA-Z]+$/
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const phoneRegex = /^\d{10}$/

  if (firstName === "" || !firstName.match(textRegex)) {
    alert("Veuillez entrer un prénom valide")
    return
  }

  if (lastName === "" || !lastName.match(textRegex)) {
    alert("Veuillez entrer un nom valide")
    return
  }

  if (email === "" || !email.match(emailRegex)) {
    alert("Veuillez entrer un email valide")
    return
  }

  if (phone === "" || !phone.match(phoneRegex)) {
    alert("Veuillez entrer un numéro de téléphone valide")
    return
  }

  if (address === "") {
    alert("Veuillez entrer votre adresse")
    return
  }

  if (city === "") {
    alert("Veuillez entrer votre ville")
    return
  }

  if (message === "") {
    alert("Veuillez entrer un message")
    return
  }

  let messages = JSON.parse(localStorage.getItem("messages")) || []

  messages.push({
    Prénom: firstName,
    Nom: lastName,
    Email: email,
    Téléphone: phone,
    Adresse: address,
    Ville: city,
    'Début de garde': startDate,
    'Fin de garde': endDate,
    Horaire: time,
    Nombre: number,
    Type: race,
    Message: message
  });

    const body = `Prénom: ${firstName}\nNom: ${lastName}\nEmail: ${email}\nTéléphone: ${phone}\nAdresse: ${address}\nVille: ${city}\nDébut de garde: ${startDate}\nFin de garde: ${endDate}\nHoraire: ${time}\nNombre: ${number}\nType: ${race}\n\nMessage:\n${message}`

    const mailtoLink = `mailto:Mariloubaty@outlook.fr?subject=Prise de contact&body=${encodeURIComponent(body)}`
    window.open(mailtoLink, "_blank")

  localStorage.setItem("messages", JSON.stringify(messages))

  // alert("Votre message a bien été envoyé !")

  document.querySelector("input[name='firstName']").value = ""
  document.querySelector("input[name='lastName']").value = ""
  document.querySelector("input[name='email']").value = ""
  document.querySelector("input[name='phone']").value = ""
  document.querySelector("input[name='address']").value = ""
  document.querySelector("input[name='city']").value = ""
  document.querySelector("input[name='date']").value = ""
  document.querySelector("input[name='hour']").value = ""
  document.querySelector("input[name='number']").value = ""
  document.querySelector("input[name='pets']").value = ""
  document.querySelector("textarea").value = ""
})
