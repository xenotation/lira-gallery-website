document.addEventListener("DOMContentLoaded", function () {
    const images = window.imageGalleryData.images;

    const mainImage = document.getElementById('main-image');
    const spans = document.querySelectorAll('#image-selector span');

    spans.forEach((span, index) => {
        span.addEventListener('click', () => {
            // Change main image source
            mainImage.src = images[index];

            // Highlight selected number
            spans.forEach(s => s.classList.remove('active'));
            span.classList.add('active');
        });
    });
});
