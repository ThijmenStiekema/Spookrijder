var road, auto, score = 0;

function preload() {
  road = loadImage('assets/road.png');
  auto = loadImage('assets/EchteAuto.png');
}


function setup() {
  createCanvas(1280, 960)
  car1 = new Car(1, 3, 0, 0, 0, 0);
  player = new Player();
}

class Player {
  constructor() {
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
     x -= 5;
    
  } else if (keyCode === RIGHT_ARROW) {
    
  }
}

class Car {
  constructor(speed, lane, x, y, vx, vy) {
    this.speed = speed;
    this.lane = lane;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.y = 0;
    this.x = 520;
    this.autowidth = 
    this.autohieght = 
  }
  draw() {
    if (this.lane = 3)
    {
      this.size = 1;
      image(auto, this.x, this.y);
      this.vy = 1;
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;
      auto.resize(this.autowidth)
    }
    
    //this.x = this.x + this.vx;
    //this.y = this.y + this.vy;
    //if (this.x <= 0 || this.x >= 1280) {
      //this.vx = this.vx * -1;
    //}
    //else if (this.y <= 0 || this.y >= 960) {
    //  this.vy = this.vy * -1;
    //}
  }
}

function draw() {
  background('blue');
  image(road, 0, 0);
  car1.draw();
  textSize(20);
  text("Score: " + score, 20, 120);
}

