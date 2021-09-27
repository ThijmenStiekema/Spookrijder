var road, auto, score;

function preload() {
  road = loadImage('assets/road.png');
  auto = loadImage('assets/NieuwsteAuto2.png');
}

function setup() {
  createCanvas(1280, 960)
  car1 = new Car(640, 0, 0, 1, 100, 75);
  player = new Player(640, 0, 0, 0, 100, 75);
}

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
    image(auto, this.x, this.y, this.autowidth, this.autoheight);
    this.autowidth = this.autowidth + this.vautowidth;
    this.autoheight = this.autoheight + this.vautoheight;
  }
}

class Car {
  constructor(x, y, vx, vy, autowidth, autoheight,) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.autowidth = autowidth;
    this.autoheight = autoheight;
  }
  draw() {
    imageMode(CENTER);
    image(auto, this.x, this.y, this.autowidth, this.autoheight);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    this.autowidth = this.autowidth*1.0012;
    this.autoheight = this.autoheight*1.0012;
  }
}

function draw() {
  background('blue');
  imageMode(CORNER);
  image(road, 0, 0);
  car1.draw();
  player.draw();

  //text("Spookrijder!", 20, 80);
  //text("Ontwijk de naderende auto's!", 20, 60);
  //text("Score: " + score, 20, 120);
  //textSize(20);
}

    
    //if (this.lane = 3)
   // {
      //this.size = 1;
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