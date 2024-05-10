let radius;
let points = []

let a,b
function setup() {
	createCanvas(windowWidth, windowHeight)
	background(255);
	angleMode(DEGREES);
	radius = 100
	a = 0.003
	b = 0.3

	for(let x = 0; x < width + 200; x += 200) {
		for(let y = 0; y < height + 200; y += 200) {
			let p = createVector(x, y)
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
		for(let i = 0; i < 360; i++){
			let x = radius * sin(i * frameCount * a);
			let y = radius * cos(i * frameCount * b);
			vertex(x, y)
		}
		endShape()
		pop();
	}
}