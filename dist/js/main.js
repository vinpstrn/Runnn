
// Shoes gallery slideshow for sale section
{
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

// Slideshow for new arrival
var slideIndexNew = 1;
showSlidesNew(slideIndexNew);

// function plusSlidesNew(num) {
//   showSlidesNew(slideIndexNew += num);
// }

function currentSlideNew(num) {
  showSlidesNew(slideIndexNew = num);
  if(num - 1 === 0) {
    mainShoesArr[num - 1].src = `optimized/new-arriaval-lebron-white.png`;
  } else if (num - 1 === 1) {
    mainShoesArr[num - 1].src = `optimized/dame-4.png`;
  } else {
    mainShoesArr[num - 1].src = `optimized/jordan-3-white.png`;
  }
}

function showSlidesNew(num) {
  var j;
  var slidesNew = document.getElementsByClassName("slideshow-wrapper");
  var dotsNew = document.getElementsByClassName("new__slideshow");
  if (num > slidesNew.length) {slideIndexNew = 1}    
  if (num < 1) {slideIndexNew = slidesNew.length}
  for (j = 0; j < slidesNew.length; j++) {
      slidesNew[j].style.display = "none";
  }
  for (j = 0; j < dotsNew.length; j++) {
      dotsNew[j].className = dotsNew[j].className.replace("active", "");
  }
  slidesNew[slideIndexNew-1].style.display = "block";  
  dotsNew[slideIndexNew-1].className += " active";
}

// Shoe color (Choose color) (Lebron 32)
  var shoeArr = [`optimized/lebron32-maroon.png`,
                 `optimized/lebron32-green.png`,
                 `optimized/lebron32-black.png`,
                 `optimized/dame-4-red.png`,
                 `optimized/dame-4-yellow.png`,
                 `optimized/dame-4-blue.png`,
                 `optimized/jordan-3-yellow.png`,
                 `optimized/jordan-3-orange.png`,
                 `optimized/jordan-3-violet.png`,];
  
  var colors = document.querySelectorAll('.new__color');
  var mainShoes = document.querySelectorAll('.new__shoe');
  
  colorsArr = Array.from(colors);
  mainShoesArr = Array.from(mainShoes);
  
  colorsArr.forEach(function(color, index) {
    color.addEventListener('click',function() {
      for(var i = 0; i < mainShoesArr.length; i++) {
        mainShoesArr[i].src = shoeArr[index];
      }
    });
  });

