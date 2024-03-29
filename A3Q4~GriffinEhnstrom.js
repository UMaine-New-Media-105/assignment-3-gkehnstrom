let dropFish;
let catcherX;
let catcherY;
let fishX;
let fishY;
let fishSpeed;

function setup() {
  faceX = mouseX;
  faceY = 2;
  fishX = random(10, 380);
  fishY = -200;
  fishSpeed = random(3, 7)
  createCanvas(400, 400);
  
}

function draw() {
  background("skyblue");
  addGround()
  if (mouseIsPressed) { 
   dropFish = true;
  }
  if (dropFish) {
    fish(fishX, fishY, 1); 
    fishY = fishY + fishSpeed;
  }
  addCatcher(catcherX, catcherY);
}
function addCatcher(x,y){
  push();
  translate(mouseX, 1)
  fill('darkRed');
  
  if (mouseIsPressed) {
    fill('darkBlue');
  ellipse(25, 320, 60, 20);
}
  else {
    fill('darkRed')
    ellipse(25, 320, 60, 20);
  }
  //bowl
  fill('lightBlue');
  ellipse(25, 280, 80, 80);
  pop();
}
function addGround(){
  //brown table
  fill(92, 64, 51)
  rect(0,331,400)
  
}
function fish(x,y,size){
  push();
  translate(x,y);
  scale(size);
  noStroke();
  fill('yellow');
  triangle(210, 200, 235, 180, 235, 220);
  ellipse(200,200,50,25);
  fill('black');
  ellipse(185,200,5);
  pop();
}

if (fishY >= 331) {
    fishY = -5;
    dropFish = false;
    fishX = random(200);
  }
  



