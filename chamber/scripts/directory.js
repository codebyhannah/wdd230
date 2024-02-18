const baseUrl = "https://codebyhannah.github.io/wdd230/";
const membersUrl = "https://codebyhannah.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(membersUrl);
    const data = await response.json();
    displayMembers(data);
}

const directory = document.querySelector("#directory");

function displayMembers(data) {
    data.members.forEach(member => {
        const section = document.createElement("section");
        section.setAttribute("class", "card");

        let name = member.name;
        let address = member.address;
        let phoneNum = member.phoneNum;
        let url = member.url;
        let imageSrc = member.image;

        section.innerHTML = `<div class="contents"><img src="${imageSrc}" alt="${name}"><p class="name">${name}</p><p class="address">${address}</p><p class="phoneNum">${phoneNum}</p><p class="url">${url}</p></div>`;

        directory.appendChild(section);
    });
}

getMembers();

const gridButton = document.querySelector("#gridButton");
const listButton = document.querySelector("#listButton");
const gridListElement = document.querySelector("#directory");

function gridToggle() {
    gridButton.classList.toggle("grid");
    listButton.classList.toggle("list");
}

gridButton.addEventListener("click", () => {
    gridButton.classList.add("grid");
    listButton.classList.remove("list");
    gridListElement.classList.add("grid");
    gridListElement.classList.remove("list");
});

listButton.addEventListener("click", () => {
    listButton.classList.add("list");
    gridButton.classList.remove("grid");
    gridListElement.classList.add("list");
    gridListElement.classList.remove("grid");
});