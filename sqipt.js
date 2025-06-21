// cursor-effect.js

document.addEventListener('DOMContentLoaded', () => {
    // Create the triangle element
    const mouseTriangle = document.createElement('div');
    mouseTriangle.classList.add('mouse-triangle');
    document.body.appendChild(mouseTriangle);

    // Update triangle position on mouse move
    document.addEventListener('mousemove', (e) => {
        mouseTriangle.style.left = `${e.clientX}px`;
        mouseTriangle.style.top = `${e.clientY}px`;
    });
});
