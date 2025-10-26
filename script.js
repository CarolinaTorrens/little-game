const button = document.querySelector("button");
button.addEventListener("click",()=>{
    alert("hello you");
})


const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 620;
canvas.height = 540;
canvas.style.background = "#000000ff";

//INIT PAGE --------------------------------------------------------

//ctx.strokeStyle = "white";
//ctx.strokeRect(270,250,100,30);// EJE X, EJE Y, WIDTH, HEIGHT
//ctx.textAlign("start")

const buttonStart = {
    x: canvas.width / 2 - 75, //75 es la mitad del largo del button
    y: canvas.height / 2 - 25,
    width: 150,
    height: 50,
    text: 'START',
    color: 'white',
    font: '24px Arial'
};

function drawButton(){
    //dibuja el rectangulo
    ctx.strokeStyle = buttonStart.color;
    ctx.strokeRect(buttonStart.x, buttonStart.y, buttonStart.width, buttonStart.height);

    //dibuja texto "START"
    ctx.fillStyle = 'white';
    ctx.font = buttonStart.font;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle'; 

    //dibuja el texto en el centro del rectangulo
    ctx.fillText(
        buttonStart.text,
        buttonStart.x + buttonStart.width / 2, //esto agarra la posicion x del button y le suma la mitad del  size del ancho del cuadrado 
        buttonStart.y + buttonStart.height / 2,
    );    
}



function drawStartScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas
    // Opcional: Dibuja el título del juego aquí...
   
    
    drawButton();
}

drawStartScreen();































/*
//Dibujar rectangulo blanco
ctx.fillStyle = "white";
ctx.fillRect(200,380,100,15);// EJE X, EJE Y, WIDTH, HEIGHT

// Dibuja un rectángulo y una elipse (formas compuestas) de color rosa
  ctx.fillStyle = "white";
  ctx.ellipse(200, 125, 10, 10, Math.PI / 3, 0, 2 * Math.PI);
  ctx.fill();

//---------------
    ctx.beginPath();
    ctx.moveTo(75, 50);//EJE X , EJE Y
    ctx.lineTo(100, 75); //EJE X , EJE Y
    ctx.lineTo(100, 25);//EJE X , EJE Y
    ctx.fill();

    */


   

//alert("hello");