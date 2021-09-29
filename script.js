var road, auto, score;

function preload() {
  road = loadImage('assets/road.png');
  auto = loadImage('assets/NieuwsteAuto2.png');
  playerauto = loadImage('assets/PlayerAuto.png');
}

function setup() {
  createCanvas(1280, 960)
  car1 = new Car(470, 0, -0.4, 1, 100, 75);
  car = new Car(640, 0, 0, 1, 100, 75);
  player = new Player(640, 750, 0, 0, 100, 75);
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
    image(playerauto, this.x, this.y, 200, 150);
    this.autowidth = this.autowidth + this.vautowidth;
    this.autoheight = this.autoheight + this.vautoheight;
    if (keyIsDown(LEFT_ARROW)) {
    this.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
    this.x += 5;
    }
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
  car.draw();
  
  

  
  player.draw();



  
  textAlign(CENTER, BASELINE);
  text("Score: " + score, 20, 120);
  text('Spookrijder', 0, 12, width);

}

//  car = new Car(640, 0, 0, 1, 100, 75);