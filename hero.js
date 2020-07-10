class Player extends Component {
  constructor(game, x, y, w, h) {
    super(game, x, y, w, h);
    this.move();
  }
  move() {
    document.onkeydown = (event) => {
      const key = event.keyCode;
      const possibleKeysStrokes = [32];
      if (possibleKeysStrokes.includes(key) && this.y === 250) {
        switch (key) {
          case 32:
            this.y -= 150;
            setTimeout(() => {
              this.y += 150;
            },800)
            break;
        }
      }
    };
  }

  crashCollision(element) {
    //y axis
    if (this.y + 10 <= element.y + element.height && this.y >= element.y) {
      //x axis
      if (this.x >= element.x && this.x <= element.x + element.width) {
        setTimeout(() => {
          alert("crash");
        }, 5);
        window.location.reload();
      }
    }
  }
}
