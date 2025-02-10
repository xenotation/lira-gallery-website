document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.getElementById('main-image');
    const spans = document.querySelectorAll('#image-selector span');

    if (!mainImage || spans.length === 0) {
        console.error("Main image or spans not found!");
        return;
    }

    // Set and load the first image on initial load
    const firstSpan = spans[0];
    const firstImageSrc = firstSpan.getAttribute('data-src');
    mainImage.src = firstImageSrc;
    firstSpan.classList.add('active'); // Underline the first number

    // Handle click events to switch images and underline selected number
    spans.forEach(span => {
        span.addEventListener('click', () => {
            const newImageSrc = span.getAttribute('data-src');

            // Change main image source
            mainImage.src = newImageSrc;

            // Remove 'active' class from all spans
            spans.forEach(s => s.classList.remove('active'));

            // Add 'active' class to the clicked span
            span.classList.add('active');
        });
    });
});
