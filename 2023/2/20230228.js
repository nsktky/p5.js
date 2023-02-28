function setup() {
	createCanvas(windowWidth, windowHeight)
	noiseDetail(1)
	noStroke()
}

function draw() {
	// background(0, 5)
	translate(width/2, height/2);
	rotate(frameCount*0.004)
	for(let y = 0; y < height; y+=10){
		for(let x = 0; x < width; x+=10){
			let angle = map(noise(x*0.01, y*0.01, frameCount*0.01), 0, 1, 0, 360)
			let nx = 0
			let ny =0
			if(angle < 360 && angle > 250){
				nx = sin(angle)*x
				ny = cos(angle)*y	
				fill(angle, 100, 100, 100)
			}else if(angle < 250 && angle > 200){
				nx = cos(angle)*x
				ny = tan(angle)*y	
				fill(angle*0.2, 100, 100, 100)
			} else if(angle < 200 && angle > 150) {
				nx = tan(angle)*x
				ny = sin(angle)*y	
				fill(angle*2, 100, 100, 100)
			} else {
				nx = cos(angle)*x
				ny = sin(angle)*y	
				fill(angle, 0, 0, 100)
			}
			circle(nx, ny, x/y)
		}
	}
}