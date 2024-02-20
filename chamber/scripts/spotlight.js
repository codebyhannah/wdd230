const baseUrl = "https://codebyhannah.github.io/wdd230/";
const membersUrl = "https://codebyhannah.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(membersUrl);
    const data = await response.json();
    displaySpotlights(data);
}

const spotlightElem = document.querySelector("#spotlight");

function displaySpotlights(data) {

    let spotlights = [];
    for (let i = 0; i < 3; i++) {
        let random = data.members[Math.floor(Math.random() * data.members.length)];
        while((random.memLevel != "Gold" && random.memLevel != "Silver") || spotlights.includes(random)) {
            while (random.memLevel != "Gold" && random.memLevel != "Silver") {
                random = data.members[Math.floor(Math.random() * data.members.length)];
            }
            while (spotlights.includes(random)){
                random = data.members[Math.floor(Math.random() * data.members.length)];
            }
        }
        spotlights.push(random);
    }
    let i = 1;
    spotlights.forEach(member => {
        const section = document.createElement("section");

        let name = member.name;
        let spotlightInfo = member.spotlightInfo;
        let url = member.url;
        let imageSrc = member.image;

        section.innerHTML = `<div class="contents"><img src="${imageSrc}" alt="${name}"><div><h3 class="name"><a href="${url}">${name}</a></h3><p>${spotlightInfo}</p></div></div>`;

        if (i != spotlights.length) {
            section.innerHTML += "<hr>";
        }

        spotlightElem.appendChild(section);

        i++;
    });
}

getMembers();