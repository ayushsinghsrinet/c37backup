var bg,bgimg
var boy,boyimg;
var st;
var fimg,b1img,ob2img,ob3img;

var startb,startimg;

var healthbar,healthbarimg;
var gameState="serve";
var health=3;
var score=0
function preload() {
    bgimg=loadImage("bg.jpg")
    boyimg=loadAnimation("g-0.png" ,  "g-1.png" ,  "g-2.png"  ,  "g-3.png"   ,  "g-4.png",  "g-5.png",  "g-6.png",  "g-7.png")
    st=loadSound("6.mp3");
    fimg=loadAnimation("b-0.png","b-1.png","b-2.png","b-3.png","b-4.png")
    b1img=loadImage("ob1.png")
    ob2img=loadImage("ob2.png")
    ob3img=loadImage("m.png")
    startimg=loadImage("start2.png")
    healthbarimg=loadImage("gage2 (1).png")
    heimg=loadImage("h2.png")
}
function setup() {
    createCanvas(displayWidth,displayHeight-145)

    bg=createSprite(600,200,100,100)
    bg.addImage(bgimg)

    boy=createSprite(550,500,1,1)
    boy.addAnimation("boyimg",boyimg)

    boy.debug=true
    boy.setCollider("rectangle",0,0,100,160)

    healthbar=createSprite(430,30,100,10)
    healthbar.addImage(healthbarimg)
    healthbar.scale=1.4
    firglobal=new Group()
    ob1global=new Group()
    ob2global=new Group()
    ob3global=new Group()
    //stpglobal=new Group()
    //stpglobal.visible=false
}

function draw(){
background(0)
bg.velocityY=4.5

if(bg.y>400){
    bg.y=bg.height/3
}

if(keyDown("right")){
    boy.velocityX=3.5
}
if(keyWentUp("right")){
    boy.velocityX=0
}

if(keyDown("left")){
    boy.velocityX=-3.5
}
if(keyWentUp("left")){
    boy.velocityX=0
}

if(boy.x<370){
    boy.velocityX=3
}
if(boy.x>840){
    boy.velocityX=-3
}

fire();
ob1();
ob2();
ob3();
ob4()
if(firglobal.isTouching(boy)){
    health=health-1
    firglobal.destroyEach()
}
if(ob1global.isTouching(boy)){
    health=health-1
    ob1global.destroyEach()
}
if(ob2global.isTouching(boy)){
    health=health-1
    ob2global.destroyEach()
}
if(ob3global.isTouching(boy)){
    health=health-1
    ob3global.destroyEach()
}

if(gameState==="serve"){
    firglobal.setVelocityYEach(0)
    ob1global.setVelocityYEach(0)
    ob2global.setVelocityYEach(0)
    ob3global.setVelocityYEach(0)
}
if(keyWentDown("space")){
    st.play()
    gameState="play"
}

if(gameState==="play"){
    firglobal.setVelocityYEach(4)
    ob1global.setVelocityYEach(4)
    ob2global.setVelocityYEach(4)
   score= score+Math.round(getFrameRate()/60)
}

drawSprites()
text("health"+health,200,200)
text("score"+score,400,400)
}

function fire(){
    if(frameCount%250===0){
        var rx=random(400,750)
        var f=createSprite(rx,0,10,10)
        f.addAnimation("f",fimg)
        f.scale=0.2
        f.velocityY=4
        f.depth=boy.depth;
        boy.depth=boy.depth+1
        f.lifetime=150
        f.debug=true
        f.setCollider("rectangle",0,0,350,250)
firglobal.add(f)
    }
}

function ob1(){
    if(frameCount%300===0){
        var rx=random(400,750)
       var b=createSprite(rx,0,0,0)
       b.addImage(b1img)
       b.scale=0.3
       b.velocityY=4
       b.debug=true
       b.setCollider("circle",0,0,65)
       b.lifetime=150
       b.depth=boy.depth
       boy.depth=boy.depth+1
       ob1global.add(b)
    }
}

function ob2(){
    if(frameCount%400===0){
        var rx=random(400,750);
        var s=createSprite(rx,0,0,0)
        s.addImage(ob2img)
        s.scale=0.5
        s.velocityY=4
        s.debug=true
        s.setCollider("circle",0,0,60)
        s.lifetime=150
        s.depth=boy.depth
        boy.depth=boy.depth+1
       ob2global.add(s)
    }
}

function ob3(){
    if(frameCount%500===0){
        var rx=random(390,760)
        var m=createSprite(rx,0,0,0)
        m.addImage(ob3img)
        m.scale=0.5;
        m.velocityY=4
        m.debug=true
        m.lifetime=150
        m.depth=boy.depth
        boy.depth=boy.depth+1
        ob3global.add(m)
    }
}

function ob4(){
    if(frameCount%590===0){
        var rx=random(400,720)
        var he=createSprite(rx,0,10,0)
        he.addImage(heimg)
        he.velocityY=4
        he.scale=0.5
    }
}