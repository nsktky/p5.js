let grid = 30

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100, 100);
	noStroke();
	angleMode(DEGREES)
}

function draw() {
	for (let x = 0; x < width+grid; x+=grid) {
		for (let y = 0; y < height+grid; y+=grid) {
			let h = map(noise(dist(x, y, 0, 0) / width, frameCount*0.001), 0, 1, 0, 500)
			let s = map(noise(tan(noise((x + width / 2) / h, (y + height / 2) / h)) * 300, frameCount*0.001), 0, 1, 0, 720);
			fill(s, 80, 100, 1)
			circle(x, y, h);
		}
	}
}