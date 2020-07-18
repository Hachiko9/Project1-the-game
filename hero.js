class Player extends Component {
  constructor(game, x, y, w, h) {
    super(game, x, y, w, h);
    this.move();
  }

  move() {
    document.onkeydown = (event) => {
      const key = event.keyCode;
      const keyCodes = [32, 38];
      if (keyCodes.includes(key) && (this.y === 250 || this.y === 225)) {
        switch (key) {
          case 38:
          case 32:
            this.y -= 150;
            setTimeout(() => {
              this.y += 150;
            },700)
            break;
        }
      }
    };
  }

  checkCollision(element) {
    //y axis
    if (this.y + 10 <= element.y + element.height && this.y >= element.y) {
      //x axis
      if (this.x + element.width >= element.x && this.x <= element.x + element.width) {
        return true;
      }
    }
    return false;
  }

  collectCoin(element) {
    //y axis
    if (this.y + 15 <= element.y + element.height && this.y >= element.y) {
      //x axis
      if (this.x + element.width >= element.x && this.x <= element.x + element.width) {
        this.game.collectedCoins++;
        return true;
      }
    }
  }

}
