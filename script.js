//your JS code here. If required.
// Find the element with id "level"
const targetElement = document.getElementById("level");

// Initialize a variable to keep track of the DOM level
let domLevel = 0;

// Traverse up the DOM tree
let currentElement = targetElement;
while (currentElement) {
  domLevel++;
  currentElement = currentElement.parentElement; // Move to the parent element
}

// Display the DOM level using alert
alert(`The level of the element is: ${domLevel}`);
