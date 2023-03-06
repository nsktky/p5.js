let grid

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(200)
	angleMode(DEGREES)
	grid = width / 30
	// translate(width*0.7, height*0.2)
	// rotate(40)
	for(let x = 0; x < width+grid; x+=grid) {
		for(let y = 0; y < height+grid; y+=grid) {
			rect(x, y, random(40), grid-random(100))
		}
	}
}

function draw() {
	
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}