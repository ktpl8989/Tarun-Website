// scroll-to-top.js

document.addEventListener('DOMContentLoaded', () => {
    // Get the button element
    const mybutton = document.getElementById("scrollToTopBtn");

    // Check if the button exists on the page
    if (mybutton) {
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {
            scrollFunction();
        };

        function scrollFunction() {
            // Use document.documentElement.scrollTop for broader browser compatibility
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        // Assign the topFunction to the button's click event
        mybutton.onclick = function() {
            topFunction();
        };

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Smooth scroll effect
            });
        }
    } else {
        console.warn("Scroll to top button with ID 'scrollToTopBtn' not found.");
    }
});
