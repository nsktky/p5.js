let grid = 10

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100, 100);
	noStroke();
	angleMode(DEGREES)
}

function draw() {
	for (let x = 0; x < width+grid; x+=grid) {
		for (let y = 0; y < height+grid; y+=grid) {
			let h = map(noise(dist(x, y, width/2, height/2) / height, frameCount*0.005), 0, 1, 0, 720)
			let s = map(noise(sin(h), cos(h), frameCount*0.005), 0, 1, 0, 100)
			fill(h, s, 100, 100)
			rect(x, y, grid);
		}
	}
}