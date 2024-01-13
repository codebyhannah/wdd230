let currentYear = new Date().getFullYear();
document.getElementById("year").innerText = currentYear;

let lastModified = `Last modified ${document.lastModified}`;
document.getElementById("lastModified").innerText = lastModified;