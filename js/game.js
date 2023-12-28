let keyboard = new Keyboard();
let startScreenAudio = new Audio('audio/menu/miniature_saloon.wav');
startScreenAudio.loop = true;
// playSound(startScreenAudio);
/**
 * @description Initiates the game by initializing the level, game, and loading game data, and stops the start screen audio.
 */
function startGame() {
     initLevel();
     init();
     loadGame();
     stopSound(startScreenAudio);
}
/**
 * @description Initializes the game by setting up the canvas and creating a new World instance.
 */
function init() {
     canvas = document.getElementById('canvas');
     world = new World(canvas, keyboard);
}
/**
 * @description Hides the game start element after a delay to transition into the loaded game state.
 */
function loadGame() {
     setTimeout(() => {
          document.getElementById('start').style.display = 'none';
     }, 200);
}


function settings() {
     document.getElementById('start').style.display = 'none';
     document.getElementById('canvas').style.display = 'none';
}
/**
 * @description Event listener for keydown events to set corresponding flags in the keyboard object.
 * @param {Event} event - The keydown event.
 */
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
/**
 * @description Event listener for keyup events to reset corresponding flags in the keyboard object.
 * @param {Event} event - The keyup event.
 */
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



