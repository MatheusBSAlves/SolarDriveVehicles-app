let slideIndex = 0;
const cardsPorVez = 3;

function showSlides() {
  const container = document.querySelector(".car-roussel");
  const cards = document.querySelectorAll(".car-d");

  const maxIndex = cards.length - cardsPorVez;

  if (slideIndex > maxIndex) slideIndex = 0;
  if (slideIndex < 0) slideIndex = maxIndex;

  const percentage = slideIndex * (100 / cardsPorVez);
  container.style.transform = `translateX(-${percentage}%)`;
}

function moveSlide(n) {
  slideIndex += n;
  showSlides();
}

showSlides();
