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
	grid = width*0.02
	for(let x = 0; x < width; x+=grid) {
		for(let y = 0; y < height; y+=grid) {
			let p = createVector(x, y)
			points.push(p)
		}
	}
}

function draw() {
	for(let i = 0; i < points.length; i++) {
		push();
		angle = map(noise(points[i].x, points[i].y, frameCount*100), 0, 1, 0, 600)
		points[i].add(sin(angle), cos(angle))
		if(points[i].x > width) points[i].x = random(width)
		if(points[i].x < 0) points[i].x = random(width)
		if(points[i].y > height) points[i].y = random(height)
		if(points[i].y < -100) points[i].y = random(height)
		translate(points[i].x, points[i].y)
		rotate(i + frameCount)
		image(img, 0, 0)
		pop();
	}
}