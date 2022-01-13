let num_list = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  num_list = new Array(width);
  for(let i = 0; i < num_list.length; i++){
    num_list[i] = random(height);
  }
}

function draw() {
  background(0, 66, 109);

  for(let i = 0; i < num_list.length; i++){
    let a = num_list[i];
    let b = num_list[i + 1];
    if(a > b){
      let t = num_list[i];
      num_list[i] = num_list[i + 1];
      num_list[i + 1] = t
    }
  }

  for(let i = 0; i < num_list.length; i++){
    if(num_list[i] > width / 3){
      stroke(232, 215, 175);
    } else {
      stroke(183, 156, 100);
    }
    line(i, height, i, height - num_list[i]);
  }
}