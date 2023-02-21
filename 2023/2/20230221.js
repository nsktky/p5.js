function setup() {
	cnv = createCanvas(270, 480);
	let newCanvasX = (windowWidth - 270)/2;
	let newCanvasY = (windowHeight - 480)/2;
	cnv.position(newCanvasX, newCanvasY);
	noStroke()
	fill(0)
	rect(0, 0, width, height)
}

function draw() {
	for(let y = 0; y < height; y++){
		for(let x = 0; x < width; x++){
			fill(random(255),random(255),random(255))
			rect(x, y, 1)
		}
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}