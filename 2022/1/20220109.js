var inc = 0.1;
var scl = 10;
var cols, rows;
var fr;
var zoff = 0;
var particles = [];
var flowfield;

function Particle(){
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 2;

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
    stroke(175, 175, 176, 200);
    strokeWeight(1);
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
    createCanvas(windowWidth, windowHeight);
    cols = floor(width / scl);
    rows = floor(height / scl);
    flowfield = new Array(cols * rows);
    var size = max(width, height) * 10
    for(var i = 0; i < size; i++){
      particles[i] = new Particle();
    }
    background(97, 95, 98)
  }

  function draw() {
    var yoff = 0;
    for(var y = 0; y < rows; y++){
      var xoff = 0;
      for(var x = 0; x < cols; x++){
        var index = x + y * cols;
        var angle = noise(xoff, yoff, zoff) * TWO_PI * 0.001;
        var v = p5.Vector.fromAngle(angle);
        v.setMag(0.01);
        flowfield[index] = v;
        xoff += inc;
        stroke(200);
      }
      yoff += inc

      zoff += 0.000005;
    }
    for(var i = 0; i < particles.length; i++){
      particles[i].follow(flowfield);
      particles[i].update();
      particles[i].show();
      particles[i].edges();
    }
}