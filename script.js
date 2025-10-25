const button = document.querySelector("button");
button.addEventListener("click",()=>{
    alert("hello you");
})


const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 520;
canvas.height = 440;
canvas.style.background = "#000000ff";
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



   

//alert("hello");