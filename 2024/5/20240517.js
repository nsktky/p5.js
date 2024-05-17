let points = []
let grid

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(150);
	rectMode(CENTER)
	angleMode(DEGREES)
	grid = width * 0.01
	noStroke()
	for(let x = 0; x < width + grid; x+=grid) {
		for(let y = 0; y < height + grid; y+=grid) {
			let p = createVector(x, y)
			points.push(p)
		}
	}
}

function draw() {
	translate(width/2, height/2)
	for(let i = 0; i < points.length; i++) {
		let angle = map(noise(points[i].x, points[i].y, frameCount*0.001), 0, 1, 0, 360)
		let c = sin(angle) + 0.02 * cos(i)
		rotate(c * 2)
		fill(c * 200, 100, 100)
		rect(points[i].x, points[i].y, grid * sin(angle))
	}
}