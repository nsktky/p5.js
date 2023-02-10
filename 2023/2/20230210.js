let points = []
let grid

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(220, 10, 100)
	rectMode(CENTER);
	angleMode(DEGREES)
	colorMode(HSB, 360, 100, 100, 100)
	grid = width / 10
	for(let y = 0; y < height + grid; y += grid) {
		for(let x = 0; x < width + grid; x += grid) {
			let p = createVector(x, y)
			points.push(p)
		}
	}
	noStroke();
	blendMode(DIFFERENCE)
}

function draw() {
	for(let i = 0; i < points.length; i++) {
		let h = map(noise(points[i].x, points[i].y, frameCount * 0.001), 0, 1, 0, 300)
		let s = map(sin(h), -1, 1, 0, 100)
		let b = map(cos(s), -1, 1, 0, 100)
		let size = map(h, 0, 600, 0, grid)
		fill(h, s, b)
		push()
		translate(points[i].y, points[i].y)
		rotate(b)
		rect(0 + h, 0, grid)
		circle(0, 0 + size, h)
		pop()
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}