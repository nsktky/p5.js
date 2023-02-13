let x, y
let points = []
let grid

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(0)
	rectMode(CENTER)
	colorMode(HSB, 36, 100, 100, 100)
	grid = width/ 30
	for(let x = 0; x < width + grid; x += grid){
		for(let y = 0; y < height + grid; y += grid){
			fill(0)
			let p = createVector(x, y)
			points.push(p)
		}
	}
	noStroke()
	blendMode(DIFFERENCE)
}

function draw() {
	translate(width/2, height/2)
	for(let i = 0; i < points.length; i++){
		rotate(frameCount*0.0001)
		fill(points[i].x, points[i].y, 100)
		rect(points[i].x, points[i].x, grid*3, cos(frameCount*0.005)*10)
	}

}