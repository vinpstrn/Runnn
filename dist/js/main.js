
// Shoes gallery slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var priceBefore = [99,159,249,159,149];
  var priceAfter = [89,119,199,119,99];
  var i;
  var slides = document.getElementsByClassName("sale__main-shoe-box");
  var dots = document.getElementsByClassName("sale__shoe-box");
  var priceBeforeUI = document.querySelector('.sale__price-np');
  var priceAfterUI = document.querySelector('.sale__price-now');
  var captionText = document.getElementById("sale__title");
  var shoe = document.getElementsByClassName('sale__shoe');
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = shoe[slideIndex-1].alt;
  priceBeforeUI.innerHTML = priceBefore[slideIndex-1];
  priceAfterUI.innerHTML = priceAfter[slideIndex-1];
}

// Shoe Size
var shoeSizes = [7,7.5,8,8.5,9,9.5,10,10.5];
var shoeSizesUI = document.querySelectorAll('.sale__sizes-item');
var shoeSizeTitle = document.querySelector('.sale__shoe-size');

shoeSizesUI.forEach(function(size, index) {
  size.addEventListener('click', function() {
    shoeSizeTitle.innerHTML = `Shoe size: ${shoeSizes[index]}`;
  });
});