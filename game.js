class Game {
  constructor() {
    this.canvas = undefined;
    this.ctx = undefined;
    this.hero = new Player(this, 10, 250, 150, 100);
    this.obstacles = [];
    this.coins = [];
    this.backgroundImg = new Image();
    this.x = 0;
    this.y = 0;
    this.width = 1000;
    this.height = 400;
  }

  splashPage() {
  }

  init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    // this.ctx.rect(20, 20, 150, 100);
    // this.ctx.font = "30px Arial";
    // this.ctx.fillText("Hello World", 10, 50);
    this.start();
    this.createObstacles();
    this.createCoins();
  }

  start() {
    //this.ctx.clearRect(this.x, this.y, this.width, this.height);
    //this.drawBackground();
    this.renderHero();
    setInterval(() => {
      this.clear();
      //this.drawBackground();
      this.renderHero();
      for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].move();
        this.obstacles[i].draw();
        //this.hero.crashCollision(this.obstacles[i]);
        if (this.obstacles[i].x <= 0) {
          this.obstacles.splice(i, 1);
        }
      }

      for (let i = 0; i < this.coins.length; i++) {
        this.coins[i].move();
        this.coins[i].draw();
        this.hero.collectCoin(this.coins[i]);
        if (this.coins[i].x <= 0) {
          this.coins.splice(i, 1);
        }
      }

    }, 1000 / 60);
  }

  createObstacles() {
    if (Math.floor(Math.random() * 10) % 1 === 0) {
      this.obstacles.push(new Obstacle(this));
    }

    setTimeout(() => {
      this.createObstacles();
    }, 2000);
  }

  createCoins() {
    if (Math.floor(Math.random() * 10) % 5 === 0) {
      this.coins.push(new Coin(this));
    }

    setTimeout(() => {
      this.createCoins();
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

  renderHero() {
    this.hero.drawComponent("./assets/hero.png");
  }

  clear() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);
  }
}
