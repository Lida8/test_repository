let counter = 0;
const maxLimit = 10;

// Select the counter display element
const counterDisplay = document.getElementById('counter');

// Function to update the displayed counter
const updateDisplay = () => {
    counterDisplay.textContent = counter;
};

// Function to change the counter value
const changeCounter = (value) => {
    const newCounter = counter + value;

    // Check for limits before updating the counter
    if (newCounter >= 0 && newCounter <= maxLimit) {
        counter = newCounter;
        updateDisplay();
    } else if (newCounter > maxLimit) {
        alert(`You've reached the maximum limit of ${maxLimit}.`);
    }
};

// Function to reset the counter to 0
const resetCounter = () => {
    counter = 0;
    updateDisplay();
};

// Attach the functions to button clicks
document.getElementById('increaseBtn').addEventListener('click', () => changeCounter(1));
document.getElementById('decreaseBtn').addEventListener('click', () => changeCounter(-1));
document.getElementById('resetBtn').addEventListener('click', resetCounter);

// Initialize display
updateDisplay();
