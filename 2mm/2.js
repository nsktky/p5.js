let grid = 10

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100, 100);
	noStroke();
}

function draw() {
	for (let x = 0; x < width+grid; x+=grid) {
		for (let y = 0; y < height+grid; y+=grid) {
		  let A = noise(dist(x, y, width / 2, height / 2) / height, frameCount*0.002) * width;
		  let h = (noise(tan(noise((x - width / 2) / A, (y - height / 2) / A)) * 10, frameCount*0.002) * 72) % 360;
		  fill(h, height, width, 10);
		  circle(x, y, grid);
		}
	}
}