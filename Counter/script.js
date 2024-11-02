let counter = 0;
const maxLimit = 20;
const freeShippingLimit = 10;

// Select the necessary elements
const counterDisplay = document.getElementById('counter');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');

// Create spans for free shipping and out of stock messages
const freeShippingMessage = document.createElement('span');
freeShippingMessage.textContent = "You have free shipping";
freeShippingMessage.style.color = "green";

const outOfStockMessage = document.createElement('span');
outOfStockMessage.textContent = "Out of stock";
outOfStockMessage.style.color = "red";

// Function to update the displayed counter
const updateDisplay = () => {
    counterDisplay.textContent = counter;

    // Disable the '-' button if counter is at 0
    decreaseBtn.disabled = (counter === 0);

    // Show free shipping message at 10, remove if less than 10 or at 20
    if (counter === freeShippingLimit && !document.body.contains(freeShippingMessage)) {
        counterDisplay.parentNode.appendChild(freeShippingMessage);
    } else if (counter < freeShippingLimit || counter === maxLimit) {
        if (document.body.contains(freeShippingMessage)) freeShippingMessage.remove();
    }

    // Change the '+' button's background to red at 20, and show out of stock message
    if (counter === maxLimit) {
        increaseBtn.style.backgroundColor = "red";
        if (!document.body.contains(outOfStockMessage)) {
            counterDisplay.parentNode.appendChild(outOfStockMessage);
        }
    } else {
        increaseBtn.style.backgroundColor = ""; // Reset background color
        if (document.body.contains(outOfStockMessage)) outOfStockMessage.remove();
    }
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
increaseBtn.addEventListener('click', () => changeCounter(1));
decreaseBtn.addEventListener('click', () => changeCounter(-1));
resetBtn.addEventListener('click', resetCounter);

// Initialize display
updateDisplay();

