let currentYear = new Date().getFullYear();
document.getElementById("year").innerText = currentYear;

let lastModified = `Last Modified ${document.lastModified}`;
document.getElementById("lastModified").innerText = lastModified;