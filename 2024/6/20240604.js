let radius
function setup() {
	createCanvas(windowWidth, windowHeight)
	background(200)
	radius = 300
//	angleMode(DEGREES)
}

function draw() {
	translate(width/2, height/2)
	for(let i=0; i < 720; i++){
		point(radius * (sin(i) + cos(frameCount)), radius * (cos(i) + sin(frameCount)))
		point(radius * sin(i), radius * (cos(i))-sin(frameCount)*radius)
		point(radius * (sin(i))-cos(frameCount)*radius, radius * cos(i))
	}
}