// Detect screen size and load a different page if the width is below a threshold
window.addEventListener("load", checkScreenSize);

function checkScreenSize() {
    const screenWidth = window.innerWidth;
    const isMobileView = screenWidth < 1270;

    // Avoid repeated redirects by checking the current URL path only once
    if (isMobileView && window.location.pathname.endsWith("index.html")) {
        // Redirect to mobile version
        window.location.href = "Winhs-workshop/mobile-home.html";
        console.log("success")
    } else if (!isMobileView && window.location.pathname.endsWith("mobile-home.html")) {
        // Redirect to desktop version
        window.location.href = "./index.html";
        console.log("success")
    }
}

// Optional: run the check on resize, with throttling
let resizeTimeout;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(checkScreenSize, 200); // Adjust timeout as needed
});
