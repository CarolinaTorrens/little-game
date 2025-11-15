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

const buttonStart = {
    x: canvas.width / 2 - 75, //75 es la mitad del largo del button
    y: canvas.height / 2 - 25,
    width: 150,
    height: 50,
    text: 'START',
    color: 'white',
    font: '24px Michroma'
};

let gameState = 'startScreen';


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

canvas.addEventListener('click', (e)=>{
    //obtiene la posicion del click en relacion con el canvas
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    console.log("posicion en pixeles dentro del canvas en eje x: ",mouseX);
    console.log("posicion en pixeles dentro del canvas en eje y: ",mouseY);

    console.log("coordenada x del boton: ",buttonStart.x);
    console.log("coordenada y del boton: ",buttonStart.y);
    
    //solo revisa el click si estamos en la pantalla de inicio
    if(gameState === 'startScreen'){

        /// Verifica si el clic está DENTRO de las coordenadas del botón
        const clickedButton = (
            mouseX >= buttonStart.x && 
            mouseX <= buttonStart.x + buttonStart.width &&
            mouseY >= buttonStart.y && 
            mouseY <= buttonStart.y + buttonStart.height

            
        );
        if (clickedButton){
            gameState = "playing";
            game(); //llama a la funcion game para empezar el juego
            

        }

    }
}
);
//------------------------------------------------------
drawStartScreen();

function game(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    let life = 3;
    if(life > 0){/*
        while(life > 0){
            level1(); //llama a la funcion del 1er nivel
        }; */
        ctx.fillText("You have 3 life go..", 250, 250);   
    }else{
        gameOver();
    }

    ctx.fillStyle = "white";
    ctx.fillRect(220, 300, 150, 15);
};



//----------------------------------------------------
function gameOver(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //dibuja texto "GAME OVER"
    ctx.fillStyle = 'white';
    ctx.font = buttonStart.font;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle'; 

    //dibuja el texto en el centro del rectangulo
    ctx.fillText("GAMER OVER", 200, 300);    
}


//------------------------------------------------------
function level1(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //dibuja texto "GAME OVER"
    /*
    ctx.fillStyle = 'white';
    ctx.font = buttonStart.font;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle'; 

    //dibuja el texto en el centro del rectangulo
    ctx.fillText("YOU ARE IN THE LEVEL 1", 200, 300);  */
};



















/**/ 
