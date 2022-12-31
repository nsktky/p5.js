var inc = 0.1;
var scl = 10;
var cols, rows;
var fr;
var zoff = 0;
var particles = [];
var flowfield;

function Particle(){
  this.pos = createVector(random(width / 10 * 4.5, width / 10 * 5.5), random(height / 10 * 4.5, height / 10 * 5.5));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 2;

  this.prevPos = this.pos.copy();

  this.update = function(){
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.follow = function(vectors){
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  }
  this.applyForce = function(force){
    this.acc.add(force);
  }

  this.show = function(){
    stroke(182, 74, 126, 10);
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
    // point(this.pos.x, this.pos.y);
  }

  this.updatePrev = function(){
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  this.edges = function(){
    if (this.pos.x > width){
       this.pos.x = 0;
       this.updatePrev();
    }
    if (this.pos.x < 0){
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height){
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0){
      this.pos.y = height;
      this.updatePrev();
    }
  }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    cols = floor(width / scl);
    rows = floor(height / scl);
    flowfield = new Array(cols * rows);
    var size = max(width, height) * 10
    for(var i = 0; i < size; i++){
      particles[i] = new Particle();
    }
    background(226, 167, 202)
  }

  function draw() {
    var yoff = 0;
    for(var y = 0; y < rows; y++){
      var xoff = 0;
      for(var x = 0; x < cols; x++){
        var index = x + y * cols;
        var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
        var v = p5.Vector.fromAngle(angle);
        v.setMag(0.1);
        flowfield[index] = v;
        xoff += inc;
        stroke(200);
      }
      yoff += inc

      zoff += 0.00005;
    }
    for(var i = 0; i < particles.length; i++){
      particles[i].follow(flowfield);
      particles[i].update();
      particles[i].edges();
      particles[i].show();
    }
}