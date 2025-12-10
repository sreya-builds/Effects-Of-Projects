const imageBox = document.querySelector(".image-box");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nxt-button");
const prevBtn = document.querySelector(".prev-button");

let currentIndex = Math.floor(slides.length / 2);

function updateActive() {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[currentIndex].classList.add("active");
}

function scrollToCenter(index, instant = false) {
  const slide = slides[index];

  const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
  const boxCenter = imageBox.offsetWidth / 2;

  const scrollLeft = slideCenter - boxCenter;

  imageBox.scrollTo({
    left: scrollLeft,
    behavior: instant ? "auto" : "smooth"
  });
}

/* NEXT BUTTON */
nextBtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= slides.length) {
    currentIndex = 0;
    updateActive();
    scrollToCenter(currentIndex, true); 
  } else {
    updateActive();
    scrollToCenter(currentIndex);
  }
});

/* PREV BUTTON */
prevBtn.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
    updateActive();
    scrollToCenter(currentIndex, true); 
  } else {
    updateActive();
    scrollToCenter(currentIndex);
  }
});

updateActive();
scrollToCenter(currentIndex, true);

