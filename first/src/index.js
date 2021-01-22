const body = document.querySelector("body");
const colors = ["#3498db", "#9b59b6", "#f39c12"];

function handleColor(){
  const windowSize = window.innerWidth;
  if (windowSize  <700){
    body.style.backgroundColor = colors[0] ;
    console.log(windowSize)
  }
  else if(windowSize < 1000  ){
    body.style.backgroundColor = colors[1] ;
    console.log(windowSize)
  }
  else{
    body.style.backgroundColor = colors[2];
    console.log(windowSize)
  }
};

function init(){
  window.addEventListener("resize",handleColor)
};

init();