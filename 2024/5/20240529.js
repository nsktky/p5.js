let radius, x, y

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100, 100);
	radius = height * 0.25;
	background(255)
	angleMode(DEGREES)
	// noFill()
}

function draw() {
	// background(255)
	translate(width / 2, height / 2);
	beginShape()
	for(let i = 0; i < 1000; i++) {
		ox = radius * sin(i)
		oy = radius * cos(i)
		let angle = map(noise(dist(ox, oy, width/2, height/2), i, frameCount*0.001), 0, 1, -360, 360)
		x = radius * sin(angle + frameCount)
		y = radius * tan(angle)
		vertex(x, y)
	}
	endShape()

}