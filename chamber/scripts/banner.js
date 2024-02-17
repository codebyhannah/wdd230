function addBanner() {
    let day = getDayOfWeek();
    if (day == 1 || day == 2 || day ==3) {
        let banner = document.createElement("div");
        let contents = document.querySelector(".contents");
        let main = document.querySelector("main");

        let hero = document.querySelector("#hero");
        hero.classList.add("bannerOpen");

        banner.setAttribute("id", "banner");
        banner.setAttribute("class", "hero");
        banner.innerHTML = `<h3>Boise Chamber of Commerce Meet and Greet!</h3><button id="bannerButton">x</button><div class="desc"><p>The Boise Chamber of Commerce is hosting a meet and greet for our members and community this <span class="date"> Wednesday at 7:00 p.m.</span> Attend for a night of fun activities, networking, and promotion of local member businesses.</p><p class="visitors">Visitors Welcome!</p></div>`;
        main.insertBefore(banner, contents);

        const bannerButton = document.querySelector("#bannerButton");

        bannerButton.addEventListener("click", () => {
            banner.classList.toggle("hidden");
            hero.classList.toggle("bannerOpen");
        });
    }
}

function getDayOfWeek() {
    let date = new Date();
    let day = date.getDay();
    return day;
}

addBanner();