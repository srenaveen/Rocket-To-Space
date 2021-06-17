var level = 1; 
var backgroundImage, grass, grassI, tower, towerI, rocket, atlas,fire,fireI,capsule,StarLiner,launch,Button,rand;
var b1,b2,b3,b4,success,s,fail,t,dragon,sls,orion,woa;
var num=0;
var numb = 0;
var numbe = 0;
var number = 0;
var number2 = 0;
var gameState = 0;
var table1,t1,t2,t3;
var thrust;
var thrustTime = 100;
var Payload = 15000;
var PayloadM;
var levels;
var falconH;
function preload(){
  backgroundImage = loadImage("Back.png");
  grassI = loadImage("Grass.webp");
  towerI = loadImage("Tower.png");
  atlas = loadImage("Atlas.png");
  StarLiner = loadImage("Starliner.png");
  fireI = loadAnimation("f1.png","f2.png","f3png","f4.png","f5.png","f6.png");
  launch = loadImage("Launch.png");
  t1 = loadImage("Table1.png");
  success = loadImage("SUCCESS!.png");
  fail = loadImage("Fail.png");
  falconH = loadImage("FalconH.png");
  t2 = loadImage("table2.png");
  dragon = loadImage("CrewDragon.png");
  sls = loadImage("SLS.png");
  t3 = loadImage("table3.png");
  orion = loadImage("Orion.png");
  woa = loadImage("WOA.png");
}
function setup() {
  
  createCanvas(displayWidth-20,displayHeight-20);
  grass = createSprite(300,500,1000,40);
  grass.addImage(grassI);
  grass.scale = 2;
  tower = createSprite(500,480,100,500);
  tower.addImage(towerI);
  tower.scale = 2;
  rocket = createSprite(500,480,100,500);
  rocket.addImage(atlas);
  rocket.scale = 0.5;
  fire = createSprite(500,590,100,100);
  fire.addAnimation("fire",fireI);
  fire.scale = 1.5;
  fire.rotate;
  fire.visible = false;
  capsule = createSprite(500,300,200,200);
  capsule.addImage(StarLiner);
  capsule.scale = 0.25;
  capsule.visible = false;
  Button = createSprite(900,500,50,50);
  Button.addImage(launch);
  Button.scale = 0.5;
  Button.visible = false;
  rand = Math.round(random(1,5));
  table1 = createSprite(1000,300,50,50);
  table1.addImage(t1);
  table1.scale = 0.5;
  table1.visible = false;
  thrust = createInput("");
  thrust.position(960,250);
  thrust.size(100)
  thrust.hide();
  b1 = createButton();
  b1.position(200,400);
  b2 = createButton();
  b2.position(200,600);
  b3 = createButton();
  b3.position(600,400);
  b4 = createButton();
  b4.position(600,600);
  s = createSprite(700,300,100,100);
  s.visible = false;
  levels = createButton();
  levels.position(600,400);
  levels.hide();
  PayloadM = createInput("");
  PayloadM.position(960,340);
  PayloadM.size(100);
  PayloadM.hide();
}

function draw() {
  background(backgroundImage);  
  drawSprites();
  if(gameState === 0&&level === 1){
    textSize(30);
    stroke("white");
    strokeWeight(10);
    switch(rand){
      case 1: text("What is the most powerful rocket operating today?",300,100);
      //b1 = createButton('Atlas V');
      //b1.position(200,400);
      b1.style('font-size','30px');
      b1.style('background-color',"blue");
      b1.style('font-family','Initial');
      b1.html('Atlas V')
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('Falcon Heavy');
      //b2.position(200,600);
      b2.style('font-size','30px');
      b2.style('background-color',"blue");
      b2.style('font-family','Initial');
      b2.html('Falcon Heavy')
      b2.mousePressed(()=>{
        gameState = 1;
      });
      //b3 = createButton('Delta IV');
      //b3.position(600,400);
      b3.style('font-size','30px');
      b3.style('background-color',"blue");
      b3.style('font-family','Initial');
      b3.html('Delta IV')
      b3.mousePressed(()=>{
        gameState = 4;
      });
      //b4 = createButton('Falcon 9');
      //b4.position(600,600);
      b4.style('font-size','30px');
      b4.style('background-color',"blue");
      b4.style('font-family','Initial');
      b4.html('Falcon 9')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      break;
      case 2: text("What is the most powerful rocket Engine 1st stage ever created",200,100);
      //b1 = createButton('Saturn V');
      //b1.position(200,400);
      b1.style('font-size','30px');
      b1.style('background-color',"blue");
      b1.style('font-family','Initial');
      b1.html('Saturn V');
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('Falcon Heavy');
      //b2.position(200,600);
      b2.style('font-size','30px');
      b2.style('background-color',"blue");
      b2.style('font-family','Initial');
      b2.html('Falcon Heavy')
      b2.mousePressed(()=>{
        gameState = 4;
      });
      //b3 = createButton('Delta IV');
      //b3.position(600,400);
      b3.style('font-size','30px');
      b3.style('background-color',"blue");
      b3.style('font-family','Initial');
      b3.html('Delta IV')
      b3.mousePressed(()=>{
        gameState = 4;
      });
      //b4 = createButton('N1');
      //b4.position(600,600);
      b4.style('font-size','30px');
      b4.style('background-color',"blue");
      b4.style('font-family','Initial');
      b4.html('N1')
      b4.mousePressed(()=>{
        gameState = 1;
      });
      break;
      case 3: text("What is the first commercial partnership with NASA?",300,100);
      //b1 = createButton('Boeing');
      //b1.position(200,400);
      b1.style('font-size','30px');
      b1.style('background-color',"blue");
      b1.style('font-family','Initial');
      b1.html('Boeing');
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('SpaceX');
      //b2.position(200,600);
      b2.style('font-size','30px');
      b2.style('background-color',"blue");
      b2.style('font-family','Initial');
      b2.html('SpaceX')
      b2.mousePressed(()=>{
        gameState = 1;
      });
      //b3 = createButton('Virgin Galactic');
      //b3.position(600,400);
      b3.style('font-size','30px');
      b3.style('background-color',"blue");
      b3.style('font-family','Initial');
      b3.html('Virgin Galactic')
      b3.mousePressed(()=>{
        gameState = 4;
      });
      //b4 = createButton('Blue Origin');
      //b4.position(600,600);
      b4.style('font-size','30px');
      b4.style('background-color',"blue");
      b4.style('font-family','Initial');
      b4.html('Blue Origin')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      break;
      case 4: text("Who is creating Starship?",400,100);
      //b1 = createButton('Boeing');
      //b1.position(200,400);
      b1.style('font-size','30px');
      b1.style('background-color',"blue");
      b1.style('font-family','Initial');
      b1.html('Boeing');
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('SpaceX');
      //b2.position(200,600);
      b2.style('font-size','30px');
      b2.style('background-color',"blue");
      b2.style('font-family','Initial');
      b2.html('SpaceX')
      b2.mousePressed(()=>{
        gameState = 1;
      });
      //b3 = createButton('Virgin Galactic');
      //b3.position(600,400);
      b3.style('font-size','30px');
      b3.style('background-color',"blue");
      b3.style('font-family','Initial');
      b3.html('Virgin Galactic')
      b3.mousePressed(()=>{
        gameState = 4;
      });
      //b4 = createButton('Blue Origin');
      //b4.position(600,600);
      b4.style('font-size','30px');
      b4.style('background-color',"blue");
      b4.style('font-family','Initial');
      b4.html('Blue Origin')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      break;
      case 5: text("What is NASA's moon rocket called as?",300,100);
      //b1 = createButton('Starship');
      //b1.position(200,400);
      b1.style('font-size','30px');
      b1.style('background-color',"blue");
      b1.style('font-family','Initial');
      b1.html('Starship');
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('SuperHeavy');
      //b2.position(200,600);
      b2.style('font-size','30px');
      b2.style('background-color',"blue");
      b2.style('font-family','Initial');
      b2.html('SuperHeavy')
      b2.mousePressed(()=>{
        gameState = 4;
      });
      //b3 = createButton('SLS');
      //b3.position(600,400);
      b3.style('font-size','30px');
      b3.style('background-color',"blue");
      b3.style('font-family','Initial');
      b3.html('SLS')
      b3.mousePressed(()=>{
        gameState = 1;
      });
      //b4 = createButton('New Glenn');
      //b4.position(600,600);
      b4.style('font-size','30px');
      b4.style('background-color',"blue");
      b4.style('font-family','Initial');
      b4.html('New Glenn')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      break;
      default:
        break;
    }
  }
  if(gameState===1&&level === 1){
    table1.visible = true;
    thrust.show();
    Button.visible = true;
    var thr = thrust.value();
    var total = thr*thrustTime/Payload;
    t = total;
    if(total < 200){
      s.addImage(fail);
    } else if(total > 200){
      s.addImage(success);
    }
    console.log(total);
    if(mousePressedOver(Button)&&thr<=51000){

      gameState = 2;
      //noLoop();
      thrust.hide();
      b1.hide();
      b2.hide();
      b3.hide();
      b4.hide();
      //loop();
      Button.visible = false;
      table1.visible = false;
    }
  }
  if(gameState === 2&&level === 1){
    rocket.y = 250;
    fire.visible = true;
    tower.velocityY = 3;
    grass.velocityY = 3;
    gameState = 3;
  }
  if(gameState === 2&&level === 2){
    rocket.y = 250;
    fire.scale = 2;
    fire.y = 650;
    fire.visible = true;
    tower.velocityY = 3;
    grass.velocityY = 3;
    gameState = 3;
  }
  if(gameState === 2&&level === 3){
    rocket.y = 250;
    fire.scale = 2;
    fire.y = 650;
    fire.visible = true;
    tower.velocityY = 3;
    grass.velocityY = 3;
    gameState = 3;
  }
  if(gameState === 2&&level === 4){
    rocket.y = 250;
    fire.scale = 2.5;
    fire.y = 700;
    fire.visible = true;
    tower.velocityY = 3;
    grass.velocityY = 3;
    gameState = 3;
  }
  if(gameState === 2&&level === 5){
    rocket.y = 250;
    fire.scale = 2.5;
    fire.y = 700;
    fire.visible = true;
    tower.velocityY = 3;
    grass.velocityY = 3;
    gameState = 3;
  }
  if(gameState === 3&&level === 1){
    for(var i = 0;i<=100;i++){
      num = num+1;
    }
    console.log(num);
    if(num === 30300){
      fire.visible = false;
      rocket.velocityY = 8;
      capsule.visible = true;
      capsule.x = 500;
      capsule.y = 300;
      capsule.velocityX = 3;
      capsule.velocityY = -1;
      if(t > 200){
        s.depth = capsule.depth;
        s.depth = s.depth-1;
        s.visible = true;
        levels.html('level 2');
        levels.show();
        levels.mousePressed(()=>{
          level = 2;
          gameState = 0;
        });
      }
      if(t < 200){
        s.addImage(fail);
        s.depth = capsule.depth;
        s.depth = s.depth-1;
        s.visible = true;
      }
      
    }
  } 
  if(gameState === 3&&level === 2){
    for(var i = 0;i<=100;i++){
      numb = numb+1;
    }
    console.log(num);
    if(numb === 30300){
      fire.visible = false;
      rocket.velocityY = 8;
      capsule.visible = true;
      capsule.x = 500;
      capsule.y = 300;
      capsule.velocityX = 3;
      capsule.velocityY = -1;
      if(t > 200){
        s.depth = capsule.depth;
        s.depth = s.depth-1;
        s.visible = true;
        levels.html('level 3');
        levels.show();
        levels.mousePressed(()=>{
          level = 3;
          gameState = 0;
        });
      }
      if(t < 200){
        s.addImage(fail);
        s.depth = capsule.depth;
        s.depth = s.depth-1;
        s.visible = true;
      }
      
    }
  } 
  if(gameState === 3&&level === 3){
    for(var i = 0;i<=100;i++){
      numbe = numbe+1;
    }
    console.log(num);
    if(numbe === 30300){
      fire.visible = false;
      rocket.velocityY = 8;
      capsule.visible = true;
      capsule.x = 500;
      capsule.y = 300;
      capsule.velocityX = 3;
      capsule.velocityY = -1;
      if(t > 200){
        s.depth = capsule.depth;
        s.depth = s.depth-1;
        s.visible = true;
        levels.html('level 4');
        levels.show();
        levels.mousePressed(()=>{
          level = 4;
          gameState = 0;
        });
      }
      if(t < 200){
        s.addImage(fail);
        s.depth = capsule.depth;
        s.depth = s.depth-1;
        s.visible = true;
      }
      
    }
  } 
  if(gameState === 3&&level === 4){
    for(var i = 0;i<=100;i++){
      number = number+1;
    }
    console.log(num);
    if(number === 30300){
      fire.visible = false;
      rocket.velocityY = 8;
      capsule.visible = true;
      capsule.x = 500;
      capsule.y = 300;
      capsule.velocityX = 3;
      capsule.velocityY = -1;
      if(t > 200){
        s.depth = capsule.depth;
        s.depth = s.depth-1;
        s.visible = true;
        levels.html('level 5');
        levels.show();
        levels.mousePressed(()=>{
          level = 5;
          gameState = 0;
        });
      }
      if(t < 200){
        s.addImage(fail);
        s.depth = capsule.depth;
        s.depth = s.depth-1;
        s.visible = true;
      }
      
    }
  } 
  if(gameState === 3&&level === 5){
    for(var i = 0;i<=100;i++){
      number2 = number2+1;
    }
    console.log(num);
    if(number2 === 30300){
      fire.visible = false;
      rocket.velocityY = 8;
      capsule.visible = true;
      capsule.x = 500;
      capsule.y = 300;
      capsule.velocityX = 3;
      capsule.velocityY = -1;
      if(t > 200){
        s.depth = capsule.depth;
        s.depth = s.depth-1;
        s.visible = true;
      }
      if(t < 200){
        s.addImage(fail);
        s.depth = capsule.depth;
        s.depth = s.depth-1;
        s.visible = true;
      }
      
    }
  } 
  if(gameState === 0&&level === 2){
    s.visible = false;
    levels.hide();
    grass.velocityY = 0;
    grass.x = 600;
    grass.y = 500;
    tower.velocityY = 0;
    tower.x = 500;
    tower.y = 480;
    rocket.addImage(falconH);
    rocket.scale = 0.4;
    rocket.velocityY = 0;
    rocket.x = 500;
    rocket.y = 470;
    textSize(30);
    stroke("white");
    strokeWeight(10);
    switch(rand){
      case 1: text("Which one is a rocket by the ULA?",300,100);
      //b1 = createButton('Atlas V');
      //b1.position(200,400);
      b1.html('Atlas V')
      b1.mousePressed(()=>{
        gameState = 1;
      });
      //b2 = createButton('Falcon Heavy');
      //b2.position(200,600);
      b2.html('Falcon Heavy')
      b2.mousePressed(()=>{
        gameState = 4;
      });
      //b3 = createButton('Delta IV');
      //b3.position(600,400);
      b3.html('New Glenn')
      b3.mousePressed(()=>{
        gameState = 4;
      });
      //b4 = createButton('Falcon 9');
      //b4.position(600,600);
      b4.html('Falcon 9')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      b1.show();
      b2.show();
      b3.show();
      b4.show();
      break;
      case 2: text("What is the rocket used in the Apollo Mission?",200,100);
      //b1 = createButton('Saturn V');
      //b1.position(200,400);
      b1.html('Saturn V');
      b1.mousePressed(()=>{
        gameState = 1;
      });
      //b2 = createButton('Falcon Heavy');
      //b2.position(200,600);
      b2.html('Falcon Heavy')
      b2.mousePressed(()=>{
        gameState = 4;
      });
      //b3 = createButton('Delta IV');
      //b3.position(600,400);
      b3.html('Delta IV')
      b3.mousePressed(()=>{
        gameState = 4;
      });
      //b4 = createButton('N1');
      //b4.position(600,600);
      b4.html('N1')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      b1.show();
      b2.show();
      b3.show();
      b4.show();
      break;
      case 3: text("What Company is onwed by the richest person in the world?",300,100);
      //b1 = createButton('Boeing');
      //b1.position(200,400);
      b1.html('Boeing');
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('SpaceX');
      //b2.position(200,600);
      b2.html('SpaceX')
      b2.mousePressed(()=>{
        gameState = 1;
      });
      //b3 = createButton('Virgin Galactic');
      //b3.position(600,400);
      b3.html('Virgin Galactic')
      b3.mousePressed(()=>{
        gameState = 4;
      });
      //b4 = createButton('Blue Origin');
      //b4.position(600,600);
      b4.html('Blue Origin')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      b1.show();
      b2.show();
      b3.show();
      b4.show();
      break;
      case 4: text("Who is creating New Glenn?",400,100);
      //b1 = createButton('Boeing');
      //b1.position(200,400);
      b1.html('Boeing');
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('SpaceX');
      //b2.position(200,600);
      b2.html('SpaceX')
      b2.mousePressed(()=>{
        gameState = 4;
      });
      //b3 = createButton('Virgin Galactic');
      //b3.position(600,400);
      b3.html('Virgin Galactic')
      b3.mousePressed(()=>{
        gameState = 4;
      });
      //b4 = createButton('Blue Origin');
      //b4.position(600,600);
      b4.html('Blue Origin')
      b4.mousePressed(()=>{
        gameState = 1;
      });
      b1.show();
      b2.show();
      b3.show();
      b4.show();
      break;
      case 5: text("What is SpaceX's Mars rocket called as?",300,100);
      //b1 = createButton('Starship');
      //b1.position(200,400);
      b1.html('Starship');
      b1.mousePressed(()=>{
        gameState = 1;
      });
      //b2 = createButton('SuperHeavy');
      //b2.position(200,600);
      b2.html('SuperHeavy')
      b2.mousePressed(()=>{
        gameState = 4;
      });
      //b3 = createButton('SLS');
      //b3.position(600,400);
      b3.html('SLS')
      b3.mousePressed(()=>{
        gameState = 4;
      });
      //b4 = createButton('New Glenn');
      //b4.position(600,600);
      b4.html('New Glenn')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      b1.show();
      b2.show();
      b3.show();
      b4.show();
      break;
      default:
        break;
    }
  }
  if(gameState === 0&&level === 3){
    s.visible = false;
    levels.hide();
    grass.velocityY = 0;
    grass.x = 600;
    grass.y = 500;
    tower.velocityY = 0;
    tower.x = 500;
    tower.y = 480;
    rocket.addImage(falconH);
    rocket.scale = 0.4;
    rocket.velocityY = 0;
    rocket.x = 500;
    rocket.y = 470;
    capsule.addImage(dragon);
    textSize(30);
    stroke("white");
    strokeWeight(10);
    switch(rand){
      case 1: text("What launches like a rocket and lands like a aeroplane?",300,100);
      //b1 = createButton('Atlas V');
      //b1.position(200,400);
      b1.html('Space Plane')
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('Falcon Heavy');
      //b2.position(200,600);
      b2.html('Space Jet')
      b2.mousePressed(()=>{
        gameState = 4;
      });
      //b3 = createButton('Delta IV');
      //b3.position(600,400);
      b3.html('Space Shuttle')
      b3.mousePressed(()=>{
        gameState = 1;
      });
      //b4 = createButton('Falcon 9');
      //b4.position(600,600);
      b4.html('Fly Shuttle')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      b1.show();
      b2.show();
      b3.show();
      b4.show();
      break;
      case 2: text("What is name of the first rocket of the falcon family?",200,100);
      //b1 = createButton('Saturn V');
      //b1.position(200,400);
      b1.html('Falcon 9');
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('Falcon Heavy');
      //b2.position(200,600);
      b2.html('Falcon Heavy')
      b2.mousePressed(()=>{
        gameState = 4;
      });
      //b3 = createButton('Delta IV');
      //b3.position(600,400);
      b3.html('Falcon Basic')
      b3.mousePressed(()=>{
        gameState = 4;
      });
      //b4 = createButton('N1');
      //b4.position(600,600);
      b4.html('Falcon 1')
      b4.mousePressed(()=>{
        gameState = 1;
      });
      b1.show();
      b2.show();
      b3.show();
      b4.show();
      break;
      case 3: text("What Company is owned by the same person who owns Amazon?",300,100);
      //b1 = createButton('Boeing');
      //b1.position(200,400);
      b1.html('Boeing');
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('SpaceX');
      //b2.position(200,600);
      b2.html('SpaceX')
      b2.mousePressed(()=>{
        gameState = 4;
      });
      //b3 = createButton('Virgin Galactic');
      //b3.position(600,400);
      b3.html('Virgin Galactic')
      b3.mousePressed(()=>{
        gameState = 4;
      });
      //b4 = createButton('Blue Origin');
      //b4.position(600,600);
      b4.html('Blue Origin')
      b4.mousePressed(()=>{
        gameState = 1;
      });
      b1.show();
      b2.show();
      b3.show();
      b4.show();
      break;
      case 4: text("Who is creating Starliner CST 100?",400,100);
      //b1 = createButton('Boeing');
      //b1.position(200,400);
      b1.html('Boeing');
      b1.mousePressed(()=>{
        gameState = 1;
      });
      //b2 = createButton('SpaceX');
      //b2.position(200,600);
      b2.html('SpaceX')
      b2.mousePressed(()=>{
        gameState = 4;
      });
      //b3 = createButton('Virgin Galactic');
      //b3.position(600,400);
      b3.html('Virgin Galactic')
      b3.mousePressed(()=>{
        gameState = 4;
      });
      //b4 = createButton('Blue Origin');
      //b4.position(600,600);
      b4.html('Blue Origin')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      b1.show();
      b2.show();
      b3.show();
      b4.show();
      break;
      case 5: text("What is Nasa's Moon capsule called as?",300,100);
      //b1 = createButton('Starship');
      //b1.position(200,400);
      b1.html('Starliner');
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('SuperHeavy');
      //b2.position(200,600);
      b2.html('Crew Dragon')
      b2.mousePressed(()=>{
        gameState = 4;
      });
      //b3 = createButton('SLS');
      //b3.position(600,400);
      b3.html('Orion')
      b3.mousePressed(()=>{
        gameState = 1;
      });
      //b4 = createButton('New Glenn');
      //b4.position(600,600);
      b4.html('SLS')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      b1.show();
      b2.show();
      b3.show();
      b4.show();
      break;
      default:
        break;
    }
  }
  if(gameState === 0&&level === 4){
    s.visible = false;
    levels.hide();
    grass.velocityY = 0;
    grass.x = 600;
    grass.y = 500;
    tower.velocityY = 0;
    tower.x = 500;
    tower.y = 480;
    rocket.addImage(sls);
    rocket.scale = 0.6;
    rocket.velocityY = 0;
    rocket.x = 500;
    rocket.y = 430;
    capsule.addImage(dragon);
    textSize(30);
    stroke("white");
    strokeWeight(10);
    switch(rand){
      case 1: text("Which one is a name of a Space Shuttle?",300,100);
      //b1 = createButton('Atlas V');
      //b1.position(200,400);
      b1.html('Apollo');
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('Falcon Heavy');
      //b2.position(200,600);
      b2.html('Delta')
      b2.mousePressed(()=>{
        gameState = 4;
      });
      //b3 = createButton('Delta IV');
      //b3.position(600,400);
      b3.html('Revenderous')
      b3.mousePressed(()=>{
        gameState = 4;
      });
      //b4 = createButton('Falcon 9');
      //b4.position(600,600);
      b4.html('Atlantis')
      b4.mousePressed(()=>{
        gameState = 1;
      });
      b1.show();
      b2.show();
      b3.show();
      b4.show();
      break;
      case 2: text("Which one is an existing rocket(not in testing)?",200,100);
      //b1 = createButton('Saturn V');
      //b1.position(200,400);
      b1.html('Starship');
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('Falcon Heavy');
      //b2.position(200,600);
      b2.html('SLS')
      b2.mousePressed(()=>{
        gameState = 4;
      });
      //b3 = createButton('Delta IV');
      //b3.position(600,400);
      b3.html('New Shepperd')
      b3.mousePressed(()=>{
        gameState = 1;
      });
      //b4 = createButton('N1');
      //b4.position(600,600);
      b4.html('New Glenn')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      b1.show();
      b2.show();
      b3.show();
      b4.show();
      break;
      case 3: text("What Country was the first to put a human space?",300,100);
      //b1 = createButton('Boeing');
      //b1.position(200,400);
      b1.html('Soviet Union');
      b1.mousePressed(()=>{
        gameState = 1;
      });
      //b2 = createButton('SpaceX');
      //b2.position(200,600);
      b2.html('US')
      b2.mousePressed(()=>{
        gameState = 4;
      });
      //b3 = createButton('Virgin Galactic');
      //b3.position(600,400);
      b3.html('China')
      b3.mousePressed(()=>{
        gameState = 4;
      });
      //b4 = createButton('Blue Origin');
      //b4.position(600,600);
      b4.html('India')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      b1.show();
      b2.show();
      b3.show();
      b4.show();
      break;
      case 4: text("What company owns Spaceship 1&Spaceship 2?",400,100);
      //b1 = createButton('Boeing');
      //b1.position(200,400);
      b1.html('Boeing');
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('SpaceX');
      //b2.position(200,600);
      b2.html('SpaceX')
      b2.mousePressed(()=>{
        gameState = 4;
      });
      //b3 = createButton('Virgin Galactic');
      //b3.position(600,400);
      b3.html('Virgin Galactic')
      b3.mousePressed(()=>{
        gameState = 1;
      });
      //b4 = createButton('Blue Origin');
      //b4.position(600,600);
      b4.html('Blue Origin')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      b1.show();
      b2.show();
      b3.show();
      b4.show();
      break;
      case 5: text("What is 1st stage of SpaceX's mars rocket?",300,100);
      //b1 = createButton('Starship');
      //b1.position(200,400);
      b1.html('Starship');
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('SuperHeavy');
      //b2.position(200,600);
      b2.html('Super Heavy')
      b2.mousePressed(()=>{
        gameState = 1;
      });
      //b3 = createButton('SLS');
      //b3.position(600,400);
      b3.html('SLS 1st stg')
      b3.mousePressed(()=>{
        gameState = 4;
      });
      //b4 = createButton('New Glenn');
      //b4.position(600,600);
      b4.html('New Shepperd')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      b1.show();
      b2.show();
      b3.show();
      b4.show();
      break;
      default:
        break;
    }
  }
  if(gameState===1&&level === 1){
    table1.visible = true;
    thrust.show();
    Button.visible = true;
    var thr = thrust.value();
    var total = thr*thrustTime/Payload;
    t = total;
    if(total < 200){
      s.addImage(fail);
    } else if(total > 200){
      s.addImage(success);
    }
    console.log(total);
    if(mousePressedOver(Button)&&thr<=51000){

      gameState = 2;
      //noLoop();
      thrust.hide();
      b1.hide();
      b2.hide();
      b3.hide();
      b4.hide();
      //loop();
      Button.visible = false;
      table1.visible = false;
    }
  }
  if(gameState===1&&level === 2){
    table1.addImage(t2);
    table1.visible = true;
    thrust.show();
    PayloadM.show();
    Payload = PayloadM.value();
    Button.visible = true;
    var thr = thrust.value();
    var total = thr*thrustTime/Payload;
    t = total;
    //fire.scale = 2;
    //fire.y = fire.y+20;
    if(total < 200){
      s.addImage(fail);
    } else if(total > 200){
      s.addImage(success);
    }
    console.log(total);
    if(mousePressedOver(Button)&&thr<71000&&Payload<17100){

      gameState = 2;
      //noLoop();
      thrust.hide();
      PayloadM.hide();
      b1.hide();
      b2.hide();
      b3.hide();
      b4.hide();
      //loop();
      Button.visible = false;
      table1.visible = false;
    }
  }
  if(gameState === 1&&level === 3){
    table1.addImage(t2);
    table1.visible = true;
    thrust.show();
    PayloadM.show();
    Payload = PayloadM.value();
    Button.visible = true;
    var thr = thrust.value();
    var total = thr*thrustTime/Payload;
    t = total;
    //fire.scale = 2;
    //fire.y = fire.y+20;
    if(total < 200){
      s.addImage(fail);
    } else if(total > 200){
      s.addImage(success);
    }
    console.log(total);
    if(mousePressedOver(Button)&&thr<71000&&Payload<17100){

      gameState = 2;
      //noLoop();
      thrust.hide();
      PayloadM.hide();
      b1.hide();
      b2.hide();
      b3.hide();
      b4.hide();
      //loop();
      Button.visible = false;
      table1.visible = false;
    }
  }
  if(gameState === 0&&level === 4){
    s.visible = false;
    levels.hide();
    grass.velocityY = 0;
    grass.x = 600;
    grass.y = 500;
    tower.velocityY = 0;
    tower.x = 500;
    tower.y = 480;
    rocket.addImage(sls);
    rocket.scale = 0.6;
    rocket.velocityY = 0;
    rocket.x = 500;
    rocket.y = 430;
    capsule.addImage(dragon);
    textSize(30);
    stroke("white");
    strokeWeight(10);
    switch(rand){
      case 1: text("Which one is a name of a Space Shuttle?",300,100);
      //b1 = createButton('Atlas V');
      //b1.position(200,400);
      b1.html('Apollo');
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('Falcon Heavy');
      //b2.position(200,600);
      b2.html('Delta')
      b2.mousePressed(()=>{
        gameState = 4;
      });
      //b3 = createButton('Delta IV');
      //b3.position(600,400);
      b3.html('Revenderous')
      b3.mousePressed(()=>{
        gameState = 4;
      });
      //b4 = createButton('Falcon 9');
      //b4.position(600,600);
      b4.html('Atlantis')
      b4.mousePressed(()=>{
        gameState = 1;
      });
      b1.show();
      b2.show();
      b3.show();
      b4.show();
      break;
      case 2: text("Which one is an existing rocket(not in testing)?",200,100);
      //b1 = createButton('Saturn V');
      //b1.position(200,400);
      b1.html('Starship');
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('Falcon Heavy');
      //b2.position(200,600);
      b2.html('SLS')
      b2.mousePressed(()=>{
        gameState = 4;
      });
      //b3 = createButton('Delta IV');
      //b3.position(600,400);
      b3.html('New Shepperd')
      b3.mousePressed(()=>{
        gameState = 1;
      });
      //b4 = createButton('N1');
      //b4.position(600,600);
      b4.html('New Glenn')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      b1.show();
      b2.show();
      b3.show();
      b4.show();
      break;
      case 3: text("What Country was the first to put a human in space?",300,100);
      //b1 = createButton('Boeing');
      //b1.position(200,400);
      b1.html('Soviet Union');
      b1.mousePressed(()=>{
        gameState = 1;
      });
      //b2 = createButton('SpaceX');
      //b2.position(200,600);
      b2.html('US')
      b2.mousePressed(()=>{
        gameState = 4;
      });
      //b3 = createButton('Virgin Galactic');
      //b3.position(600,400);
      b3.html('China')
      b3.mousePressed(()=>{
        gameState = 4;
      });
      //b4 = createButton('Blue Origin');
      //b4.position(600,600);
      b4.html('India')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      b1.show();
      b2.show();
      b3.show();
      b4.show();
      break;
      case 4: text("What company owns Spaceship 1&Spaceship 2?",400,100);
      //b1 = createButton('Boeing');
      //b1.position(200,400);
      b1.html('Boeing');
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('SpaceX');
      //b2.position(200,600);
      b2.html('SpaceX')
      b2.mousePressed(()=>{
        gameState = 4;
      });
      //b3 = createButton('Virgin Galactic');
      //b3.position(600,400);
      b3.html('Virgin Galactic')
      b3.mousePressed(()=>{
        gameState = 1;
      });
      //b4 = createButton('Blue Origin');
      //b4.position(600,600);
      b4.html('Blue Origin')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      b1.show();
      b2.show();
      b3.show();
      b4.show();
      break;
      case 5: text("What is 1st stage of SpaceX's mars rocket?",300,100);
      //b1 = createButton('Starship');
      //b1.position(200,400);
      b1.html('Starship');
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('SuperHeavy');
      //b2.position(200,600);
      b2.html('Super Heavy')
      b2.mousePressed(()=>{
        gameState = 1;
      });
      //b3 = createButton('SLS');
      //b3.position(600,400);
      b3.html('SLS 1st stg')
      b3.mousePressed(()=>{
        gameState = 4;
      });
      //b4 = createButton('New Glenn');
      //b4.position(600,600);
      b4.html('New Shepperd')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      b1.show();
      b2.show();
      b3.show();
      b4.show();
      break;
      default:
        break;
    }
  }
  if(gameState === 0&&level === 5){
    s.visible = false;
    levels.hide();
    grass.velocityY = 0;
    grass.x = 600;
    grass.y = 500;
    tower.velocityY = 0;
    tower.x = 500;
    tower.y = 480;
    rocket.addImage(sls);
    rocket.scale = 0.6;
    rocket.velocityY = 0;
    rocket.x = 500;
    rocket.y = 430;
    capsule.addImage(orion);
    textSize(30);
    stroke("white");
    strokeWeight(10);
    switch(rand){
      case 1: text("What is the name of NASA's new moon program?",300,100);
      //b1 = createButton('Atlas V');
      //b1.position(200,400);
      b1.html('Apollo');
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('Falcon Heavy');
      //b2.position(200,600);
      b2.html('Artemis')
      b2.mousePressed(()=>{
        gameState = 1;
      });
      //b3 = createButton('Delta IV');
      //b3.position(600,400);
      b3.html('SLS')
      b3.mousePressed(()=>{
        gameState = 4;
      });
      //b4 = createButton('Falcon 9');
      //b4.position(600,600);
      b4.html('Orion')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      b1.show();
      b2.show();
      b3.show();
      b4.show();
      break;
      case 2: text("Wh0 is the rocket New Glenn named after?",200,100);
      //b1 = createButton('Saturn V');
      //b1.position(200,400);
      b1.html('A famous Astronomer');
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('Falcon Heavy');
      //b2.position(200,600);
      b2.html('A famous Astronaut')
      b2.mousePressed(()=>{
        gameState = 1;
      });
      //b3 = createButton('Delta IV');
      //b3.position(600,400);
      b3.html('A owner of the company')
      b3.mousePressed(()=>{
        gameState = 4;
      });
      //b4 = createButton('N1');
      //b4.position(600,600);
      b4.html('It is not named after anything')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      b1.show();
      b2.show();
      b3.show();
      b4.show();
      break;
      case 3: text("What Country is the only one to get people to the moon?",300,100);
      //b1 = createButton('Boeing');
      //b1.position(200,400);
      b1.html('Soviet Union');
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('SpaceX');
      //b2.position(200,600);
      b2.html('China')
      b2.mousePressed(()=>{
        gameState = 4;
      });
      //b3 = createButton('Virgin Galactic');
      //b3.position(600,400);
      b3.html('US')
      b3.mousePressed(()=>{
        gameState = 1;
      });
      //b4 = createButton('Blue Origin');
      //b4.position(600,600);
      b4.html('India')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      b1.show();
      b2.show();
      b3.show();
      b4.show();
      break;
      case 4: text("What company owns the falcon family",400,100);
      //b1 = createButton('Boeing');
      //b1.position(200,400);
      b1.html('Boeing');
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('SpaceX');
      //b2.position(200,600);
      b2.html('Blue Origin')
      b2.mousePressed(()=>{
        gameState = 4;
      });
      //b3 = createButton('Virgin Galactic');
      //b3.position(600,400);
      b3.html('Virgin Galactic')
      b3.mousePressed(()=>{
        gameState = 4;
      });
      //b4 = createButton('Blue Origin');
      //b4.position(600,600);
      b4.html('SpaceX')
      b4.mousePressed(()=>{
        gameState = 1;
      });
      b1.show();
      b2.show();
      b3.show();
      b4.show();
      break;
      case 5: text("How many US rovers are on mars?",300,100);
      //b1 = createButton('Starship');
      //b1.position(200,400);
      b1.html('5');
      b1.mousePressed(()=>{
        gameState = 1;
      });
      //b2 = createButton('SuperHeavy');
      //b2.position(200,600);
      b2.html('3')
      b2.mousePressed(()=>{
        gameState = 4;
      });
      //b3 = createButton('SLS');
      //b3.position(600,400);
      b3.html('4')
      b3.mousePressed(()=>{
        gameState = 4;
      });
      //b4 = createButton('New Glenn');
      //b4.position(600,600);
      b4.html('2')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      b1.show();
      b2.show();
      b3.show();
      b4.show();
      break;
      default:
        break;
    }
  }
  if(gameState===1&&level === 1){
    table1.visible = true;
    thrust.show();
    Button.visible = true;
    var thr = thrust.value();
    var total = thr*thrustTime/Payload;
    t = total;
    if(total < 200){
      s.addImage(fail);
    } else if(total > 200){
      s.addImage(success);
    }
    console.log(total);
    if(mousePressedOver(Button)&&thr<=51000){

      gameState = 2;
      //noLoop();
      thrust.hide();
      b1.hide();
      b2.hide();
      b3.hide();
      b4.hide();
      //loop();
      Button.visible = false;
      table1.visible = false;
    }
  }
  if(gameState===1&&level === 2){
    table1.addImage(t2);
    table1.visible = true;
    thrust.show();
    PayloadM.show();
    Payload = PayloadM.value();
    Button.visible = true;
    var thr = thrust.value();
    var total = thr*thrustTime/Payload;
    t = total;
    //fire.scale = 2;
    //fire.y = fire.y+20;
    if(total < 200){
      s.addImage(fail);
    } else if(total > 200){
      s.addImage(success);
    }
    console.log(total);
    if(mousePressedOver(Button)&&thr<71000&&Payload<17100){

      gameState = 2;
      //noLoop();
      thrust.hide();
      PayloadM.hide();
      b1.hide();
      b2.hide();
      b3.hide();
      b4.hide();
      //loop();
      Button.visible = false;
      table1.visible = false;
    }
  }
  if(gameState === 1&&level === 3){
    table1.addImage(t2);
    table1.visible = true;
    thrust.show();
    PayloadM.show();
    Payload = PayloadM.value();
    Button.visible = true;
    var thr = thrust.value();
    var total = thr*thrustTime/Payload;
    t = total;
    //fire.scale = 2;
    //fire.y = fire.y+20;
    if(total < 200){
      s.addImage(fail);
    } else if(total > 200){
      s.addImage(success);
    }
    console.log(total);
    if(mousePressedOver(Button)&&thr<71000&&Payload<17100){

      gameState = 2;
      //noLoop();
      thrust.hide();
      PayloadM.hide();
      b1.hide();
      b2.hide();
      b3.hide();
      b4.hide();
      //loop();
      Button.visible = false;
      table1.visible = false;
    }
  }
  if(gameState === 1&&level === 4){
    table1.addImage(t3);
    table1.visible = true;
    thrust.show();
    PayloadM.show();
    Payload = PayloadM.value();
    Button.visible = true;
    var thr = thrust.value();
    var total = thr*thrustTime/Payload;
    t = total;
    //fire.scale = 2;
    //fire.y = fire.y+20;
    if(total < 200){
      s.addImage(fail);
    } else if(total > 200){
      s.addImage(success);
    }
    console.log(total);
    if(mousePressedOver(Button)&&thr<101000&&Payload<20100){

      gameState = 2;
      //noLoop();
      thrust.hide();
      PayloadM.hide();
      b1.hide();
      b2.hide();
      b3.hide();
      b4.hide();
      //loop();
      Button.visible = false;
      table1.visible = false;
    }
  }
  if(gameState === 1&&level === 5){
    table1.addImage(t3);
    table1.visible = true;
    thrust.show();
    PayloadM.show();
    Payload = PayloadM.value();
    Button.visible = true;
    var thr = thrust.value();
    var total = thr*thrustTime/Payload;
    t = total;
    //fire.scale = 2;
    //fire.y = fire.y+20;
    if(total < 200){
      s.addImage(fail);
    } else if(total > 200){
      s.addImage(woa);
    }
    console.log(total);
    if(mousePressedOver(Button)&&thr<101000&&Payload<20100){

      gameState = 2;
      //noLoop();
      thrust.hide();
      PayloadM.hide();
      b1.hide();
      b2.hide();
      b3.hide();
      b4.hide();
      //loop();
      Button.visible = false;
      table1.visible = false;
    }
  }
  if(gameState === 4){
    textSize(60);
    text("Game Over",500,300);
    b1.hide();
    b2.hide();
    b3.hide();
    b4.hide();
    rocket.visible = false;
    grass.visible = false;
    tower.visible = false;
  } 
}