function setup() {
  faceX = mouseX;
  faceY = 2;
  createCanvas(400, 400);
  
}

function draw() {
  background("skyblue");
  addCatcher(faceX, faceY);
  addGround()
}
function addCatcher(x,y){
  push();
  translate(mouseX, y)
  //bottom of bowl
  fill('darkRed');
  ellipse(25, 320, 50, 20);
  //bowl
  fill('lightBlue');
  ellipse(25, 280, 60, 80);
  pop();
}
function addGround(){
  //brown table
  fill(92, 64, 51)
  rect(0,331,400)
  
}




