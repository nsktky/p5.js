let x, y, radius;

function setup() {
	createCanvas(windowWidth, windowHeight);
    background(255)
	angleMode(DEGREES)
	radius = width * 0.3
	noFill()
	// colorMode(HSB, 360, 100, 100, 100)
	blendMode(DIFFERENCE)
}

function draw() {
	translate(width/2, height/2)
	rotate(frameCount*10)
	for(let i = 0; i < 20; i++) {
		move(0, random(height))
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
		x = radius * 0.15 * (sin(angle) - cos(i)*cos(angle))
		y = radius * 0.15 * (sin(angle) + tan(frameCount*0.2 + px - py))
		// stroke(y*2, angle, x*2, 100)
		fill(y, angle, x, 100)
		vertex(x, y)
		
	}
	endShape(CLOSE)
	pop();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}