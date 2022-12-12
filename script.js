// Elements
let barra = document.getElementsByClassName('backgroundbar')[0];
let pointer = document.getElementsByClassName('pointer')[0];
let correctBar = document.getElementsByClassName('correctbar')[0];

// Sizes
let tamanhoBarra = barra.offsetWidth;
let tamanhoCorrectBar = correctBar.offsetWidth;

// Positions
let posicaoCorrectBar = correctBar.offsetLeft;
let posicaoPointer = pointer.offsetLeft;
console.log(posicaoPointer);

console.log(Math.floor(Math.random() * 200))

// Calls
var posicaoGerada = randomIntFromInterval(150, tamanhoBarra-tamanhoCorrectBar);
posicaoAleatoriaCorrectBar();

// clearInterval(animationPointer);

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function posicaoAleatoriaCorrectBar () {
    var posicaoGerada = randomIntFromInterval(150, tamanhoBarra-tamanhoCorrectBar);
    console.log("Posição gerada: " + posicaoGerada);
    document.getElementsByClassName('correctbar')[0].style.left = posicaoGerada + "px";
}

const refreshRate = 1000 / 60;
const maxXPosition = 590;
let speedX = 15;
let positionX = 5;

window.setInterval(() => {
  positionX = positionX + speedX;
  if (positionX > maxXPosition || positionX < 0) {
    speedX = speedX * (-1);
  }
  pointer.style.left = positionX + 'px';
}, refreshRate);

function checarAcerto() {
    if (positionX >= posicaoGerada && positionX <= posicaoGerada+tamanhoCorrectBar) {
        wait(500);
        window.location.reload();
    }
    else {
        wait(500);
        window.location.reload();
    }
}

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
    }
}

window.addEventListener('keyup', (event) => {
    if (event.key === 'e') {
        checarAcerto();
    }
})