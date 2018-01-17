console.log("hello");
var r=0;
var g=0;
var b=0;

function setup() {
  var myCanvas = createCanvas(800,250);
  myCanvas.parent('mySketch');
}

function draw() {
  r=mouseX;
  g=mouseY;
  b=mouseX+mouseY;
  fill(r,g,b);

  line(mouseX,mouseY,100,80);
  line(mouseX,mouseY,550,120);
}
