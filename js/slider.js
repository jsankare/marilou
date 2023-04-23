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
    // {
    //   name: "Jae Robin",
    //   job: "UI Designer, Affinity Agency",
    //   image: "profile-image-3.png",
    //   testimonial:
    //     "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis",
    // },
    // {
    //   name: "Nicola Blakely",
    //   job: "CEO,Zeal Wheels",
    //   image: "profile-image-4.png",
    //   testimonial:
    //     "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
    // },
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
    // <h6>${testimonials[i].job}</h6> can add this, wtyle already present
  };
  window.onload = displayTestimonial;