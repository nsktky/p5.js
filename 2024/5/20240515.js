let radius
let x, y

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	angleMode(DEGREES);
	radius = height * 0.3;
	noFill();
	strokeWeight(3)
	rectMode(CENTER);
	rect(width/2, height/2, 250, 600);
	rect(width/2, height/2, 250, 600);
	noStroke();
	colorMode(HSB, 360, 1, 1, 100)
}

function draw() {
	// background(255, 1)
	translate(width/2, height/2);
	beginShape()
	for(let i = 0; i < 360; i++) {
		let xoff = map(sin(i), -1, 1, 0, 1)
		let yoff = map(cos(i), -1, 1, 0, 1)
		let angle = map(noise(xoff, yoff, frameCount*0.002), 0, 1, 0, 720)
		fill(angle*1.1, yoff, xoff, 1)
		x = radius * (cos(angle) + sin(xoff / yoff))
		y = radius * (sin(i) - cos(i))
		vertex(x, y)
	}
	endShape(CLOSE)
}