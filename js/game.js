let keyboard = new Keyboard();
let startScreenAudio = new Audio('audio/menu/miniature_saloon.wav');
let world;
startScreenAudio.loop = true;
// playSound(startScreenAudio, .5, 1);
let soundOn = true;
/**
 * @description Initiates the game by initializing the level, game, and loading game data, and stops the start screen audio.
 */
function startGame() {
     initLevel();
     init();
     loadGame();
     stopSound(startScreenAudio);
     hide('overlayGameOver');
     hide('overlayWin');
}


function looseGameScreener() {
     show('overlayGameOver');
     clearAllIntervals();
}


function winGameScreener() {
     show('overlayWin');
     clearAllIntervals();
}


function exit() {
     hide('overlay');
     hide('overlayGameOver');
     hide('overlayWin');
     show('start');
}


function styleColor(id) {
     let element = document.getElementById(id);
     if (element) {
          element.style.color = '#0d9fc9';
     }
}


function styleNone(id) {
     let element = document.getElementById(id);
     if (element) {
          element.style.color = '';
     }
}

function hide(id) {
     let element = document.getElementById(id);
     if (element) {
          element.classList.add('d-none');
     }
}


function show(id) {
     let element = document.getElementById(id);
     if (element) {
          element.classList.remove('d-none');
     }
}
/**
 * @description Initializes the game by setting up the canvas and creating a new World instance.
 */
function init() {
     canvas = document.getElementById('canvas');
     world = new World(canvas, keyboard, looseGameScreener, winGameScreener);
}
/**
 * @description Hides the game start element after a delay to transition into the loaded game state.
 */
function loadGame() {
     setTimeout(() => {
          hide('start');
     }, 200);
}

function nextPageMechanic() {
     styleColor('pageMechanic');
     styleNone('pageEnemies');
     styleNone('pageBoss');
     show('aboutGameMechanic');
     hide('aboutGame');
     hide('aboutEnemies');
     hide('aboutBossBattle');
}


function nextPageEnemies() {
     styleColor('pageEnemies');
     styleNone('pageMechanic');
     styleNone('pageBoss');
     hide('aboutGameMechanic');
     hide('aboutGame');
     show('aboutEnemies');
     hide('aboutBossBattle');
}


function nextPageBoss() {
     styleColor('pageBoss');
     styleNone('pageEnemies');
     styleNone('pageMechanic');
     hide('aboutGameMechanic');
     hide('aboutGame');
     hide('aboutEnemies');
     show('aboutBossBattle');
}


function toggleSoundMenu() {
     if (startScreenAudio.paused) {
          playSound(startScreenAudio, 0.5, 1);
          document.getElementById('soundOn').classList.remove('d-none');
          document.getElementById('soundOff').classList.add('d-none');
     } else {
          stopSound(startScreenAudio);
          document.getElementById('soundOn').classList.add('d-none');
          document.getElementById('soundOff').classList.remove('d-none');
     }
}

function muteAllSounds() {
     const allSoundsMuted = [
          walkCharacter, jumpCharacter, hurtCharacter, throwCharacter,
          deadChicken, collectBottle, collectCoin, themeStart, gamePlay,
          smashBottle, rotationBottle, startEndboss, startScreamEndboss, hitEndboss,
          HowToPlaySound, aboutPages, deadMosquito
     ];

     allSoundsMuted.forEach(function (sound) {
          sound.muted = true;
     });
}


function unmuteAllSounds() {
     const allSounds = [
          walkCharacter, jumpCharacter, hurtCharacter, throwCharacter,
          deadChicken, collectBottle, collectCoin, themeStart, gamePlay,
          smashBottle, rotationBottle, startEndboss, startScreamEndboss, hitEndboss,
          HowToPlaySound, aboutPages, deadMosquito
     ];

     allSounds.forEach(function (sound) {
          sound.muted = false;
     });
}


function toggleSound() {
     soundOn = !soundOn;
     if (soundOn) {
          document.getElementById('soundOnImage').classList.remove('d-none');
          document.getElementById('soundOffImage').classList.add('d-none');
          unmuteAllSounds();
     } else {
          document.getElementById('soundOnImage').classList.add('d-none');
          document.getElementById('soundOffImage').classList.remove('d-none');
          muteAllSounds();
     }
}


function backToMenu() {
     hide('overlay');
     playSound(HowToPlaySound, 1, 2);
}


function howToPlay() {
     show('overlay');
     playSound(HowToPlaySound, 1, 2);
}


function clearAllIntervals() {
     for (let i = 1; i < 9999; i++) window.clearInterval(i);
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



