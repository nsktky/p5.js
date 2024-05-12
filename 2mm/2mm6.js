let x, y, radius;

function setup() {
	createCanvas(windowWidth, windowHeight);
    background(0)
	angleMode(DEGREES)
	radius = width * 0.3
	noFill()
	seed = random(1000000000000000);
	colorMode(HSB, 360, 100, 100, 100)
}

function draw() {
	translate(width/2, height/2)
	rotate(frameCount)
	for(let i = 0; i < 10; i++) {
		move(random(width), random(height))
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
		let angle = map(noise(xoff, yoff, frameCount*0.03), 0,1,0,600)
		x = radius * 0.15 * (sin(angle) + cos(i))
		y = radius * 0.15 * (sin(i) - tan(frameCount*0.2 + px - py))
		stroke(angle, x*3, y*10, 100)
		fill(angle, x*3, y*10, 100)
		vertex(x, y)
		
	}
	endShape(CLOSE)
	pop();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}