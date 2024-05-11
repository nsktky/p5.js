let radius;
let points = []

let a,b
function setup() {
	createCanvas(windowWidth, windowHeight)
	background(255);
	angleMode(DEGREES);
	radius = 50
	a = 0.1
	b = 0.03

	for(let x = 0; x < width + 200; x += 200) {
		for(let y = 0; y < height + 200; y += 200) {
			let p = createVector(x, y, random(0.001, 10))
			points.push(p)
		}
	}
	// noFill()
}

function draw() {
	for(let j = 0; j < points.length; j++) {
		push();
		translate(points[j].x, points[j].y);
		beginShape()
		for(let i = 0; i < 20; i++){
			rotate(frameCount * points[i].z)
			let x = radius * sin(i * frameCount * a * points[j].z) * 1.2 * cos(i * frameCount * b * points[j].z);
			let y = radius * cos(i * frameCount * b * points[j].z) - sin(i * frameCount * a * points[j].z);
			vertex(x, y)
		}
		endShape()
		pop();
	}
}