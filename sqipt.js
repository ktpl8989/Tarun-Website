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
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.cursor-circle');
  const shapes = document.querySelectorAll('.shape');

  // Move the cursor circle
  document.addEventListener('mousemove', e => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;

    // Check proximity to each shape
    shapes.forEach(shape => {
      const rect = shape.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width/2);
      const dy = e.clientY - (rect.top + rect.height/2);
      const distance = Math.sqrt(dx*dx + dy*dy);

      // If cursor is close to shape, add effect
      if (distance < 80) {
        shape.style.boxShadow = '0 0 32px 8px #0002';
        shape.style.transform = 'scale(1.12)';
      } else {
        shape.style.boxShadow = '';
        shape.style.transform = '';
      }
    });
  });

  // On scroll, refresh shape effects (optional, for stickiness)
  window.addEventListener('scroll', () => {
    // Optionally, you could trigger a visual reset or effect here
    // For example, fade shapes or reset effects on scroll
    shapes.forEach(shape => {
      shape.style.boxShadow = '';
      shape.style.transform = '';
    });
  });
});
