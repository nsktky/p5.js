let x, y, radius;

function setup() {
	createCanvas(windowWidth, windowHeight);
    background(200)
	angleMode(DEGREES)
	radius = width * 0.1
	noFill()
	colorMode(HSB, 360, 100, 100, 100)
	blendMode(DIFFERENCE)
	noStroke()
}

function draw() {
	for(let i = 0; i < 10; i++) {
		move(width/2, random(height))
	}
}

function move(px, py) {
	push();
	translate(px, py);
	beginShape()
	for(let i = 0; i < 360; i++) {
		let xoff = map(sin(i + px), -1, 1, 0, 1)
		let yoff = map(cos(i + py), -1, 1, 0, 1)
		let angle = map(noise(xoff, yoff, frameCount*0.03), 0,1,0,360)
		x = radius * 0.1 * (tan(angle)*sin(py/i))
		y = radius * 0.1 * (sin(angle) + tan(frameCount*0.2 + px - py))
		// stroke(y, angle, x, 100)
		fill(x, y, angle, 100)
		vertex(x, y)
		
	}
	endShape(CLOSE)
	pop();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}