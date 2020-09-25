var monkey,img,inv,screen,simg,stimg,bimg,stoneGroup,baGroup,ba,last;

function preload(){
  img = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png"); 
  
  simg = loadImage("jungle.jpg");
  
  stimg = loadImage("stone.png");
  
  bimg = loadImage("banana.png");
  
  last = loadImage("Monkey_01.png");
}

  

function setup() {
  createCanvas(400, 400);
  
 
  
  screen = createSprite(0,0,400,400);
  screen.addImage(simg);
  screen.x=screen.width/2;
  screen.velocityX=-5
  
  monkey = createSprite(100,250,55,55);
  monkey.addAnimation("running",img);
  monkey.scale=0.15
  
  inv = createSprite(200,280,400,10);
  inv.visible = false
  
  monkey.depth=inv.depth+1;
  
  stoneGroup = new Group();
  baGroup = new Group();
  
  gamestate = "play"
  
  count=0;
   
}

function draw() {
  background(220);
  
   monkey.collide(inv);
  monkey.velocityY=monkey.velocityY+1.5
  
 
  
  
  
  if (gamestate === "play"){  
    
    
    if (keyDown("space")&&(monkey.y>230)){
      monkey.velocityY=-15
      }
     
    if (screen.x<0){
    screen.x=screen.width/2;
  }
    if (monkey.isTouching(stoneGroup)){
      
    monkey.scale=monkey.scale-0.01 
    stoneGroup.destroyEach();
      }
    if (baGroup.isTouching(monkey)){
    count=count+1 
    ba.destroy();
      }
      } else if(gamestate === "stop"){
 screen.velocityX= 0
        monkey.velocityY=0
        monkey.scale=0.08
        stoneGroup.destroyEach();
        ba.x=450
        ba.destroy();
        monkey.addImage(last)
                }
  
 
  
  console.log();
  
 
  
  
  
 
  
  banana();
  obstacles();
  drawSprites();
  
   textFont("red");
   text("Your collection :"+count,200,50);
 
  if (monkey.scale<0.09){
text ("game over",150,200);
    text ("Final collection"+count ,130,230);
    gamestate = "stop"
  }
  
  
 
}

function obstacles(){
  if (frameCount%200===0){
        
    stone=createSprite(400,255,20,20);
    stone.addImage(stimg);
    stone.scale=0.2
    stone.velocityX=-7
    stone.lifetime=90
       stone.depth=monkey.depth-1  
    
    stoneGroup.add(stone);
      }
}
  
  function banana(){
  if (frameCount%60===0){
    
    
        
    ba=createSprite(400,random(255,100),20,20);
    ba.addImage(bimg);
    ba.scale=0.05
    ba.velocityX=-5
    ba.lifetime=90
    ba.depth=monkey.depth-1
  
    baGroup.add(ba);
}
  }