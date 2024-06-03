let img, grid;
let points = []
function preload() {
	img = loadImage("nuko.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight)
    img.loadPixels();
    angleMode(DEGREES)
    img.resize(300, 450)
	grid = width*0.1
	for(let x = 0; x < width; x+=grid) {
		for(let y = 0; y < height; y+=grid) {
			let p = createVector(x, y)
			points.push(p)
		}
	}
}

function draw() {
	for(let i = 0; i < points.length; i++) {
		angle = map(noise(points[i].x, points[i].y, frameCount), 0, 1, 0, 270)
		points[i].add(sin(angle)*3, cos(angle)*3)
		if(points[i].x > width) points[i].x = random(width)
		if(points[i].x < 0) points[i].x = random(width)
		if(points[i].y > height) points[i].y = random(height)
		if(points[i].y < -100) points[i].y = random(height)
		image(img, points[i].x, points[i].y)
	}
}