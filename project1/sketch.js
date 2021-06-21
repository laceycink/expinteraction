let button;
function setup() {
  createCanvas(600, 400);
  background('tan');
  button = createButton('"Hang it Tomorrow"');
  button.position(240, 370);
}

function draw() {
  button.mousePressed(appear1);
  
  line(70, 92, 530, 92);
  line(70, 92, 70, 370);
  line(530, 92, 530, 370);
  
  //hang1
  noFill();
  arc(118.5, 94.75, 10, 10, -PI, -5);
  triangle(120, 100, 100, 120, 140, 120);
  
  //hang2
  arc(208.5, 94.75, 10, 10, -PI, -5);
  triangle(210, 100, 190, 120, 230, 120);
  
  //hang3
  arc(298.5, 94.75, 10, 10, -PI, -5);
  triangle(300, 100, 280, 120, 320, 120);
  
  //hang4
  arc(388.5, 94.75, 10, 10, -PI, -5);
  triangle(390, 100, 370, 120, 410, 120);
  
  //hang5
  arc(478.5, 94.75, 10, 10, -PI, -5);
  triangle(480, 100, 460, 120, 500, 120);
  
  //clothes1
  fill('navy');
  noStroke();
  rect(95, 120, 50, 100, 5);
  square(85, 120, 20, 5);
  square(135, 120, 20, 5);
  
  //clothes2
  fill('SteelBlue');
  rect(185, 120, 50, 100, 5);
  square(175, 120, 20, 5);
  square(225, 120, 20, 5);
  
  //clothes3
  fill('teal');
  rect(275, 120, 50, 100);
  square(265, 120, 20, 5);
  square(315, 120, 20, 5);
  
  //clothes4
  fill('orange');
  rect(365, 120, 50, 100, 5);
  square(355, 120, 20, 5);
  square(405, 120, 20, 5);
  
  //clothes5
  fill('gold');
  rect(455, 120, 50, 100, 5);
  square(445, 120, 20, 5);
  square(495, 120, 20, 5);
   
  //halfcircles
  fill('tan');
  arc(120, 120, 30, 30, 0*Math.PI, 1*Math.PI, OPEN);
  arc(210, 120, 30, 30, 0*Math.PI, 1*Math.PI, OPEN);
  arc(300, 120, 30, 30, 0*Math.PI, 1*Math.PI, OPEN);
  arc(390, 120, 30, 30, 0*Math.PI, 1*Math.PI, OPEN);
  arc(480, 120, 30, 30, 0*Math.PI, 1*Math.PI, OPEN);
  
  noLoop();
}

function appear1(){
  button.mousePressed(appear2);
  
  noStroke();
  
  //clothes5cover
  fill ('tan');
  rect(445, 120, 70, 100);
  
  //drop1
  fill('gold');
  push();
  translate (width/2 + 25, height/2 + 100)
  rotate(random(QUARTER_PI, HALF_PI));
  rect(random (-30, 30), random(-10, 10), 50, 100, 5);
  square(random (-30, 30), random(-10, 10), 50, 100, 5);
  pop ();
  noLoop();
}

function appear2() {
  // calling third appear function
  button.mousePressed(appear3);
  noStroke();
  fill('tan')
  
  //clothes4cover
  rect(355, 120, 70, 100);
  
  
  //drop2
  fill('orange');
  push();
  translate (width/2 + 25, height/2 + 100)
  rotate(random(QUARTER_PI, HALF_PI));
  rect(random (-30, 30), random(-10, 10), 50, 100, 5);
  square(random (-30, 30), random(-10, 10), 50, 100, 5);
  pop ();
  noLoop();
}

function appear3(){
  button.mousePressed(appear4);
  noStroke();
  fill('tan')
  
  //clothes3cover
  rect(265, 120, 70, 100);
  
  //drop3
  fill('teal');
  push();
  translate (width/2 + 25, height/2 + 100)
  rotate(random(QUARTER_PI, HALF_PI));
  rect(random (-35, 35), random(-15, 15), 50, 100, 5);
  square(random (-30, 30), random(-10, 10), 50, 100, 5);
  pop ();
  noLoop();
  
}

function appear4(){
  // calling fifth appear function
  button.mousePressed(appear5);
  noStroke();
  fill('tan')
  
  
  //clothes2cover
  rect(175, 120, 70, 100);
  
  //drop4
  fill('SteelBlue');
  push();
  translate (width/2 + 25, height/2 + 100)
  rotate(random(QUARTER_PI, HALF_PI));
  rect(random (-40, 40), random(-20, 20), 50, 100, 5);
  square(random (-30, 30), random(-10, 10), 50, 100, 5);
  pop ();
  noLoop();
  
}

function appear5(){
  button.mousePressed(draw);
  noStroke();
  fill('tan')
  
  //clothes1cover
  rect(85, 120, 70, 100);
  
  //drop5
  fill('navy');
  push();
  translate (width/2 + 25, height/2 + 100)
  rotate(random(QUARTER_PI, HALF_PI));
  rect(random (-50, 50), random(-30, 30), 50, 100, 5);
  square(random (-30, 30), random(-10, 10), 50, 100, 5);
  pop ();
  noLoop();
  
}