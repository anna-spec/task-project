const productSlides = document.querySelector(".product-slides");
const productslidesCount = productSlides.childElementCount;
const productmaxLeft = (productslidesCount - 2) * 664 * -1;
let secondCurrent = 0;

function changeProductSlide(next = true) {

  if (next) {
    secondCurrent += secondCurrent > productmaxLeft ? -664 : secondCurrent * -1;
  } else {
    secondCurrent = secondCurrent < 0 ? secondCurrent + 664 : productmaxLeft;
  }

  productSlides.style.left = secondCurrent + "px";
}

document.querySelector(".product-next-slide").addEventListener("click", function() {
    changeProductSlide();
});
