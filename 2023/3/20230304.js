function setup() {
	createCanvas(windowWidth, windowHeight)
	// noiseDetail(1)
	background(200)
	// colorMode(HSB, 360, 100, 100, 100)
	noStroke()
	rectMode(CENTER)
}

function draw() {
	// background(255, 10)
	translate(width/2, height/2);
	rotate(frameCount*0.03)
	for(let y = 0; y < height; y+=20){
		for(let x = 0; x < width; x+=20){
			let angle = map(noise(x*0.0000001, y*0.1, frameCount*0.0001), 0, 1, 0, 360)
			let nx = 0
			let ny =0
			if(angle < 360 && angle > 250){
				nx = sin(angle)*x
				ny = cos(angle)*y	
				fill(angle, 100, 100, 100)
			}else if(angle < 250 && angle > 200){
				nx = cos(angle)*x
				ny = tan(angle)*y	
				fill(angle*0.5, 100, 100, 100)
			} else if(angle < 200 && angle > 150) {
				nx = tan(angle)*x
				ny = sin(angle)*y	
				fill(angle*0.1, 100, 100, 100)
			} else {
				nx = cos(angle)*x
				ny = sin(angle)*y	
				fill(angle, 0, 0, 100)
			}
			rect(nx, ny, 1+nx/x, 1+ny/y)
		}
	}

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}