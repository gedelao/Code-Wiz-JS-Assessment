# Shape Display Challenge

## Overview
The Shape Display Challenge is a single-page HTML application that dynamically displays geometric shapes based on the divisibility of input numbers. This project demonstrates proficiency in JavaScript, HTML, and CSS, focusing on logic implementation, DOM manipulation, and styling.

## Features
- Interactive UI allowing users to input numbers and see shapes in real-time.
- Shapes displayed based on number properties:
  - **Square**: Displayed if the number is divisible by 2.
  - **Rectangle**: Displayed if the number is divisible by 3.
  - **Triangle**: Displayed if the number is an odd number less than 10.
  - **Circle**: Displayed if the number is a prime number.
- Color coding of shapes:
  - Inside of shape is filled with green if the number is odd.
  - Background color is red if the number is even.
  - Background color is gray if the number is greater than 50.

## How to Use
1. Enter a series of numbers separated by commas in the input field.
2. Click the "Submit" button or press the Enter key.
3. View the generated shapes corresponding to each number.

## Example Inputs and Outputs
- Input: `4`  
  Output: Square (Background: Default)
- Input: `9`  
  Output: Triangle (Color: Green, Background: Default)
- Input: `17`  
  Output: Circle (Color: Green, Background: Default)
- Input: `51`  
  Output: (Shape based on divisibility logic, Background: Light gray)

## Testing
For testing purposes, use these numbers: `4, 9, 17, 51, 24, 35, 13, 30, 55, 23`.

## Technology Stack
- HTML
- CSS
- JavaScript

## Setup and Installation
No additional setup is required. Simply open the HTML file in a modern web browser to use the application.

## Browser Compatibility
The application is compatible with modern web browsers like Chrome, Firefox, Safari, and Edge.

## License
[Specify the license here, if applicable]

## Author
[Your Name]
