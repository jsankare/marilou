function initializeAutocomplete() {
  const pets = [
    "Chien",
    "Chat",
    "Rongeur",
    "Bovin",
    "Cheval",
    "Mamie"
  ]

  $("#pet__type").autocomplete({
    source: pets
  })
}

document.addEventListener("DOMContentLoaded", function(event) {
  initializeAutocomplete();

document.querySelector(".inputBtn").addEventListener("click", function(event) {
    event.preventDefault()
  
    const firstName = document.querySelector("input[name='firstName']").value
    const lastName = document.querySelector("input[name='lastName']").value
    const email = document.querySelector("input[name='email']").value
    const phone = document.querySelector("input[name='phone']").value
    // enter others inputs here
    const number = document.querySelector("input[name='number']").value
    const message = document.querySelector("textarea").value
  
    const firstNameRegex = /^[a-zA-Z]+$/
    const lastNameRegex = /^[a-zA-Z]+$/
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const phoneRegex = /^\d{10}$/
    const numberRegex = /^[1-9][0-9]*$/
  
    if (firstName === "" || !firstName.match(firstNameRegex)) {
      alert("Veuillez entrer un prénom valide")
      return
    }
  
    if (lastName === "" || !lastName.match(lastNameRegex)) {
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

    if (number === "" || !number.match(numberRegex)) {
      alert("Veuillez entrer un nombre d'animaux à garder valide")
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
      Message: message
    });
  
    localStorage.setItem("messages", JSON.stringify(messages))
  
    alert("Votre message a bien été envoyé !")
  
    document.querySelector("input[name='firstName']").value = ""
    document.querySelector("input[name='lastName']").value = ""
    document.querySelector("input[name='email']").value = ""
    document.querySelector("input[name='phone']").value = ""
    document.querySelector("textarea").value = ""
})
});