let j;

function setup() {
  // put setup code here
  createCanvas(400,400);
  j=0;
}

function draw() {
  // put drawing code here
  background(200);
  strokeWeight(8)
  stroke(243, 31, 22)
  point(70,100);
  line(0,0,50,180);

  fill(149,53,83);
  rect(150,20,20,100);

  strokeWeight(2)
  ellipse(110,100,20,20);
  ellipse(110,50,20,20);

  strokeWeight(2)
  //noStroke()
  fill(90,2,2);
  strokeJoin(ROUND)
  triangle(20,20,40,40,60,20)
  arc(70,50,40,40,radians(0), radians(270))

  strokeWeight(4)
  beginShape();
  vertex(300,50)
  vertex(350,100)
  vertex(300,15)
  vertex(250,150)
  endShape(CLOSE);

  for (var i=0; i<=400; i++){
    x=i
    y=300+ 20*Math.sin(PI*x/20)
    point(x,y)
  }
  var y =200+20*Math.sin(PI*j/20)
  var r = 50+10*Math.sin(PI*j/20)
  j+= 1
  fill(240,192,35)
  ellipse(300,200,r,r);
  ellipse(310,220,r,r);
  ellipse(310,240,r,r);

}