class Obstacle extends Component {
  constructor(game) {
    super(game);
    this.x = 1000;
    this.y = 250;
    this.width = 100;
    this.height = 150;
    this.img = new Image();
  }
  draw() {
    this.img.src = "./assets/obstacle.png";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  move() {
    if (Math.floor(Math.random() * 20) % 3 === 0) {
      this.x -= 15;
    }
  }
}
