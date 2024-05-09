let radius;

let a,b
function setup() {
	createCanvas(windowWidth, windowHeight)
	background(255);
	angleMode(DEGREES);
	radius = min(width * 0.2, height * 0.2)
	a = 0.6
	b = 0.3
	// noFill()
}

function draw() {
	translate(width/2, height/2);
	beginShape()
	for(let i = 0; i < 360; i++){
		let x = radius * sin(i * frameCount * a);
		let y = radius * cos(i * frameCount * b);
		vertex(x, y)
	}
	endShape()
}