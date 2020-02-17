# hw3

1. The following code draws the blades of grass.
  
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  
  
2.The following code makes the "lawnmower" come by.
 
  if (random(1000) > 999) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }
  The chance is 1/1000
  
  
3. "h" is the highest point of each blade of grass.
  
  
4.The "-10" keep the grass blades grow on the top of the earth, the brown rectangle at the bottom.
