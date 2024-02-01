const pword1 = document.querySelector("#password");
const pword2 = document.querySelector("#password2");
const message = document.querySelector("#message");

pword2.addEventListener("change", checkSame);
pword2.addEventListener("input", checkSame);

function checkSame() {
    if (pword1.value !== pword2.value) {
        pword2.style.backgroundColor = "#fff0f3"; // Red
    } else if (pword1.value === "" && pword2.value === ""){
        pword2.style.backgroundColor = "#e5e5e5"; // Grey
    } else {
        pword2.style.backgroundColor = "#f0fff2"; // Green
        message.innerHTML = "";
    }
}

pword2.addEventListener("focusout", reCheck);

function reCheck() {
    if (pword1.value !== pword2.value) {
        pword1.value = "";
        pword2.value = "";
        pword1.focus();
        message.innerHTML = "Passwords do not match!";
    } else {
        message.innerHTML = "";
    }
}

const rateValue = document.querySelector("#rateValue");
const range = document.querySelector("#rating");

range.addEventListener("change", displayRateValue);
range.addEventListener("input", displayRateValue);

function displayRateValue() {
    rateValue.innerHTML = range.value;
}