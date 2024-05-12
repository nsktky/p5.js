let radius;
let points = []
let ox, oy

let a,b
function setup() {
	createCanvas(windowWidth, windowHeight)
	background(200);
	angleMode(DEGREES);
	a = 0.1
	b = 0.03
	ox = width / 2
	oy = height / 2
	radius = 200

	for(let x = 0; x < width + ox; x += ox) {
		for(let y = 0; y < height + oy; y += oy) {
			let p = createVector(x, y, random(0.001, 10))
			points.push(p)
		}
	}
	blendMode(DIFFERENCE)
	// noFill()
}

function draw() {
	for(let j = 0; j < points.length; j++) {
		push();
		translate(points[j].x, points[j].y);
		beginShape()
		for(let i = 0; i < 20; i++){
			rotate(frameCount)
			let x = radius * sin(i * frameCount * a * points[j].z) * cos(i * frameCount * b * points[j].z);
			let y = radius * cos(i * frameCount * b * points[j].z) + sin(i * frameCount * a * points[j].z);
			fill(x, y, i)
			vertex(x, y)
		}
		endShape(CLOSE)
		pop();
	}
}