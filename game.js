class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.hero = new Hero;
        this.coins = 0;
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
        this.startGame();
        //this.setObstacles();
      }

    startGame() {
        //this.drawBackground();
        this.hero.renderHero();
        this.hero.addMovements();
        setInterval(() => {
        //this.clear();
        //this.drawBackground();
        // for (let i = 0; i < this.obstacles.length; i++) {
        //     this.obstacles[i].move();
        //     this.obstacles[i].draw();
        //     this.car.crashCollision(this.obstacles[i]);
        //     if (this.obstacles[i].y > 800) {
        //         this.obstacles.splice(i, 1);
        //         }
        //     }
        }, 1000 / 60);
    }

    startBackgroundLoop() { 
        this.backgroundImg.src = "images/road.png";
        this.ctx.drawImage(
            this.backgroundImg,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    setCoinsAmount() {}

    getCoinsAmount() {}

    gameOver() {}

    win() {}

    updateBackground() {}

    setObstacles() {
        if (Math.floor(Math.random() * 10) % 2 === 0) {
            this.obstacles.push(new Obstacle(this));
        }
    
        setTimeout(() => {
         this.setObstacles();
        }, 3000);
    }

    displayCoins() {}

    checkCollision() {}

    collectCoins() {}

    clear() {
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
    }
}