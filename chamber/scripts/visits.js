// Gets the date last visited from local storage, gets today's date, and then calculates and displays the amount of days between visits, or displays an alternative message if it is the user's first visit or has been less than a day.

// Location to display in DOM
const visits = document.querySelector("#visits");

// Milliseconds per 1 day
const msToDays = 84600000;

// Date in milliseconds
const today = Date.now();

// Get date of user's last visit from localStorage
let lastVisitDate = Number(window.localStorage.getItem("lastVisitDate-ls")) || 0;

// Find interval between user visits in milliseconds and convert to days
let interval = Math.trunc((today - lastVisitDate) / msToDays);

// Display in DOM
if (lastVisitDate !== 0 && interval > 1) {
    visits.innerText = `You last visited ${interval} days ago.`
} else if (lastVisitDate !== 0 && interval === 1){
    visits.innerText = `You last visited ${interval} day ago.`
} else if (lastVisitDate !== 0 && interval < 1 ) {
    visits.innerText = "Back so soon! Awesome!";
} else {
    visits.innerText = "Welcome! Let us know if you have any questions";
}

// Store current date in localStorage as the last visit date
localStorage.setItem("lastVisitDate-ls", today);