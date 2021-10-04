var road, auto, score, xcar, ycar, vxcar, vycar, s, score = 0;

class Player {
  constructor(x, y, vx, vy, autowidth, autoheight){
   this.x = x;
   this.y = y;
   this.vx = vx;
   this.vy = vy;
   this.autowidth = autowidth;
   this.autoheight = autoheight;
  }
  draw(){
    imageMode(CENTER);
    image(playerauto, this.x, this.y, 200, 150);
    this.autowidth = this.autowidth + this.vautowidth;
    this.autoheight = this.autoheight + this.vautoheight;
    if (keyIsDown(LEFT_ARROW)) {
    this.x -= 10;
    }
    if (keyIsDown(RIGHT_ARROW)) {
    this.x += 10;
    }
  }
}

class Car {
  constructor(lane, speed){
    this.x = 450 + lane * 90
    this.y = 0
    this.autowidth = 100
    this.autoheight = 75
    this.vx = -0.5 + lane*0.23
    this.vy = 1
  }
  draw() {
    imageMode(CENTER);
    image(auto, this.x, this.y, this.autowidth, this.autoheight);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    if (this.autowidth < 180){
      this.autowidth = this.autowidth*1.0012;
      this.autoheight = this.autoheight*1.0012;
      }
      else{
        this.autowidth = 180;
      }
  }
}

function preload() {
  road = loadImage('assets/road.png');
  auto = loadImage('assets/NieuwsteAuto2.png');
  playerauto = loadImage('assets/PlayerAuto.png');
  startscherm = loadImage('assets/startschermgame.png');
}

var cars = [];

function setup() {
  createCanvas(1280, 960)
  car = new Car(3,0);
  cars.push(car);
  player = new Player(640, 750, 0, 0, 100, 75);
}

function draw() {
  background('blue');
  imageMode(CORNER);
  image(startscherm, 0, 0, 1280, 960);
  if (keyIsDown(ENTER)){gamestart=1};
  {
  image(road, 0, 0);
  
  if(frameCount % 250 == 0){
     let newCar = new Car(random(0,4));
     cars.push(newCar);
    console.log("nieuwe car!");
  }
  cars.forEach((c) => {
    c.draw();
  });
  player.draw();
  }
  s = s + 1;
  if (s % 4 == 0){
  score = score + 1
    }
  textSize(30);
  fill('white')
  text('Score: ' + score, 0, 50);
}

//  car = new Car(640, 0, 0, 1, 100, 75);