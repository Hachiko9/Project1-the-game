class Hero {
    constructor() {
        this.x = 10;
        this.y = 250;
        this.width = 100;
        this.height = 100;
        this.canvas = document.querySelector('canvas');
        this.ctx = canvas.getContext('2d');
    }

    renderHero() {
        let img = new Image();
        img.src = './assets/spritesheet.png';
        img.onload = function() {
          init();
        };
        
        const init = ()  => {
            this.ctx.drawImage(img, 0, 0, 1043, 824, this.x, this.y, 1043/10, 824/10);
        }
    }

    addMovements() {
        let isJumping = false;
        document.onkeydown = (event) => {
            const key = event.keyCode;
            const possibleKeysStrokes = [32];
            if (possibleKeysStrokes.includes(key) && isJumping === false) {
              switch (key) {
                case 32:
                  if (this.y <= 690 - this.height) {
                      this.clear();
                      isJumping = true;
                      this.y -= 100;
                      setTimeout(() => {
                          this.y +=100;
                          this.clear();
                          this.renderHero();
                          isJumping = false;
                      }, 400) 
                    };
                  this.renderHero();
                  break;
              }
            }
          };
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

}