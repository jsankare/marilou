document.querySelector(".inputBtn").addEventListener("click", function(event) {
    event.preventDefault()
  
    const firstName = document.querySelector("input[name='firstName']").value
    const lastName = document.querySelector("input[name='lastName']").value
    const email = document.querySelector("input[name='email']").value
    const phone = document.querySelector("input[name='phone']").value
    const address = document.querySelector("input[name='address']").value
    const city = document.querySelector("input[name='city']").value
    const date = document.querySelector("input[name='date']").value
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

    if (date === "") {
      alert("Veuillez entrer une date de garde")
      return
    }

    if (time === "") {
      alert("Veuillez entrer un horaire de garde")
      return
    }

    if (number === "") {
      alert("Veuillez entrer un nombre d'animaux à garder")
      return
    }

    if (race === "") {
      alert("Veuillez entrer un nombre d'animaux à garder")
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
      Adresse : address,
      Ville : city,
      'Date de garde' : date,
      Horaire : time,
      Nombre : number,
      Type : race,
      Message: message
    });
  
    localStorage.setItem("messages", JSON.stringify(messages))
  
    alert("Votre message a bien été envoyé !")
  
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