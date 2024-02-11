const baseUrl = "https://codebyhannah.github.io/wdd230/";
const linksUrl = "https://codebyhannah.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksUrl);
    const data = await response.json();
    displayLinks(data);
}

const linksList = document.querySelector(".learningActs")

function displayLinks(data) {
    data.weeks.forEach(week => {
        let listWeek = document.createElement("li");
        let weekNum = document.createElement("span");
        weekNum.innerText = `${week.week}: `;
        listWeek.appendChild(weekNum);
        week.links.forEach(link => {
            const aLink = document.createElement("a");
            aLink.setAttribute("href", link.url);
            aLink.setAttribute("target", "_blank");
            aLink.innerText = link.title;
            listWeek.appendChild(aLink);
            if (week.links.indexOf(link) != week.links.length-1)
            {
                listWeek.innerHTML += " | ";
            }
        });
        linksList.appendChild(listWeek);
    });
}

getLinks();