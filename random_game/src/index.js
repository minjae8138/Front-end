const slider = document.querySelector("#rangeInput");
const title = document.querySelector("#title");
const guesss = document.querySelector("#guess");
const click = document.querySelector("#click");
const result = document.querySelector("#result");

function sliderHandler(event) {
    const currentValue = event.target.value
    title.innerText = `Genreate a number between 0 and ${currentValue}`
}

const btn = document.querySelector("#btn")
const inputvalue = document.querySelector("#input")

function guessNumber(event) {
    event.preventDefault();
    if (inputvalue.value === "") {
        return;
    }
    const rangeouput = slider.value;
    const currentValue = parseInt(inputvalue.value);
    const random = Math.floor(Math.random() * rangeouput);

    click.innerText = `You chose: ${currentValue}, machine chose: ${random}`
    if (currentValue === random) {
        result.innerText = "You Win"
    } else {
        result.innerText = "You Lose"
    }
};

function init() {
    btn.addEventListener("click", guessNumber)
    slider.addEventListener("change", sliderHandler);
}

init();
