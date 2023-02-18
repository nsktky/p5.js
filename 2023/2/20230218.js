let x, y, radius;

function setup() {
	createCanvas(windowWidth, windowHeight);
    // background(20)
	angleMode(DEGREES)
	radius = width * 0.3
	noFill()
	colorMode(HSB, 360, 100, 100, 100)
	blendMode(DIFFERENCE)
	noStroke()
	rectMode(CENTER)
}

function draw() {
	radius = frameCount
	background(0,80)
	for(let i = 0; i < 20; i++) {
		move(random(random(width)), height/2)
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
		y = radius * 0.1 * (tan(angle)*sin(py/i))
		x = radius * 0.1 * (sin(angle) - cos(frameCount*0.2 + px - py))
		// stroke(y, angle, x, 100)
		fill(y, x, angle, 100)
		vertex(y, x)		
	}
	endShape(CLOSE)
	pop();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}