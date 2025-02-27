// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Select the scroll-to-top button
    const button = document.getElementById("toTopBtn");

    // Initially hide the button
    button.style.display = "none"; 

    // Event listener for scrolling
    window.onscroll = function() {
        toggleButton(); // Check if the button should be visible
    };

    // Function to show/hide the scroll-to-top button
    function toggleButton() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            button.style.display = "block"; // Show the button
        } else {
            button.style.display = "none"; // Hide the button
        }
    }

    // Function to scroll to the top smoothly
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Add click event listener to the button
    button.addEventListener("click", scrollToTop);
});
