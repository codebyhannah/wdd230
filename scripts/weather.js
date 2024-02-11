const weatherIcon = document.querySelector(".weather-icon");
const weatherSpan = document.querySelector("#weather");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=43.61&lon=-116.20&appid=4d8ad0fd2f2cf1fbd37af642f19933c9&units=imperial";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    let currentTemp = `${parseFloat(data.main.temp).toFixed(0)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description.toLowerCase().replace(/\b\w/g, s => s.toUpperCase()); // I looked up how to do title case because it didn't look as nice all lowercase.
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);

    weatherSpan.innerHTML = `${currentTemp} - ${desc}`;
}

apiFetch();

