function setup() {
	cnv = createCanvas(320,180);
	let newCanvasX = (windowWidth - 320)/2;
	let newCanvasY = (windowHeight - 180)/2;
	cnv.position(newCanvasX, newCanvasY);
	noStroke()
	noiseDetail(2)
	colorMode(HSB, 360, 100, 100, 100)
}

function draw() {
	for(let y = 0; y < height; y++){
		for(let x = 0; x < width; x++){
			let col = map(noise(x*0.01, y*0.01, frameCount*0.05), 0, 1, 0, 360)
			if(col < 360 && col > 200){
				fill(col, 20, 100, 100)
			}else if(col < 200 && col > 150){
				fill(col*0.3, 100, 100, 70)
			} else if(col < 150 && col > 100) {
				fill(col*2, 100, 100, 50)
			} else {
				fill(col, 0, 0, 100)
			}
			rect(x, y, 1)
		}
	}
}