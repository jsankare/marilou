//Testimonial Data
const testimonials = [
    {
      name: "Cathy & Sylvain",
    //   job: "CEO, Fashworks",
      image: "images/mascots/avatar1.jpg",
      testimonial:
        `"Merci à Marilou pour son sérieux, son professionnalisme, nous avons eu besoin de ses services un week-end et tout à été très bien pour nos deux whippets . Merci encore et certainement à très bientôt."`,
    },
    {
      name: "Adeline Colombier",
    //   job: "Developer, TechCrew",
      image: "images/mascots/avatar3.jpg",
      testimonial:
        `"Je suis plus que satisfaite de Marilou qui est entièrement disponible et dévouée pour mes loulous. Elle est surtout très douce et très professionnelle. Je la remercie grandement pour ce qu’elle fait."`,
    },
  ];
  
  //Current Slide
  let i = 0;
  //Total Slides
  let j = testimonials.length;
  
  let testimonialContainer = document.getElementById("testimonial-container");
  let nextBtn = document.getElementById("next");
  let prevBtn = document.getElementById("prev");
  
  nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
  });
  prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
  });
  
  let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
      <p>${testimonials[i].testimonial}</p>
      <img src=${testimonials[i].image}>
      <h3>${testimonials[i].name}</h3>
      
    `; 
    // <h6>${testimonials[i].job}</h6> can add this, style already present
  };
  window.onload = displayTestimonial;