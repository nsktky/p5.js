function setup() {
	cnv = createCanvas(180, 320);
	let newCanvasX = (windowWidth - 180)/2;
	let newCanvasY = (windowHeight - 320)/2;
	cnv.position(newCanvasX, newCanvasY);
	noStroke()
	colorMode(HSB, 360, 100, 100, 100)
}

function draw() {
	for(let y = 0; y < height; y++){
		for(let x = 0; x < width; x++){
			let col = map(noise(y*0.1, x*10/y, frameCount*0.08), 0, 1, 0, 360)
			let baseCol = color(col, 100, 100, 100)
			x % 20 == 0 || y % 4 == 0 ? 
			fill(baseCol) :
			fill(hue(baseCol)*0.4, 100, 100);
			rect(x, y, 1)
		}
	}
}