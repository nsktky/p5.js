function setup() {
	cnv = createCanvas(180,320);
	let newCanvasX = (windowWidth - 180)/2;
	let newCanvasY = (windowHeight - 320)/2;
	cnv.position(newCanvasX, newCanvasY);
	noiseDetail(1)
	// background(255)
	// colorMode(HSB, 360, 100, 100, 100)
}

function draw() {
	// background(0)
	translate(width/2, height/2);
	for(let y = 0; y < height; y+=2){
		for(let x = 0; x < width; x+=2){
			let angle = map(noise(x*0.01, y*0.01, frameCount*0.01), 0, 1, 0, 360)
			let nx = 0
			let ny =0
			if(angle < 360 && angle > 250){
				nx = sin(angle)*x
				ny = cos(angle)*y	
				stroke(angle, 100, 100, 100)
			}else if(angle < 250 && angle > 200){
				nx = cos(angle)*x
				ny = tan(angle)*y	
				stroke(angle*0.3, 100, 100, 50)
			} else if(angle < 200 && angle > 150) {
				nx = tan(angle)*x
				ny = sin(angle)*y	
				stroke(angle*2, 100, 100, 20)
			} else {
				nx = cos(angle)*x
				ny = sin(angle)*y	
				stroke(angle, 0, 0, 100)
			}
			point(nx, ny)
		}
	}
}