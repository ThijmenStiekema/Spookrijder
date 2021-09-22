let road;
function preload() {
  road = loadImage('assets/road.png');
}

let auto;
function preload() {
  auto = loadImage('assetsAuto.png');
}

function setup() {
  createCanvas(1280, 960)
  car = new Car(10,4,100,200,5,-2);
}

class Player{
  constructor(Snelheid,){
    
  }
}

class Car{
  constructor(speed, lane, x, y, vx, vy){
    this.speed = speed;
    this.lane = lane;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
  }
  draw(){
    rect(this.x, this.y,);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    if(this.x <= 0 || this.x >= 1280){
    this.vx = this.vx * -1;
    }
   else if(this.y <= 0 || this.y >= 960){
   this.vy = this.vy * -1;
    }
  }
}

function draw(){
  background('blue');
  image(road, 0, 0);
  Car.draw();
}

