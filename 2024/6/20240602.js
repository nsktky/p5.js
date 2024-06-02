let grid
let points = []

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0)
	angleMode(DEGREES)
	noFill()
	rectMode(CENTER)
	grid = width * 0.05
	for(let x = 0; x < width; x+=grid) {
		for(let y = 0; y < height; y+=grid) {
			let z = noise(x, y)
			let p = createVector(x, y, z)
			points.push(p)
		}
	}
}

function draw() {
	// background(0, 10)
	for(let i = 0; i < points.length; i++) {
		let a = noise(dist(points[i].x, points[i].y, width/2, height/2), points[i].z)
		let h = map(a, 0, 1, 0, 255)
		stroke(h, h * a, a * 100)
		circle(points[i].x, points[i].y, frameCount * a)
	}
}