console.log("hello");
var h=0;
var s=0;
var l=0;
var a=100;

function setup() {
  var myCanvas = createCanvas(800,250);
  myCanvas.parent('mySketch');
  colorMode(HSL);
  strokeWeight(5);

  // noStroke();
}

function draw() {
  stroke(h,s,l,a);

  if (mouseIsPressed) {
    h=random(260,300);
    s=random(20,45);
    l=random(80,97);
    line(mouseX,mouseY,pmouseX,pmouseY);
  } else {
    h=random(20,55);
    s=random(80,100);
    l=random(80,97);
    line(mouseX,mouseY,pmouseX,pmouseY);
  }
  noStroke();
  fill(70);
  textSize(12);
  textAlign(RIGHT,BOTTOM);
  text("Press SHIFT to start over",width-12,height-12);
}

function keyPressed() {
  if (keyCode==SHIFT) {
    background(255);
  }
  return false;
}
