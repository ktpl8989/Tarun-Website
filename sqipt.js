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
<script>
let scene, camera, renderer, model;
let container = document.getElementById('teddy-3d-container');

// 1. Setup the scene
scene = new THREE.Scene();
scene.background = new THREE.Color(0xffe1e7); // pastel pink

// 2. Setup the camera
camera = new THREE.PerspectiveCamera(45, container.offsetWidth/container.offsetHeight, 0.1, 1000);
camera.position.set(0, 1.2, 3);

// 3. Setup the renderer
renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
renderer.setSize(container.offsetWidth, container.offsetHeight);
container.appendChild(renderer.domElement);

// 4. Add light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);
const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
dirLight.position.set(2, 10, 10);
scene.add(dirLight);

// 5. Load GLTF model (example teddy model)
// Find a cute GLTF/GLB model online, e.g. from https://sketchfab.com/tags/teddy-bear or https://poly.pizza
// For demo, replace the link below with your own .glb or .gltf URL!
const loader = new THREE.GLTFLoader();
loader.load('https://model-url.glb', function(gltf) {
    model = gltf.scene;
    model.scale.set(2,2,2);
    scene.add(model);
    animate();
});

// 6. Mouse interaction - rotate model to follow mouse
container.addEventListener('mousemove', (event) => {
    if (!model) return;
    // Map mouse position to [-1,1]
    const x = (event.offsetX / container.offsetWidth) * 2 - 1;
    const y = (event.offsetY / container.offsetHeight) * 2 - 1;
    // Rotate model based on mouse
    model.rotation.y = -x * 1.2; // rotate horizontally
    model.rotation.x = -y * 0.6; // rotate vertically
});

// 7. Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
</script>
