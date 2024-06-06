let palavra;

function setup() {
  createCanvas(400, 400);
  
  
  let palavras=["Respeito","Obediéncia","educação"];
  palavra=random(palavra);
   
}

function inicializaCores() {
   background("white");
  fill ("black")
  textSize(64)
  textAlign(CENTER,CENTER);
  
}

function draw() {
  inicializaCores();
  
  
  let maximo="width"
  let minimo=0;
  let palavra ="Respeito";
  let quantidade = map(mouseX, 0, width,1,palavra.length);
  let parcial = palavra.substring (0, quantidade);
  text (parcial,200,200);
  
  
  
}