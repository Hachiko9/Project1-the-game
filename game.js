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
    this.coinsInt;
    this.obstaclesInt;
  }

  splashPage() {
  }

  init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.start();
    this.setObstacles();
    this.setCoins();
  }

  start() {
    this.renderHero();
    const gameInt = setInterval(() => {
      this.clear();
      //this.drawBackground();
      this.renderHero();
      for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].move();
        this.obstacles[i].draw();
        const isGameOver = this.hero.checkCollision(this.obstacles[i]);
        if (isGameOver) {
          this.gameOver(gameInt);
          return;
        }
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

  setObstacles() {
    if (Math.floor(Math.random() * 10) % 2 === 0) {
      this.obstacles.push(new Obstacle(this));
    }

    this.obstaclesInt =  setTimeout(() => {
      this.setObstacles();
    }, 800);
  }

   setCoins() {
    if (Math.floor(Math.random() * 10) % 2 === 0) {
      this.coins.push(new Coin(this));
    }

    this.coinsInt = setTimeout(() => {
      this.setCoins();
    }, 1500);
  }



  // drawBackground() {
  //   this.backgroundImg.src = "images/road.png";
  //   this.ctx.drawImage(
  //     this.backgroundImg,
  //     this.x,
  //     this.y,
  //     this.width,
  //     this.height
  //   );
  // }

  renderHero() {
    this.hero.drawComponent("./assets/hero.png");
  }

  clear() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);
  }

  gameOver(gameInt) {
    this.clear();
    clearInterval(gameInt);
    clearTimeout(this.obstaclesInt);
    clearTimeout(this.coinsInt);
    this.obstacles = undefined;
    this.coins = undefined;
    this.ctx.font = "16px Arial";
    this.ctx.fillText('Game Over', 100, 100);
  }
}
