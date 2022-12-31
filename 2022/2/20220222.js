let bg_colorPicker;
let body_colorPicker;
let face_colorPicker;

let r = 50;
let x = 0;
let y = 0;
let space = 5;
let a,b,c;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);

  bg_colorPicker = createColorPicker("#00b5de");
  body_colorPicker = createColorPicker("#f8b516");
  face_colorPicker = createColorPicker("#fff")
  bg_colorPicker.position(width*0.5, height - 50);
  body_colorPicker.position(width*0.2, height - 50);
  face_colorPicker.position(width*0.8, height - 50);

}

function draw() {
  background(bg_colorPicker.color());

  for (let i = 0; i <= width; i += r){
    for (let j = 0; j < height; j += 50){
      draw_rect(i, y + j);
    }
  }
}

function draw_rect(x, y) {
  let body_random_move = random(5);
  let y_eye_random_move = random(5);
  let x_eye_random_move = map(sin(frameCount * 2),-1, 1, 0, 15);

  fill(body_colorPicker.color());
  stroke(86, 85, 153, 200);
  rect(x, y + body_random_move, r - space, r - space, 10, 10);

  fill(face_colorPicker.color())
  stroke(86, 85, 153, 200);
  circle(x + x_eye_random_move, y - 12 + y_eye_random_move, 7);
  circle(x + x_eye_random_move - 15, y - 12 + y_eye_random_move, 7);
  ellipse(x + x_eye_random_move - 15 / 2, y - 3 + y_eye_random_move / 2, 10, 2);
}