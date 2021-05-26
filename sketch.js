//NameSpace
var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=300

const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world;

function setup() {
 //Creating Canvas
  createCanvas(480,700);
 //Starting Engine
  engine=Engine.create();
  world=engine.world;
 //creating Bodies
 if(frameCount%90===0){
  particles.push(new Particle(width/2-10,20,10,10))
}
  ground=new Ground(240,695,480,10)

  for(var i=5;i<=width;i=i+80){
    divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight))
  }
  lastDiv=new Division(width-5,height-divisionHeight/2,10,divisionHeight)

  for(var b=15;b<width-15;b=b+40)
      plinkos.push(new Plinko(b,75))
  for(var b=30;b<width-30;b=b+40)
      plinkos.push(new Plinko(b,130))
  for(var b=15;b<width-15;b=b+40)
      plinkos.push(new Plinko(b,185))
  for(var b=30;b<width-30;b=b+40)
      plinkos.push(new Plinko(b,240))
  for(var b=15;b<width-15;b=b+40)
      plinkos.push(new Plinko(b,295))

   

  if(frameCount%90===0){
    particles.push(new Particle(width/2-10,20,10,10))
  }
}

function draw() {
  background(0);
  ground.display()


for(var k=0;k<divisions.length;k++){
   divisions[k].display()
}
lastDiv.display()

for(var a=0;a<plinkos.length;a++){
  plinkos[a].display()
}
console.log(particles)
for(var c=0;c<particles.length;c++){
  particles[c].display()
}



  drawSprites();
}