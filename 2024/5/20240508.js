let grid = 10
let points = []

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(0);
	for(let x = 0; x < width + grid; x += grid) {
		for(let y = 0; y < height + grid; y += grid) {
			let p = createVector(x, y, random(0.01, 0.2))
			points.push(p)
		}
	}
	noFill();
	stroke(255);
	angleMode(DEGREES)
}

function draw() {
	background(0)
	beginShape()
	for(let i = 0; i < points.length; i++){
		let x = cos(i * frameCount * 0.1) - sin(i* frameCount * 0.01)
		let y = cos(i * frameCount * 0.1) + sin(i* frameCount * 0.01)
		points[i].add(x, y)
		vertex(points[i].x, points[i].y);
	}
	endShape()
}