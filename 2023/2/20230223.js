function setup() {
	cnv = createCanvas(320,180);
	let newCanvasX = (windowWidth - 320)/2;
	let newCanvasY = (windowHeight - 180)/2;
	cnv.position(newCanvasX, newCanvasY);
	noStroke()
	colorMode(HSB, 360, 100, 100, 100)
}

function draw() {
	for(let y = 0; y < height; y++){
		for(let x = 0; x < width; x++){
			let col = map(noise(x/mouseX, x*y/mouseY, frameCount*0.1), 0, 1, 0, 500)
			let baseCol = color(col, 100, 100, 100)
			fill(baseCol);
			rect(x, y, 1)
		}
	}
}