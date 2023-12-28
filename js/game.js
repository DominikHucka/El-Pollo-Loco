let keyboard = new Keyboard();
let startScreenAudio = new Audio('audio/menu/miniature_saloon.wav');
startScreenAudio.loop = true;
// playSound(startScreenAudio);


function startGame() {
     initLevel();
     init();
     loadGame();
     stopSound(startScreenAudio);
}


function init() {
     canvas = document.getElementById('canvas');
     world = new World(canvas, keyboard);
}



function loadGame() {
    setTimeout(() => {
     document.getElementById('start').style.display = 'none';
    }, 200);
}


function settings() {
     document.getElementById('start').style.display = 'none';
     document.getElementById('canvas').style.display = 'none';
}


window.addEventListener('keydown', (event) => {
     if (event.keyCode == 39) {
          keyboard.RIGHT = true;
     }

     if (event.keyCode == 37) {
          keyboard.LEFT = true;
     }

     if (event.keyCode == 38) {
          keyboard.UP = true;
     }

     if (event.keyCode == 40) {
          keyboard.DOWN = true;
     }

     if (event.keyCode == 32) {
          keyboard.SPACE = true;
     }
     if (event.keyCode == 68) {
          keyboard.D = true;
     }
});


window.addEventListener('keyup', (event) => {
     if (event.keyCode == 39) {
          keyboard.RIGHT = false;
     }

     if (event.keyCode == 37) {
          keyboard.LEFT = false;
     }

     if (event.keyCode == 38) {
          keyboard.UP = false;
     }

     if (event.keyCode == 40) {
          keyboard.DOWN = false;
     }

     if (event.keyCode == 32) {
          keyboard.SPACE = false;
     }
     if (event.keyCode == 68) {
          keyboard.D = false;
     }
});



