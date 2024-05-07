let grid = 100
let points = []

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(200);
	for(let x = 0; x < width + grid; x += grid) {
		for(let y = 0; y < height + grid; y += grid) {
		let p = createVector(random(x), random(y), random(0.01, 0.2))
		points.push(p)
	}
	}
	// noStroke();
	noFill();
	angleMode(DEGREES)
}

function draw() {
	for(let i = 0; i < points.length; i++){
		let angle = map(noise(points[i].x, points[i].y, frameCount*0.008), 0, 1, -300, 300);
		let x = points[i].x + sin(angle) * grid * points[i].z * 3
		let y = points[i].y + cos(angle) * grid * points[i].z * 2
		circle(x, y, grid*0.3);
	}
}