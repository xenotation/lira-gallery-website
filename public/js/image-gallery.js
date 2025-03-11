document.addEventListener("DOMContentLoaded", function () {
    let numberSequences = document.querySelectorAll('.number-sequence');

    if (numberSequences.length > 1) {
        console.warn("Multiple .number-sequence elements found. Merging them...");
        
        // Keep the first one, remove the rest
        let firstSequence = numberSequences[0];
        for (let i = 1; i < numberSequences.length; i++) {
            let spans = numberSequences[i].querySelectorAll('span');
            spans.forEach(span => firstSequence.appendChild(span.cloneNode(true))); // Move numbers to first sequence
            numberSequences[i].remove(); // Remove the extra sequence
        }
    }

    const mainImage = document.getElementById('main-image');
    const spans = document.querySelectorAll('#image-selector span');

    if (!mainImage || spans.length === 0) {
        console.error("Main image or image selector missing!");
        return;
    }

    // Set and load the first image
    const firstSpan = spans[0];
    mainImage.src = firstSpan.getAttribute('data-src');
    firstSpan.classList.add('active');

    // Handle click events to switch images
    spans.forEach(span => {
        span.addEventListener('click', () => {
            mainImage.src = span.getAttribute('data-src');
            spans.forEach(s => s.classList.remove('active'));
            span.classList.add('active');
        });
    });
});
