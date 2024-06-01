let radius, x, y

function setup() {
	createCanvas(windowWidth, windowHeight);
	radius = height * 0.3;
	background(200)
	angleMode(DEGREES)
	// noFill();
	// noStroke()
}

function draw() {
	translate(width / 2, height / 2);
	beginShape()
	for(let i = 0; i < 10; i++) {
		ox = radius * sin(i)
		oy = radius * cos(i)
		let angle = map(noise(dist(ox, oy, width/2, height/2) % 360, i, frameCount*100), 0, 1, -360, 360)
		x = radius * sin(angle + frameCount * 2 / angle)
		y = radius * cos(angle)
		stroke(angle, x, 200, 100)
		fill(40, 30, 4)
		vertex(x, y)
	}
	endShape()
}