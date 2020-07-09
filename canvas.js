// let img = new Image();
// img.src = './assets/spritesheet.png';
// img.onload = function() {
//     init();
// };

// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// const scale = 10;
// const width = 1043;
// const height = 824;
// const scaledWidth = width / scale;
// const scaledHeight = height /  scale;

// function drawFrame(frameX, frameY, canvasX, canvasY) {
//     ctx.drawImage(img,
//     frameX * width, frameY * height, width, height,
//     canvasX, canvasY, scaledWidth, scaledHeight);
// }

// function init() {
//     window.requestAnimationFrame(step);
// }

// const cycleLoop = [0, 1, 2, 3, 4, 5, 6,7 ,8 ,9, 10, 11, 12, 13];
// let currentLoopIndex = 0;
// let frameCount = 0;

// function step() {
//     frameCount++;

//     if (frameCount < 5) {
//         window.requestAnimationFrame(step);
//         return;
//     }

//     frameCount = 0;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);
//     currentLoopIndex++;

//     if (currentLoopIndex >= cycleLoop.length) {
//         currentLoopIndex = 0;
//     }
    
//     window.requestAnimationFrame(step);
// }



let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);


// displayStory() {
//     let canvas = document.querySelector('canvas');
//     let ctx = canvas.getContext('2d');

//     ctx.font = "30px Arial";
//     ctx.fillText("Hello World", 10, 50);
// }