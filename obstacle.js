class Obstacle extends Component {
  constructor(game) {
    super(game);
    this.x = 1000;
    this.y = 240;
    this.width = 100;
    this.height = 100;
    this.img = new Image();
  }
  draw(hasImg) {
    if (hasImg) {
      this.img.src = "./assets/skeleton-fly_10.png";
      this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } else {
      this.img.src = "./assets/black-obstacle.png";
      this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    
  }

  move() {
    if (Math.floor(Math.random() * 20) % 3 === 0) {
      this.x -= 20;
    }
  }
}
