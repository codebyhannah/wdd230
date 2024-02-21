const hamburgerElement = document.querySelector("#menuButton");
const navElement = document.querySelector(".menuLinks");
const header = document.querySelector("header");
const join = document.querySelector(".join");

hamburgerElement.addEventListener("click", () => {
    navElement.classList.toggle("open");
    hamburgerElement.classList.toggle("open");
    header.classList.toggle("open");
    join.classList.toggle("open");
})