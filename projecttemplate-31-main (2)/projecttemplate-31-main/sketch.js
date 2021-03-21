const Engine = Matter.engine
const World = Matter.World
const Bodies = Matter.Bodies

var thunder,thunder1,thunder2,thunder3, thunder4;

var engine,world;
var drops = [];
var rand;

var maxDorps = 100;

var thunder = (reatedFrame=0);

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/1.png");
    thunder3 = loadImage("thunderbolt/1.png");
    thunder4 = loadImage("thunderbolt/1.png");
    
}

function setup(){
   engine = Engine.create();
   world = engine.world;

   createCanvas(480,700);
   umberella = new Umberella(200,500);
   if(framecount % 150 === 0)        
   {
    for(var i=0; i<maxDorps; i++) {
    drops.push(new createDrop(random(0,400),random(0,400)));
    }
   }  
}

function draw(){
    Engine.update(engine);
    background(0);

    rand = Math.round(random(1,4));
    if(frameCount % 80 === 0){
        thunderCreateFrame=frameCount;
        thunder = createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1 : thunder.addImage(thunder1);
            break;
            case2 : thunder.addImage(thunder2);
            break;
            case3 : thunder.addImage(thunder3);
            break;
            case4 : thubder.addImage(thunder4);
            break;
            default:break;
        }
        thunder.scale = random(0.3,0.6);
    }
    if(thunderCreateFrame + 10 ===frameCount && thunder) {
        thunder.dertroy();
    }
    umbrella.display();

    for(var i = 0; i<maxDr5ops; i++){
        drops[i].showDrop();
        drops[i],updateY()
    }

     drawSprites();

}   

