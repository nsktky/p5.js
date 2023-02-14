let x, y, radius;

function setup() {
	createCanvas(windowWidth, windowHeight);
    background(0)
	// angleMode(DEGREES)
	radius = width * 0.1
	noFill()
	// colorMode(HSB, 360, 100, 100, 100)
	blendMode(DIFFERENCE)
}

function draw() {
	translate(width/2, height/2)
	rotate(frameCount)
	for(let i = 0; i < 20; i++) {
		move(0, random(height))
		fill(200)
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
		stroke(angle, x*6, y*10, 100)
		fill(angle, x*3, y*10, 100)
		vertex(x, y)
		
	}
	endShape(CLOSE)
	pop();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}