let x, y, radius;

function setup() {
	createCanvas(windowWidth, windowHeight);
    background(0)
	angleMode(DEGREES)
	radius = width * 0.3
	noFill()
	noStroke()
	for(let i = 0; i < 3000; i++) {
		fill(random(255), random(100, 255), 255, random(180))
		circle(random(width), random(height*0.55), 1)
	}
}

function draw() {
	// background(0, 3)
	move(random(random(width)), height*0.6)
	fill(0, 7)
	rect(0, height*0.59, width, height)
}

function move(px, py) {
	push();
	translate(px, py);
	beginShape()
	for(let i = 0; i < 360; i++) {
		let xoff = map(sin(i + px), -1, 1, 0, 1)
		let yoff = map(cos(i + py), -1, 1, 0, 1)
		let angle = map(noise(xoff, yoff, frameCount*0.03), 0,1,0,360)
		y = radius * 0.6 * (cos(angle)*sin(px/i))
		x = radius * 0.1 * (sin(angle) - cos(frameCount*0.2 + px - py))
		// stroke(y, angle, x, 100)
		fill(y, angle, angle*0.8, 100)
		vertex(x, y)		
	}
	endShape(CLOSE)
	pop();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}