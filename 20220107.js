var inc = 0.1;
var scl = 20;
var cols, rows;
var fr;
var zoff = 0;
var particles = [];

function Particle(){
  this.pos = createVector(random(width), random(height));
  this.vel = p5.Vector.random2D();
  this.acc = createVector(0, 0);
  this.col_num = int(random(0.1, 3));

  this.update = function(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.applyForce = function(force){
    this.acc.add(force);
  }

  this.show = function(){
    stroke(0, 0, 0, 100);
    strokeWeight(3);
    point(this.pos.x, this.pos.y);
  }

  this.edges = function(){
    if(this.pos.x > width) this.pos.x = 0;
    if(this.pos.x < 0) this.pos.x = width;
    if(this.pos.y > height) this.pos.y = 0;
    if(this.pos.y < 0) this.pos.y = height;

  }
}

function setup() {
    ç
    cols = floor(width / scl);
    rows = floor(height / scl);
    background(0, 98, 177)
    for(var i = 0; i < 100; i++){
      particles[i] = new Particle();
    }

  }

  function draw() {
    background(0, 98, 177, 20)
    var yoff = 0;
    for(var y = 0; y < rows; y++){
      var xoff = 0;
      for(var x = 0; x < cols; x++){
        var index = (x + y * width) * 4;
        var angle = noise(xoff, yoff, zoff) * TWO_PI;
        var v = p5.Vector.fromAngle(angle);
        xoff += inc;
        stroke(196, 193, 199, 10);

        push();
        translate(x * scl, y * scl);
        rotate(v.heading());
        strokeWeight(1);
        // line(0, 0, scl, 0);
        pop();
      }
      yoff += inc

      zoff += 0.00008;
    }
    for(var i = 0; i < particles.length; i++){
      particles[i].update();
      particles[i].show();
      particles[i].edges();
    }
}