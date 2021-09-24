var road, auto, score = 0;

function preload() {
  road = loadImage('assets/road.png');
  auto = loadImage('assets/EchteAuto.png');
}

function setup() {
  createCanvas(1280, 960)
  car1 = new Car(1, 3, 0, 0, 0, 0);
  player = new Player(100,'green', 200, 750, 5, -2);
}

class Player {
  constructor(radius, kleur, x, y, vx, vy){
   this.radius = radius;
   this.kleur = kleur;
   this.x = x;
   this.x = 600;
   this.y = 5;
   this.y = y;
   this.vx = vx;
   this.vy = vy;
  }
  draw(){
  fill('black')
  rect(this.x,this.y,this.radius,this.radius);
  if(this.x <= 0 || this.x >= 1280){
  this.vx = this.vx * -1;
  }
  else if(this.y <= 0 || this.y >= 960){
  this.vy = this.vy * -1;
  }
  }
}


class Car {
  constructor(speed, lane, x, y, vx, vy, autowidht, autoheight) {
    this.speed = speed;
    this.lane = lane;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.x = 525;
    this.y = 5; 
    this.autowidth = 10;
    this.autoheight = 20;
  }
  draw() {
    
    //if (this.lane = 3)
   // {
      //this.size = 1;
      image(auto, this.x, this.y);
     // this.vy = 1;
     // this.x = this.x + this.vx;
      //this.y = this.y + this.vy;
      //auto.resize(this.autowidth)
  //}
    
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
  text("Spookrijder!", 20, 80);
  text("Ontwijk de naderende auto's!", 20, 60);
  text("Score: " + score, 20, 120);
  textSize(20);
  player.draw();
}

