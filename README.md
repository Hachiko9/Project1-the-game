# The Legend of CSS: Breathe of the Internet

## Desciption

The user finds himself in a world where all the CSS has been stolen by an evil witch, and not the Internet is a very boring places. The Hero must collects all the CSS coins in order to restore some <style> in the web world, always avoiding the mortal obstacles he will meet on his way.
With every coin, a little bit of color will be brought to thr screen: the Hero must collect all the coins to WIN.
  
## MVP (DOM - CANVAS)

- the player jumps to avoid obstacles
- the player collects coins
- obstacles appear randomly from right side of the screen
- coins appear randomly from right side of the screen
- if the player collides with an obstacle, the player loses and the game ends
- if the player collects all the coins, the player wins and the game ends

## Backlog

- 3 levels
- 3th level with monster and combat with the witch
- personalization of name/sex of the hero

## Data Structure

# - main.js
    startScreen()
    gameScreen()
    gameOverScreen()
    WinScreen()
    
# - game.js
    canvas()
    game()
    startLoop()
    checkCollisions()
    collectCoins()
    countCoins()
    drawCanvas()
    gameOver()
    Win()
    updateBackground()
   
# - hero
    draw()
    jump()
    collect()
    checkCollision()
    
# - obstacle
    draw()

# - coin
    draw()

## States y States Transitions

- splashScreen
- gameScreen
- gameOverScreen

Task

# - main:
    buildDom
    startScreen()
    gameScreen()
    gameOverScreen()
    WinScreen()
    addEventListener()
    
# - game:
    canvas()
    game()
    starLoop()
    checkCollisions()
    collectCoins()
    countCoins()
    drawCanvas()
    GameOver()
    Win()
    updateBackground()
    
# - hero 
    draw()
    jump()
    collect()
    checkCollision()
    
# - obstacle
    draw()

# - coin
    draw()
    
### Link
### Trello: https://trello.com/b/fjSlcDuS/project-1-the-game
### Git: https://github.com/Hachiko9/Project1-the-game
### Slides: 
