var bgImg
var cat,mouse;
var cat1,cat2,cat3;
var mouse1,mouse2,mouse3;


function preload() {
    //load the images here

    bgImg = loadImage("images/garden.png");
    cat1 = loadAnimation("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png","images/cat3.png");
    cat3 = loadAnimation("images/cat4.png")

    mouse1 = loadAnimation("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(870,600);
    cat.addAnimation("tomsleeping",cat1)
    cat.scale = 0.2

    mouse = createSprite(200,600);
    mouse.addAnimation("tomsleeping",mouse1)
    mouse.scale = 0.15


    

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
         cat.velocityX=0; 
         cat.addAnimation("tomLastImage", cat3);
          cat.x =300; cat.scale=0.2;
           cat.changeAnimation("tomLastImage");
            mouse.addAnimation("jerryLastImage", mouse3);
             mouse.scale=0.15;
              mouse.changeAnimation("jerryLastImage"); }

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("jerryTeasing",mouse2);
        mouse.frameDelay = 25
        mouse.changeAnimation("jerryTeasing");


        cat.velocityX = -5
        cat.addAnimation("tomRunning",cat2);
        cat.changeAnimation("tomRunning")

    }
  //For moving and changing animation write code here

    


}
