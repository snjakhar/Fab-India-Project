
const slider = document.querySelector(".slideshow-container");
const slides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot");
const nextSlide = document.querySelector(".next");
const prevSlide = document.querySelector(".prev");
const numOfSlides = slides.length;
var currentSlide = 0;

// Image slider for next button
nextSlide.addEventListener("click", function () {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  currentSlide++;
  if (currentSlide > numOfSlides - 1) {
    currentSlide = 0;
  }

  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
});

// Image slider for prev button
prevSlide.addEventListener("click", function () {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = numOfSlides - 1;
  }

  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
});

// Image Slider is working on dot
function dotSlider(sliderIndex) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  currentSlide = sliderIndex;
  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

// Image Slider autoplay
var playSlider;

var repeater = function () {
  playSlider = setInterval(function () {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    currentSlide++;
    if (currentSlide > numOfSlides - 1) {
      currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }, 4000);
};
repeater();

// Stop Image Slider Autoplay on mouseover
slider.addEventListener("mouseenter", function () {
  clearInterval(playSlider);
});

slider.addEventListener("mouseleave", function () {
  repeater();
});
