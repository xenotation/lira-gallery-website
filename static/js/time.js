window.onload = function () {
    function updateTime() {
        // Get current time in Sofia
        const options = { timeZone: 'Europe/Sofia', hour: '2-digit', minute: '2-digit' };
        let now = new Date().toLocaleTimeString('bg-BG', options);

        // Remove "ч." by splitting or trimming
        now = now.replace(' ч.', '').trim();

        // Update the overlay text
        const timeDiv = document.querySelector('.logo-box-right .overlay-text-right');
        if (timeDiv) {
            timeDiv.textContent = now;
        }
    }

    // Initial call and update every 60 seconds
    updateTime();
    setInterval(updateTime, 60000);
};
