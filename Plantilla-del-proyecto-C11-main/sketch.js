//Variables
  var path, boy, leftBoundary, rightBoundary;
  var pathImg, boyImg;
  var i;

//Precargado
  function preload(){
    //Cargar imagenes
      pathImg = loadImage("path.png");
      boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  }

//Inicio
  function setup(){
    //Crear el Canvas
      createCanvas(400,400);
    
    // Mover el fondo
      path=createSprite(200,200);
      path.addImage(pathImg);
      path.velocityY = 4;
      path.scale=1.2;

    //crear sprite de niño corriendo
      boy = createSprite(180,340,30,30);
      boy.scale=0.08;
      boy.addAnimation("JakeRunning",boyImg);
  
    //Crear Limites
      //Izquierdo
        leftBoundary = createSprite(0,0,100,800);
        leftBoundary.visible = false;
      //Derecho
        rightBoundary=createSprite(410,0,100,800);
        rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //código para reiniciar el fondo

  if(path.y > 400 ){
    path.y = height/4;
  }
  
  drawSprites();
}
