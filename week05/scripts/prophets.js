const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector("#cards");

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    /*console.table(data.prophets);*/
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let info = document.createElement("div");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${fullName.textContent}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        let birthdate = document.createElement("p");
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        let birthplace = document.createElement("p");
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`

        info.appendChild(birthdate);
        info.appendChild(birthplace);

        card.appendChild(fullName);
        card.appendChild(info);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getProphetData();