let x = 0;
let y = 0;
let w = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(125, 75, 70);
  x = 0;
  y = 0;
  w = width/5;
}

function draw(){
  for(let i = w/5; i < width; i += w){
    for(let j = w/5; j <height; j += w){
      x = i;
      y = j
      fill(163, 107, 33);
      noStroke();
    
      rect(x, y, w*0.2, w*0.3, 10);
      rect(x+w*0.4, y, w*0.2, w*0.3, 10);
      rect(x, y+w*0.2, w*0.6, w*0.1);
      rect(x, y+w*0.5, w*0.6, w*0.1, 10);
      rect(x+w*0.1, y+w*0.65, w*0.4, w*0.06, 10);
      rect(x+w*0.2, y+w*0.75, w*0.2, w*0.06, 10);
    
      fill(253, 208, 0)
      for(let i = 0; i < 6; i++){
        let x2 = x+i*w*0.1
        triangle(x2, y+w*0.3, x2+w*0.1, y+w*0.3, x2+w*0.05, y+w*0.4)
      }

      fill(253, 208, 0)
      for(let i = 0; i < 5; i++){
        let x3 = x+i*w*0.1+w*0.05
        triangle(x3, y+w*0.5, x3+w*0.1, y+w*0.5, x3+w*0.05, y+w*0.4)
      }

      fill(250, 191, 19)
      circle(x+w*0.1,y+w*0.1,w*0.12)
      circle(x+w*0.5,y+w*0.1,w*0.12)
      fill(125, 75, 70)
      rect(x+w*0.15, y+w*0.22, w*0.1, w*0.07, 10);
      rect(x+w*0.35, y+w*0.22, w*0.1, w*0.07, 10);

    }
  }
}