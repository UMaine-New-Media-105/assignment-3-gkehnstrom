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
  //ellipse(25, 320, 60, 20);
  //bowl
  //fill('lightBlue');
  //ellipse(25, 280, 80, 80);
  //If command to change the color of the botton of the fish
  //bowl when mouse is pressed
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






