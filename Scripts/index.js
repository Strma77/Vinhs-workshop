// JavaScript to toggle the navbar
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navbarLinks = document.querySelector(".navbar nav ul");

    hamburger.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent click from propagating to document
        navbarLinks.classList.toggle("show");
    });

    document.addEventListener("click", function(event) {
        if (!navbarLinks.contains(event.target) && !hamburger.contains(event.target)) {
            navbarLinks.classList.remove("show"); // Remove the 'show' class
        }
    });
});


//Scroll indicator
document.addEventListener('scroll', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const scrollTop = window.scrollY; // Current scroll position from the top
    const documentHeight = document.documentElement.scrollHeight; // Total height of the document
    const windowHeight = window.innerHeight; // Height of the visible window
    const totalHeight = documentHeight - windowHeight; // Total height that can be scrolled

    // Calculate the scroll percentage
    const scrollPercentage = (scrollTop / totalHeight) * 100;
    
    console.log(scrollPercentage)

    // Update the width of the scroll indicator
    scrollIndicator.style.width = `${scrollPercentage}%`;
});


