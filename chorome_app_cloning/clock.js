const ClockContainers = document.querySelector('.js-clock')
const ClockTitle = ClockContainers.querySelector('h1')

function GetTime(){
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds(); 
ClockTitle.innerText = `${hours<10 ? `0${hours}` : hours} : ${minutes<10 ? `0${minutes}`:minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`
};

function init(){
    GetTime();
    setInterval(GetTime,1000); 
}

init();