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
    this.collectedCoins = 0;
    this.sound;
  }

  splashPage() {
  }

  init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    const wImg = document.getElementById('winner-img');
    if (wImg) {
      document.body.removeChild(wImg);
    }
    this.start();
    this.setObstacles();
    this.setCoins();
  }

  start() {
    this.renderHero();
    this.playSound();
    const gameInt = setInterval(() => {
      this.clear();
      this.updateGame();
      this.renderHero();
      for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].move();
        if (this.collectedCoins > 3) {
          this.obstacles[i].draw(true);
        } else {
          this.obstacles[i].draw();
        }

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
        if (this.collectedCoins > 4) {
          this.coins[i].draw(true);
        } else {
          this.coins[i].draw();
        }
        const collected = this.hero.collectCoin(this.coins[i]);

        if (collected) {
          this.coins.splice(i, 1);
        }
      }

      const isWinner = this.collectedCoins > 9;
      if (isWinner) {
        this.winner(gameInt);
        return
      }

    }, 1000 / 60);
  }

  setObstacles() {
    if (Math.floor(Math.random() * 10) % 2 === 0) {
      this.obstacles.push(new Obstacle(this));
    }

    this.obstaclesInt =  setTimeout(() => {
      this.setObstacles();
    }, 1300);
  }

   setCoins() {
    if (Math.floor(Math.random() * 10) % 2 === 0) {
      this.coins.push(new Coin(this));
    }

    this.coinsInt = setTimeout(() => {
      this.setCoins();
    }, 3000);
  }

  drawBackground() {
    this.backgroundImg.src = "./assets/layer-1-sky.png";
    this.ctx.drawImage(
      this.backgroundImg,
      this.x,
      this.y - 60,
      this.width,
      this.height
    );
  }

  renderHero() {
    if (this.collectedCoins > 8) {
      this.hero.drawComponent("./assets/hero2.png", 80, 120);      
    } else {
      this.hero.drawComponent("./assets/hero.png");
    }
  }

  clear() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);
  }

  enableButton() {
    const startBtn = document.getElementById("start-button");
    startBtn.disabled = false;
  }

  gameOver(gameInt) {
    this.stopSound();
    this.clear();

    this.enableButton();
    
    clearInterval(gameInt);
    clearTimeout(this.obstaclesInt);
    clearTimeout(this.coinsInt);

    this.obstacles = undefined;
    this.coins = undefined;

    this.ctx.font = "60px Arial";
    this.ctx.fillText('OH NO!!!! YOU LOST!', 80, 80);
    this.ctx.font = "16px Arial";
    this.ctx.fillText('The Witch fuound you, the took all the magical CSS you had, tortured you, and found out where the rebellion was hidind. ', 80, 130);
    this.ctx.fillText('She killed all the survived wizards, and the Internet is condemed now!', 80, 160);
    this.ctx.font = "40px Arial";
    this.ctx.fillText('WELL DONE, YOU USELESS CUBE!', 80, 230);
    
    this.ctx.font = "16px Arial";
    this.ctx.fillText('... you\'re not even a cube anymore....', 80, 280);
    this.ctx.font = "50px Arial";
    this.ctx.fillText('WELL DONE, YOU USELESS THING!', 80, 350);
  }

  winner(gameInt) {
    this.stopSound();
    this.clear();
    this.enableButton();
    clearInterval(gameInt);
    clearTimeout(this.obstaclesInt);
    clearTimeout(this.coinsInt);
    this.obstacles = undefined;
    this.coins = undefined;
    
  setTimeout(() => {
      const {top, left, width, height} = this.canvas.getBoundingClientRect();
      const img = new Image();
      img.src = './assets/winner.png';
      img.id = 'winner-img';
      img.style.position = 'absolute';
      img.style.top = `${top}px`;
      img.style.left = `${left}px`;
      img.style.width = `${width}px`;
      img.style.height = `${height}px`;
      document.body.appendChild(img);
    }, 100)
  
  }

  playSound() {
    this.sound = document.createElement("audio");
    this.sound.src = './assets/sound.mp3';
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);

    this.sound.play();
  }

  stopSound() {
    this.sound.pause();
  }

  updateGame() {
    if(this.collectedCoins > 0) {
      this.backgroundImg.src = "./assets/layer-3-ground.png";
      this.ctx.drawImage(
        this.backgroundImg,
        0,
        -100,
        1000,
        500
      );
    }
    if(this.collectedCoins > 1) {
      this.drawBackground();
    }
    if(this.collectedCoins > 2) {
      this.backgroundImg.src = "./assets/layer-2-mountain.png";
      this.ctx.drawImage(
        this.backgroundImg,
        this.x,
        this.y - 60,
        this.width,
        this.height
      );
    }

    if(this.collectedCoins > 5) {
      this.backgroundImg.src = "./assets/tree.png";
      this.ctx.drawImage(
        this.backgroundImg,
        750,
        50,
        240,
        290
      );
    }

    if(this.collectedCoins > 6) {
      this.backgroundImg.src = "./assets/bush.png";
      this.ctx.drawImage(
        this.backgroundImg,
        140,
        260,
        110,
        80
      );
      this.ctx.drawImage(
        this.backgroundImg,
        240,
        260,
        110,
        80
      );
      this.ctx.drawImage(
        this.backgroundImg,
        440,
        260,
        110,
        80
      );
      this.ctx.drawImage(
        this.backgroundImg,
        540,
        260,
        110,
        80
      );
      this.ctx.drawImage(
        this.backgroundImg,
        640,
        260,
        110,
        80
      );
      this.ctx.drawImage(
        this.backgroundImg,
        740,
        260,
        110,
        80
      );
    }  

    if(this.collectedCoins > 7) {
      this.backgroundImg.src = "./assets/Mushroom_1.png";
      this.ctx.drawImage(
        this.backgroundImg,
        140,
        310,
        30,
        30
      );
      this.ctx.drawImage(
        this.backgroundImg,
        420,
        310,
        30,
        30
      );
      this.ctx.drawImage(
        this.backgroundImg,
        480,
        310,
        30,
        30
      );
      this.ctx.drawImage(
        this.backgroundImg,
        880,
        310,
        30,
        30
      );
      this.ctx.drawImage(
        this.backgroundImg,
        880,
        310,
        30,
        30
      );
      this.ctx.drawImage(
        this.backgroundImg,
        380,
        310,
        30,
        30
      );
    }  
  } 
}
