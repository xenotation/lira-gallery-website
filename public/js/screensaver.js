document.addEventListener("DOMContentLoaded", function () {
    let timeout;
    let animationFrame;
    let position = 0;
    let direction = -1; // Moves up initially
    const limit = -300; // Maximum movement upwards
    const speed = 0.1; // Pixels per frame
    let isMoving = false;

    const sideDecos = document.querySelectorAll(".side-deco");

    function animate() {
        if (!isMoving) return;

        position += speed * direction;
        if (position <= limit || position >= 0) {
            direction *= -1; // Reverse the direction
        }

        sideDecos.forEach(deco => {
            deco.style.top = position + "px";
        });

        animationFrame = requestAnimationFrame(animate);
    }

    function startAnimation() {
        if (!isMoving) {
            isMoving = true;
            animate();
        }
    }

    function resetTimer() {
        clearTimeout(timeout);
        cancelAnimationFrame(animationFrame);
        isMoving = false;
        timeout = setTimeout(startAnimation, 8000); // Start moving after 5s idle
    }

    document.addEventListener("mousemove", resetTimer);
    document.addEventListener("keydown", resetTimer);
    resetTimer(); // Initialize the timer on page load
});
