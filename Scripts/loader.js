// Detect screen size and load a different page if the width is below a threshold
document.addEventListener("DOMContentLoaded", () => {
    let lastScreenWidth = window.innerWidth; // Cache initial screen width

    function checkScreenSize() {
        const screenWidth = window.innerWidth;
        const isMobileView = screenWidth < 1270;

        // Avoid redundant redirects
        if (isMobileView && !window.location.pathname.endsWith("mobile-home.html")) {
            window.location.href = "./mobile-home.html";
        } else if (!isMobileView && !window.location.pathname.endsWith("index.html")) {
            window.location.href = "./index.html";
        }
    }

    // Initial check
    checkScreenSize();

    // Throttle resize event
    let resizeTimeout;
    window.addEventListener("resize", () => {
        const currentScreenWidth = window.innerWidth;

        // Only run check if screen width crosses threshold
        if (
            (lastScreenWidth < 1270 && currentScreenWidth >= 1270) ||
            (lastScreenWidth >= 1270 && currentScreenWidth < 1270)
        ) {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                lastScreenWidth = currentScreenWidth;
                checkScreenSize();
            }, 200);
        }
    });
});
