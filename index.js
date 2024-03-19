/*const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check if dark mode preference is saved in local storage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Set initial dark mode state based on the preference
if (isDarkMode) {
  enableDarkMode();
  darkModeToggle.checked = true;
}

// Toggle dark mode when the checkbox is clicked
darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    enableDarkMode();
    localStorage.setItem('darkMode', 'true');
  } else {
    disableDarkMode();
    localStorage.setItem('darkMode', 'false');
  }
});

// Function to enable dark mode
function enableDarkMode() {
  body.classList.add('dark-mode');
}

// Function to disable dark mode
function disableDarkMode() {
  body.classList.remove('dark-mode');
}
*/

// index.js
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        // Enable dark mode
        document.body.classList.add('dark-mode');
    } else {
        // Disable dark mode
        document.body.classList.remove('dark-mode');
    }
});


/*
const darkModeCheckbox = document.getElementById('darkModeCheckbox');
const toggleButton = document.getElementById('toggleButton');

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Event listener for checkbox change
darkModeCheckbox.addEventListener('change', function() {
  toggleDarkMode();
});

// Event listener for button click
toggleButton.addEventListener('click', function() {
  darkModeCheckbox.checked = !darkModeCheckbox.checked; // Toggle checkbox state
  toggleDarkMode();
});
*/