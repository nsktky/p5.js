let grid
let points = []

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(0)
	colorMode(HSB, 360, 100, 100, 100)
	angleMode(DEGREES)
	noStroke()
	grid = width / 30
	for(let x = 0; x < width+grid; x+=grid) {
		for(let y = 0; y < height+grid; y+=grid) {
			let r = map(noise(x*0.001, y*0.001, random(x*y)), 0, 1, 0, 255)
			let col = color(r, r*0.3, r/y*x*0.3, 100)
			let p = createVector(x, y, col)
			points.push(p)
		}
	}
}

function draw() {
	for(let i = 0; i < points.length; i++) {
		push();
		translate(points[i].x, points[i].y)
		rotate(i*frameCount*0.001)
		fill(points[i].z)
		rect(0, 0 , grid)
		pop();
	}
	
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}