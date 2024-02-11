const baseUrl = "https://codebyhannah.github.io/wdd230/";
const linksUrl = "https://codebyhannah.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksUrl);
    const data = await response.json();
    console.log(data);
}

getLinks();