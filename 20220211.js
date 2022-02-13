let num_list = [];
let count = 0;
let col_list = ["#eadec1", "#d6cf90", "#d5e3ce", "#a25b6d", "#c6c3a0"]

function setup() {
  createCanvas(windowWidth, windowHeight);
  array();
}

function draw() {
  background("#a38457");
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

  for(let i = 0; i < 5; i++){
    let h = height / 5
    noStroke();
    fill(col_list[i])
    show(0, i*h)
  }

}

function array() {
  num_list = 0
  num_list = new Array(width);
  for(let i = 0; i < num_list.length; i++){
    num_list[i] = random(height);
  }
}

function show(x, y) {
  for(let i = 0; i < num_list.length; i++){
    rect(i + x, height - num_list[i] + y, height, 1);
  }
}