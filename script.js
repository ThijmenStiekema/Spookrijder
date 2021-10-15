var road, auto, score, xcar, ycar, vxcar, vycar, s, score, gamestate = 0;

class Player {
  constructor(x, y, vx, vy, autowidth, autoheight) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.autowidth = autowidth;
    this.autoheight = autoheight;
  }
  draw() {
    imageMode(CENTER);
    image(playerauto, this.x, this.y, 200, 150);
    this.autowidth = this.autowidth + this.vautowidth;
    this.autoheight = this.autoheight + this.vautoheight;
    this.x = constrain(this.x, 150, 1150);
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 10;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 10;
    }
  }
}

class Car {
  constructor(lane, speed) {
    this.x = 450 + lane * 90
    this.y = 0;
    this.autowidth = 100
    this.autoheight = 75
    this.speed = speed;
    this.vx = -0.5 + lane * 0.125 * this.speed
    this.vy = this.speed;
    this.img = auto;
  }
  draw() {
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.autowidth, this.autoheight);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    if (this.autowidth < 174) {
      this.autowidth = this.autowidth * 1.0015;
      this.autoheight = this.autoheight * 1.0015;
    }
    else {
      this.autowidth = 175;
    }

  }

  checkCollision() {
    if (player.y > this.y - 0.7 * this.autoheight && player.y < this.y + 0.7 * this.autoheight && player.x > this.x - 0.9 * this.autowidth && player.x < this.x + 0.9 * this.autowidth) {
      console.log('HIT')
      gamestate = 2;
    }
  }
}

function preload() {
  road = loadImage('assets/road.png');
  auto = loadImage('assets/NieuwsteAuto2.png');
  playerauto = loadImage('assets/PlayerAuto.png');
  startscherm = loadImage('assets/startschermgame.png');
  music = loadSound('assets/Free-Synthwave-Loop.wav');
  //road2 = loadImage('assets/SythwaveWeg (1).gif');
}

var cars = [];

function setup() {
  createCanvas(1280, 960)

  player = new Player(640, 750, 0, 0, 100, 75);
  setInterval(10);
  score = 0;
  highscore = 0;
  speed = 1.5
  spawnspeed = 200
}


function gameOver() {
  if (score > highscore) {
    highscore = score;
  }
  background(150);
  textAlign(CENTER);
  textSize(30);
  text('GAME OVER', 640, 550);
  textAlign(CENTER);
  textSize(15);
  text('Score: ' + score + ' Highscore: ' + highscore, 640, 600);
  text('Press ENTER to restart', 640, 575);
  if (keyIsDown(ENTER)) {
    score = 0
    cars = [];
    speed = 1.5;
    spawnspeed = 200
    gamestate = 0;
  };
}

function draw() {

  if (gamestate == 0) {
    imageMode(CORNER);
    image(startscherm, 0, 0, 1280, 960);
    textAlign(CENTER);
    textSize(100);
    fill('white');
    text("SPOOKRIJDER", 640, 500);
    textSize(20);
    text("Press ENTER to start the game", 640, 550);
    if (keyIsDown(ENTER)) {
      gamestate = gamestate + 1;
      music.loop();
    };
  }

  if (gamestate == 1) {
    imageMode(CORNER);
    image(road, 0, 0, 1280, 960);
    player.draw();

    if (spawnspeed>100){spawnspeed = spawnspeed - speed * 0.01}
    if (frameCount % round(spawnspeed) == 0) {
      speed = speed + 0.05
      let newCar = new Car(random(-0.2, 4), speed);
      cars.push(newCar);
      console.log("nieuwe car!");
    }

    cars.forEach((car) => {
      car.draw();
      car.checkCollision();
    });

    if (frameCount % round(spawnspeed) == 0) {
      score = score + 100;
    }
    textSize(30);
    fill('white')
    text('Score: ' + score, 100, 50);
  }

  if (gamestate == 2) {
    gameOver();
    music.stop();
  }


}
