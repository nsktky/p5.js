let grid
let points = []
let counter = 0

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(100)
	colorMode(HSB, 360, 100, 100, 100)
	rectMode(CENTER)
	angleMode(DEGREES)
	// noFill()
	fill(0, 10)
	grid = width / 30
	for(let x = 0; x < width+grid; x+=grid) {
		for(let y = 0; y < height+grid; y+=grid) {
			let r = map(noise(x*0.001, y*0.001, random(x*y)), 0, 1, 0, 360)
			let col = color(r, r*0.1, 100, 100)
			let p = createVector(x, y, col)
			points.push(p)
		}
	}
}

function draw() {
	// background(0)
	for(let i = 0; i < points.length; i++) {
		push();
		translate(points[i].x, points[i].y)
		rotate(i*frameCount*0.001)
		stroke(points[i].z)
		rect(width/2, 0, points[i].y/counter, points[i].x/counter)
		pop();
	}
	counter += sin(frameCount)*0.1
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}