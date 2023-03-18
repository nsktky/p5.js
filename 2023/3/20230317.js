let grid
let points = []
let counter = 0

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(250)
	colorMode(HSB, 360, 100, 100, 100)
	rectMode(CENTER)
	angleMode(DEGREES)
	noStroke()
	grid = width / 30
	for(let x = 0; x < width+grid; x+=grid) {
		for(let y = 0; y < height+grid; y+=grid) {
			let ox = random(width)
			let oy = random(height)
			let r = map(noise(x*0.001, y*0.001, tan(ox)/sin(oy)), 0, 1, 0, 360)
			let col = color(r, 50, r*0.1, 100)
			let p = createVector(ox, oy, col)
			points.push(p)
		}
	}
	blendMode(DIFFERENCE)
}

function draw() {
	for(let i = 0; i < points.length; i++) {
		push();
		let angle = map(noise(points[i].x, points[i].y, frameCount*0.01), 0, 1, 0, 300+i)
		points[i].x += sin(angle)*2
		points[i].y += cos(angle)*2
		if(points[i].x < 0) points[i].x = random(width)
		if(points[i].x > width) points[i].x = random(width)
		if(points[i].y < 0) points[i].y = random(height)
		if(points[i].y > height) points[i].y = random(height)

		translate(points[i].x, points[i].y)
		rotate(i*frameCount*0.01)
		fill(points[i].z)
		rect(0, 0, counter)
		pop();
	}
	counter = sin(frameCount)*grid*0.1
}