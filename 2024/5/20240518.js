let points = []
let grid
let a, b

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	rectMode(CENTER)
	angleMode(DEGREES)
	grid = width * 0.008
	// noStroke()
	for(let x = 0; x < width + grid; x+=grid) {
		for(let y = 0; y < height + grid; y+=grid) {
			let p = createVector(x, y)
			points.push(p)
		}
	}
	a = 0.01
	b = 0.001
	noFill()
}

function draw() {
	background(255, 10)
	for(let i = 0; i < points.length; i++) {
		let angle = map(noise(points[i].x * b, points[i].y * b, frameCount * b), 0, 1, 0, 600)
		let x = sin(angle) - tan(angle)
		let y = cos(angle) + cos(i)
		points[i].add(createVector(x, y))

		if(points[i].x < 0 || points[i].x > width) {
			points[i].x = random(width)
		}
		if(points[i].y < 0 || points[i].y > height) {
			points[i].y = random(height)
		}
		stroke(map(angle, 0, 600, 0, 70))
		// fill(map(angle, 0, 600, 0, 255))
		rect(points[i].x, points[i].y, grid)
	}
}