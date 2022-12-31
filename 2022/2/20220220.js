function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
}

function draw() {
  stroke(0);
  strokeWeight(1);
  noFill();

  let gradientStroke = drawingContext.createLinearGradient(
  width * 0.1,
  height * 0.9,
  width * 0.9,
  height * 0.1
  );

  gradientStroke.addColorStop(0, color(0,0,30));
  gradientStroke.addColorStop(0.6, color(0,20,60));
  gradientStroke.addColorStop(0.95, color(0,150,220));
  gradientStroke.addColorStop(1, color(0,180,230));

  drawingContext.strokeStyle = gradientStroke;
  let h = random(height)
  line(0,h,width,h)

  translate(0,height/2)
  fill(158,172,190,1+20*(frameCount*0.0001))
  noStroke();
  for(let i = 0; i < 360; i += 0.1){
    let rad = cos(i)*frameCount
    let x = map(i,0,360,0,width);
    //let x = i*30
    let y = -sin(rad)*frameCount*0.2;
    circle(x, y, 10)
  }
}