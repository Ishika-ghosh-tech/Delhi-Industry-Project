/**
 * Activates the auto-clean process for a specific toilet unit.
 * @param {string} unitId - The ID of the unit (e.g., 'a1', 'a2', 'b1', 'b2')
 */
function activateAutoClean(unitId) {
    // Get relevant DOM elements for this unit
    const card = document.getElementById(`unit-${unitId}`);
    const led = document.getElementById(`led-${unitId}`);
    const statusText = card.querySelector('.status-text');
    const progressBar = document.getElementById(`progress-${unitId}`);
    const btn = document.getElementById(`btn-${unitId}`);

    // Disable the button to prevent multiple clicks
    btn.disabled = true;

    // Reset progress to 0% with no transition so it snaps back instantly
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
    
    // Force a reflow to ensure the browser applies the width=0 state before starting transition
    void progressBar.offsetWidth;

    // Change the LED ring class from ring-red to a ring-blue pulsing animation
    led.className = 'led ring-blue';

    // Change the status text to 'CLEANING...'
    statusText.textContent = 'CLEANING...';
    statusText.className = 'status-text text-blue';

    // Fill the progress-bar over 10 seconds
    progressBar.style.transition = 'width 10s linear';
    progressBar.style.width = '100%';

    // After 10 seconds, reset the status to 'Ready', make the LED ring-green, and enable the button again
    setTimeout(() => {
        led.className = 'led ring-green';
        statusText.textContent = 'Ready';
        statusText.className = 'status-text text-green';
        btn.disabled = false;
    }, 10000);
}
