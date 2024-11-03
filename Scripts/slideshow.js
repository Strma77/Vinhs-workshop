let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");

  // Wrap around logic
  if (n > slides.length) { 
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides and reset positions
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Ensure all slides are hidden
  }

  // Remove "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide
  slides[slideIndex - 1].style.display = "block";
  
  // Add active class to the current thumbnail
  dots[slideIndex - 1].className += " active";

  // Ensure the layout stays consistent
  document.querySelector('.slideshow-row').style.position = 'relative';
}