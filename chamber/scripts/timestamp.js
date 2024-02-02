// Date in milliseconds
const today = Date.now();

// Set value of hidden form input #timestamp to current date
const timestamp = document.querySelector("#timestamp");

timestamp.value = today;