// Event listener for the Enter key in the input field
document.getElementById('numberInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default action for Enter key
        displayShapes();
    }
});

// This function is triggered when the "Generate Shapes" button is clicked or Enter is pressed.
function displayShapes() {
    const input = document.getElementById('numberInput').value.trim();
    const errorDiv = document.getElementById
('error');
const container = document.getElementById('shapeContainer');

// Clear previous shapes and error message
container.innerHTML = '';
errorDiv.textContent = '';

// Check if the input is empty
if (!input) {
    errorDiv.textContent = 'You must input a number.';
    return;
}

// Validate input: only numbers
if (!/^(\d+,)*\d+$/.test(input)) {
    errorDiv.textContent = 'Please enter only numbers.';
    return;
}

const numbers = input.split(',').map(Number);

// Process each number to display the appropriate shape.
numbers.forEach((number) => {
    let shape = determineShape(number);
    let shapeContainer = document.createElement('div');
    shapeContainer.className = 'shapeContainerItem';

    let shapeName = document.createElement('div');
    shapeName.innerText = shape.toUpperCase();
    shapeName.className = 'shapeName';

    let shapeDiv = document.createElement('div');
    shapeDiv.className = `shape ${shape}`;
    shapeDiv.style.backgroundColor = getBackgroundColor(number);

    // Specific handling for the triangle to ensure no additional background
    if (shape === 'triangle') {
        shapeDiv.style.backgroundColor = 'transparent';

    } else {
        // Apply border color based on number
        shapeDiv.style.borderColor = number % 2 === 0 ? 'transparent' : 'green';
    }

    shapeContainer.appendChild(shapeName);
    shapeContainer.appendChild(shapeDiv);
    container.appendChild(shapeContainer);
});
}

// Determines the shape to display based on the number's properties
function determineShape(number) {
if (number % 2 === 0) return 'square';
if (number % 3 === 0) return 'rectangle';
if (number < 10 && number % 2 !== 0) return 'triangle';
if (isPrime(number)) return 'circle';
return 'none';
}

// Checks if a number is a prime number
function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

// Sets the background color for shapes based on the number's properties
function getBackgroundColor(number) {
if (number > 50) return 'lightgray';
return number % 2 === 0 ? 'red' : 'green';
}