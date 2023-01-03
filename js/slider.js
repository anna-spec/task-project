const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;
let slideId = document.querySelector("#slide-id");
let slideRange = document.querySelector("#slide-range");
let widthOfActivePart = 135 / slidesCount;
let current = 0;
let currentSlide = 1;
let active = document.createElement('span');


slideId.textContent = currentSlide + '/' + slidesCount;
active.classList.add('active-slides');
active.style.width = widthOfActivePart * currentSlide + 'px';
slideRange.append(active);

function changeSlide(next = true) {

  if (next) {
    current += current > maxLeft ? -100 : current * -1;
    ++currentSlide;
    active.style.width = widthOfActivePart * currentSlide + 'px';
    if(currentSlide <= 0 || currentSlide > slidesCount){
      currentSlide = 1;
      active.style.width = widthOfActivePart + 'px';
    }
  } else {
    current = current < 0 ? current + 100 : maxLeft;
    --currentSlide;
    if(currentSlide <= 0 || currentSlide >= slidesCount){
      currentSlide = 3;
      active.style.width = widthOfActivePart * currentSlide + 'px';
    }
    active.style.width = widthOfActivePart * currentSlide + 'px';
  }

  slideId.textContent = currentSlide + '/' + slidesCount;
  slides.style.left = current + "%";
}

document.querySelector(".next-slide").addEventListener("click", function() {
  changeSlide();
});

document.querySelector(".prev-slide").addEventListener("click", function() {
  changeSlide(false);
});
