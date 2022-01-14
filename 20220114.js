let num_list = [];
let count = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  array();
}

function draw() {
  background(38, 46, 64);
  if (count < num_list.length){
    for(let i = 0; i < num_list.length; i++){
      let a = num_list[i];
      let b = num_list[i + 1];
      if(a > b){
        let t = num_list[i];
        num_list[i] = num_list[i + 1];
        num_list[i + 1] = t
      }
    }
  } else {
    array();
    count = 0;
  }
  count++;

  for (let i = 0; i < 6; i++){
    if ((i % 2) == 0){
      show(-1 * i);
    } else{
      show(i)
    }
  }

}

function array() {
  num_list = 0
  num_list = new Array(width);
  for(let i = 0; i < num_list.length; i++){
    num_list[i] = random(height);
  }
}

function show(rad) {
  for(let i = 0; i < num_list.length; i++){
    if(num_list[i] > width / 3){
      stroke(151, 174, 115, 30);
    } else {
      stroke(63, 139, 146, 30);
    }
    var rad = rad;
    line(i * rad, height * rad, i, height - num_list[i]);
  }
}