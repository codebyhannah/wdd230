const currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=43.61&lon=-116.20&appid=4d8ad0fd2f2cf1fbd37af642f19933c9&units=imperial";

const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=43.61&lon=-116.20&appid=4d8ad0fd2f2cf1fbd37af642f19933c9&units=imperial";

async function apiFetch(url, displayResults, location, iconSize, date, dateLocation, time, dateHType, descHType) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data, location, iconSize, date, dateLocation, time, dateHType, descHType);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

let displayCurrentWeather = function (data, location, iconSize, date, dateLocation, time, dateHType, descHType) {

    const weatherDiv = document.querySelector(location);
    const weatherIcon = document.createElement("img");
    const details = document.createElement("div");
    const weatherDesc = document.createElement(descHType);
    const tempF = document.createElement("p");
    const tempC = document.createElement("p");

    let currentTempF = `${parseFloat(data.main.temp).toFixed(0)}&deg;F`;
    // Convert from degrees F to degrees C.
    let currentTempC = `${((parseFloat(data.main.temp)-32)*5/9).toFixed(0)}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}${iconSize}.png`;
    let desc = data.weather[0].description.toLowerCase().replace(/\b\w/g, s => s.toUpperCase()); 
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    details.setAttribute("class", "details");
    weatherDesc.innerHTML = `${desc}`;
    tempF.innerHTML = `${currentTempF}`;
    tempC.innerHTML = `${currentTempC}`;

    if (date != "") {
        const dateElem = document.createElement(dateHType);
        let day = `${dayOfWeek(date.getDay())} ${month(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`;
        dateElem.innerHTML = day;
        dateLocation.appendChild(dateElem);
    }

    if (time != "") {
        const timeElem = document.createElement("p");
        timeElem.innerHTML = `${time}`;
        dateLocation.appendChild(timeElem);
    }
    weatherDiv.appendChild(weatherIcon);
    details.appendChild(weatherDesc);
    details.appendChild(tempF);
    details.appendChild(tempC);
    weatherDiv.appendChild(details);
}

let displayForecast = function (data) {
    const forecastDiv = document.querySelector("div.forecast");

    // The data in data.list[0].dt from the JSON retrieved from the openweathermap.org five day weather forecast api is incorrect. It gives the date in miliseconds since the Unix Epoch, but for some reason it is giving me a date from the 1970's. I have triple checked conversion, and tried online converters as well. All give the same result. The data in data.list[0].dt_txt, however, gives the correct date and year when I use new Date() on it. Therefore, all date related calculations will be done with data.list[0].dt_txt instead of data.list[0].dt.
    /*
    // Example of how wrong it is:
    console.log("wrong")
    console.log(data.list[0].dt);
    console.log(new Date(data.list[0].dt));
    console.log("correct")
    console.log(data.list[0].dt_txt)
    console.log(new Date(data.list[0].dt_txt));
    */

    let forecast = document.createElement("h3");
    forecast.innerHTML = "Forecast"
    let hr = document.createElement("hr");

    forecastDiv.appendChild(forecast);
    //forecastDiv.appendChild(hr);

    let i = 0
    data.list.forEach(forecast => {
        let date = new Date(forecast.dt_txt);
        if (date.getHours() == 6 || date.getHours() == 12)  {
            let time = ``;

            if (date.getHours() == 6) {
                time = `Morning: ${date.getHours()}:00 AM`;
            }else if (date.getHours() == 12) {
                time = `Noon: ${date.getHours()}:00 PM`;
            }

            let dispDate = "";

            if ((i-2 >= 0 && new Date(data.list[i-2].dt_txt).getHours() == 6) &&(new Date(data.list[i-2].dt_txt).getDay() == date.getDay())) {
                dispDate = "";
            } else {
                dispDate = new Date(forecast.dt_txt)
                let hr2 = document.createElement("hr");
                forecastDiv.appendChild(hr2);
            }
            
            displayCurrentWeather(forecast, "div.forecast", "", dispDate, forecastDiv, time, "h4", "h5");
        }
        i++;
    });
}


let dayOfWeek = function (day) {
    switch (day) {
        case 0:
            return "Sun.";
        case 1:
            return "Mon.";
        case 2:
            return "Tues.";
        case 3:
            return "Wed.";
        case 4:
            return "Thurs.";
        case 5:
            return "Fri.";
        case 6:
            return "Sat.";
    }
}

let month = function (month) {
    switch (month) {
        case 0:
            return "Jan.";
        case 1:
            return "Feb.";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "Aug.";
        case 8:
            return "Sept.";
        case 9:
            return "Oct.";
        case 10:
            return "Nov.";
        case 11:
            return "Dec.";
    }
}

apiFetch(currentWeatherUrl, displayCurrentWeather, "div.weather", "@2x", new Date(), document.querySelector("#weather .date"), "", "h3", "h4");

apiFetch(forecastUrl, displayForecast);