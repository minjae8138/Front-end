// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const selectCountry = document.querySelector(".country");



function saveCountry() {
    localStorage.setItem("country", selectCountry.value)
}

selectCountry.addEventListener("change", saveCountry);



function loadCountry() {
    const userCountry = localStorage.getItem("country");
    if (selectCountry !== null) {
        selectCountry.value = userCountry;
    }
}


function init() {
    loadCountry();
};

init();
