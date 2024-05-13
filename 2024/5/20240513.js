let radius
let x, y

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	angleMode(DEGREES);
	radius = width * 0.5;
	noStroke();
}

function draw() {
	background(0, 2)
	translate(width/2, height/2);
	beginShape()
	for(let i = 0; i < 360; i++) {
		let xoff = map(sin(i), -1, 1, 0, 1)
		let yoff = map(cos(i), -1, 1, 0, 1)
		let angle = map(noise(xoff, yoff, frameCount*0.001), 0, 1, 0, 720)
		fill(xoff*100, angle, yoff*200, 10)
		x = radius * (cos(i) - sin(xoff * yoff))
		y = radius * (sin(angle) - cos(i))
		vertex(x, y)
	}
	endShape(CLOSE)
}