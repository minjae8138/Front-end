// import "./styles.css";

// You're gonna need this
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h2")
const dayParameter = 1000 * 60 * 60 * 24,
  hourParameter = 1000 * 60 * 60,
  minuteParameter = 1000 * 60,
  secondParameter = 1000;

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900"),
    today = new Date(),
    counting = xmasDay - today;
  const days = Math.floor(counting / dayParameter),
    hours = Math.floor((counting / hourParameter) % 24),
    minutes = Math.floor((counting / minuteParameter) % 60),
    seconds = Math.floor((counting / secondParameter) % 60);
  clockTitle.innerText = `${days}d ${hours < 10 ? `0${hours}h` : `${hours}h`} ${minutes < 10 ? `0${minutes}m` : `${minutes}m`} ${seconds < 10 ? `0${seconds}s` : `${seconds}s`}`
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
