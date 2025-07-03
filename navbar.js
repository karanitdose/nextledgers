
// navbar.js
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdown = document.querySelector('.nav-dropdown');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    if (dropdownToggle && dropdown) {
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault(); // prevent href from triggering
            dropdown.classList.toggle('open');
        });
    }
});



// craousel js start here 

 const track = document.getElementById('carouselTrack');
    const slides = document.querySelectorAll('.carousel-slide');
    const slideCount = slides.length / 2; // real logos
    let currentIndex = 0;

    function moveCarousel() {
      const slideWidth = slides[0].offsetWidth;
      currentIndex++;

      track.style.transition = 'transform 0.5s ease-in-out';
      track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

      if (currentIndex >= slideCount) {
        setTimeout(() => {
          track.style.transition = 'none';
          track.style.transform = `translateX(0)`;
          currentIndex = 0;
        }, 500);
      }
    }

    setInterval(moveCarousel, 2500); 

    // testimonial js 
let currentSlide = 0;
  const carousel = document.getElementById('carousel');
  const totalSlides = document.querySelectorAll('.testimonial-card').length;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${100 * currentSlide}%)`;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }


  // top navbar screen

    let prevScrollPos = window.pageYOffset;
  const topNav = document.querySelector(".topnav-bar");

  window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > prevScrollPos) {
      topNav.style.top = "-60px"; // hide on scroll down
    } else {
      topNav.style.top = "0"; // show on scroll up
    }
    prevScrollPos = currentScrollPos;
  });


  const slider = document.getElementById("price-slider");
const bubble = document.getElementById("price-bubble");

function formatMoney(value) {
  const million = 1000000;
  return `₹${value >= million ? value / million + 'M' : value}`;
}

function updateBubble() {
  const val = slider.value;
  bubble.innerText = formatMoney(val);

  // Position bubble above thumb
  const percent = (val - slider.min) / (slider.max - slider.min);
  const bubbleWidth = bubble.offsetWidth;
  const sliderWidth = slider.offsetWidth;
  const offset = percent * sliderWidth - bubbleWidth / 2;
  bubble.style.left = `${offset}px`;
}

slider.addEventListener("input", updateBubble);
window.addEventListener("load", updateBubble);
