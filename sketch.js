function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
    
    angleMode(DEGREES);
  }
  
  function keyPressed() {
   if (keyCode == ENTER) { save('screenshot.png'); }
  }
  
  function draw() {
    background(220);
    
    let cx = width / 2, cy = height / 2;
    
     let num = 6;
     let offset = min(width, height) / 5;
     let margin = offset / 10;
     let d = (min(width, height)  - offset * 2 - margin * (num - 1)) / (num - 1);
    let x_offset = (width - d * num) / 2;
    let y_offset = (height - d * num) / 2;
     for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
       let cx = (d + margin) * i + x_offset;
       let cy = (d + margin) * j + y_offset;
    
      let rot = int(random(4)) * 90;
      push();
      translate(cx, cy);
      rotate(rot);
      fill(0);
      
      let mode = int(random(4));
      if (mode == 0) {
        circle(0, 0, d);
      } else if (mode == 1) {
        rect(-d/2, -d/2, d, d);
      } else if (mode == 2) {
        triangle(-d/2, -d/2, d/2, -d/2, d/2, d/2);
      } else if (mode == 3) {
        arc(-d/2, -d/2, d*2, d*2, 0, 90);
      }
      pop();
    }  
   }
  }