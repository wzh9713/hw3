function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 10;

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

  if (random(1000) > 999) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }
  
  if (h > 20) 
  if (random(1000) > 600)
  {
  fill(random(295, 337), random(48, 71), random(51, 90))
    rect(random(x - 10, x + 5), height - 10 -random(h - 3, h), random(1, 3), random(1, 3))
  
  }

  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
