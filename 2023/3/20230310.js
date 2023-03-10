let grid
let points = []
let counter = 0

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(255)
	colorMode(HSB, 360, 100, 100, 100)
	rectMode(CENTER)
	angleMode(DEGREES)
	// noFill()
	// fill(255, 10)
	grid = width / 30
	for(let x = 0; x < width+grid; x+=grid) {
		for(let y = 0; y < height+grid; y+=grid) {
			let ox = random(width)
			let oy = random(height)
			let r = map(noise(x*0.001, y*0.001, random(x*y)), 0, 1, 150, 250)
			let col = color(r, r*0.5, 60, 100)
			let p = createVector(ox, oy, col)
			points.push(p)
		}
	}
}

function draw() {
	// background(255, 1)
	for(let i = 0; i < points.length; i++) {
		push();
		translate(points[i].x, points[i].y)
		rotate(i*frameCount*0.001)
		stroke(points[i].z)
		fill(points[i].z)
		rect(width/2, height/2, grid/counter)
		pop();
	}
	counter += sin(frameCount*0.1)*0.1
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}