// Initialize current display variable
let currentDisplay = '';

// Function to update the display
function updateDisplay(value) {
    document.querySelector('#display').value = value;
}

// Function to handle button clicks
function handleButtonClick(event) {
    const buttonValue = event.target.dataset.value;

    if (buttonValue === 'clear') {
        currentDisplay = '';
    } else if (buttonValue === 'delete') {
        currentDisplay = currentDisplay.slice(0, -1); // Remove last character
    } else if (buttonValue === '=') {
        try {
            currentDisplay = eval(currentDisplay).toString();
        } catch (error) {
            currentDisplay = 'Error';
        }
    } else {
        currentDisplay += buttonValue;
    }

    updateDisplay(currentDisplay);
}

// Add event listeners to buttons
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

// Set initial display value
updateDisplay(currentDisplay);
