class Coin extends Component {
    constructor(game) {
      super(game);
      this.x = 1000;
      this.y = 100;
      this.width = 50;
      this.height = 50;
      this.img = new Image();
    }
    draw() {
      this.img.src = "./assets/black-obstacle.png";
      this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  
    move() {
      if (Math.floor(Math.random() * 20) % 3 === 0) {
        this.x -= 15;
      }
    }
  }
  