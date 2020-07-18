class Component {
  constructor(game, x, y, w, h) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.img = new Image();
  }
  
  drawComponent(imgSource, w, h) {
    const gameCtx = this.game.ctx;
    this.img.src = imgSource;

    if (w) {
      this.width = w;
    }

    if (h) {
      this.height = h;
    }

    gameCtx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
