let x, y, radius;

function setup() {
	createCanvas(windowWidth, windowHeight);
    background(200)
	angleMode(DEGREES)
	radius = width * 0.3
	noFill()
	noStroke()
	colorMode(HSB, 360, 100, 100, 100)
	for(let i = 0; i < 5000; i++) {
		fill(random(360), random(100), random(50))
		circle(random(width), random(height*0.6), random(2))
	}
	fill(0)
	circle(width/2, height/2, min(width, height)*0.8)
	fill(0)
	rect(0, height*0.59, width, height)
}

function draw() {
	blendMode(DIFFERENCE)
	move(random(random(width)), height*0.6)
	blendMode(BLEND)
	fill(0, 4)
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
		y = radius * 0.5 * (cos(i)*sin(px/i))
		x = radius * 0.4 * (sin(angle) - cos(frameCount*0.2 + px - py))
		fill(y, x, angle, 100)
		vertex(x, -y)		
	}
	endShape(CLOSE)
	pop();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}