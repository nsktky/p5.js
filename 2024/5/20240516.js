let radius
let x, y
let points = []

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	angleMode(DEGREES);
	radius = height * 0.2;
	noFill();
	stroke(250, 190, 20, 10)
	rectMode(CENTER);
	colorMode(HSB, 360, 1, 1, 100)
}

function draw() {
	// background(0, 1)
	translate(width/2, height/2);
	beginShape()
	for(let i = 0; i < 360; i++) {
		let xoff = map(sin(i), -1, 1, 0, 1)
		let yoff = map(cos(i), -1, 1, 0, 1)
		let angle = map(noise(xoff, yoff, frameCount*0.001), 0, 1, 0, 720)
		fill(angle*1.1, yoff, xoff, 1)
		x = radius * (cos(angle) + sin(xoff / yoff) - tan(angle))
		y = radius * (sin(i) / cos(i))
		vertex(y, x)
	}
	endShape(CLOSE)
}