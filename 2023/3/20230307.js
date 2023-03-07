let grid
let points = []

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(0)
	colorMode(HSB, 360, 100, 100, 100)
	angleMode(DEGREES)
	noFill()
	grid = width / 40
	for(let x = 0; x < width+grid; x+=grid) {
		for(let y = 0; y < height+grid; y+=grid) {
			let r = map(noise(x*0.001, y*0.001, random(x*y)), 0, 1, 0, 360)
			let col = color(r, r*0.1, r/y*x*0.2, 100)
			let p = createVector(x, y, col)
			points.push(p)
		}
	}
}

function draw() {
	for(let i = 0; i < points.length; i++) {
		push();
		translate(points[i].x, points[i].y)
		rotate(i*frameCount*0.0001)
		stroke(points[i].z)
		rect(0, 0 , points[i].x*0.1, points[i].y*0.1)
		pop();
	}
	
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}