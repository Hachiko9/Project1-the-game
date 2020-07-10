class Game {
  constructor() {
    this.canvas = undefined;
    this.ctx = undefined;
    this.car = new Player(this, 10, 250, 150, 100);
    this.obstacles = [];
    this.backgroundImg = new Image();
    this.x = 0;
    this.y = 0;
    this.width = 1000;
    this.height = 400;
  }

  init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.start();
    this.createObstacles();
  }

  start() {
    //this.drawBackground();
    this.drawMainCharacter();
    setInterval(() => {
      this.clear();
      //this.drawBackground();
      this.drawMainCharacter();
      for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].move();
        this.obstacles[i].draw();
        this.car.crashCollision(this.obstacles[i]);
        if (this.obstacles[i].x <= 0) {
          this.obstacles.splice(i, 1);
        }
      }
    }, 1000 / 60);
  }

  createObstacles() {
    if (Math.floor(Math.random() * 10) % 2 === 0) {
      this.obstacles.push(new Obstacle(this));
    }

    setTimeout(() => {
      this.createObstacles();
    }, 2000);
  }

  drawBackground() {
    this.backgroundImg.src = "images/road.png";
    this.ctx.drawImage(
      this.backgroundImg,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  drawMainCharacter() {
    this.car.drawComponent("./assets/hero.png");
  }

  clear() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);
  }
}
