window.onload = function () {

  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  
  console.log('hey')
  canvas = document.getElementById("canvas");
  ctx = this.canvas.getContext("2d");
  ctx.rect(20, 20, 150, 100);



  ctx.font = "16px Arial";
  ctx.fillText("Once upon a time, long ago, there was a fantastic world, full of color, extravagance, and completely useless, but funny animated images.", 10, 50);
  ctx.fillText("This incredible world was made such by a very strong power, called CSS, handed down from generation to generation by the tribe of magicians.", 10, 80);
  ctx.fillText("handed down from generation to generation by the tribe of magicians.", 10, 110);
  ctx.fillText("but one day, an evil witch, who hated all that was superfluous and useless, managed to destroy the tribe of wizards and ban the use of CSS.", 10, 140);

  ctx.fillText("fortunately, the resistance continues to fight. a small group of wizards have managed to save themselves, and have entrusted to you,", 10, 170);
  ctx.fillText("their hero, the bit of magic left to him, for you to defeat the witch.", 10, 200);
  ctx.fillText("thanks to this you have obtained a proud and invincible aspect, and a super strength capable of moving at dizzying heights.",10, 230);
  ctx.fillText("Collect all the coins, don't be destroyed by the fearsome witch henchmen, the powerful black squares, and bring",10, 260);
  ctx.fillText("the <style> back to the world of the Internet",10, 290);

  function startGame() {
    const myGame = new Game();
    myGame.init();
  }
};
