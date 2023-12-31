let keyboard = new Keyboard();
let startScreenAudio = new Audio('audio/menu/miniature_saloon.wav');
let world;
startScreenAudio.loop = true;
playSound(startScreenAudio, .5, 1);
let soundOn = true;
/**
 * @description Initiates the game by initializing the level, game, and loading game data, and stops the start screen audio.
 */
function startGame() {
     setupMobileControls()
     initLevel();
     init();
     loadGame();
     stopSound(startScreenAudio);
     hide('overlayGameOver');
     hide('overlayWin');
     setTimeout(() => {
          show('touchPanel');
     }, 200);
}
/**
 * Displays the game over screen when the player loses.
 * @function looseGameScreener
 * 
 * @description Shows the 'overlayGameOver' element, clears all intervals, stops all sounds,
 * and plays the 'loose' sound.
 */
function looseGameScreener() {
     show('overlayGameOver');
     clearAllIntervals();
     stopAllSound();
     playSound(loose);
}
/**
 * Displays the winning screen when the player wins.
 * @function winGameScreener
 * 
 * @description Shows the 'overlayWin' element, clears all intervals, stops all sounds,
 * and plays the 'winning' sound.
 */
function winGameScreener() {
     show('overlayWin');
     clearAllIntervals();
     stopAllSound();
     playSound(winning);
}
/**
 * Exits the current game state and returns to the start screen.
 * @function exit
 * 
 * @description Hides the game-related overlays ('overlay', 'overlayGameOver', 'overlayWin'),
 * shows the start screen ('start'), stops the 'winning' and 'loose' sounds, and plays the
 * start screen audio from the beginning.
 */
function exit() {
     hide('overlay');
     hide('overlayGameOver');
     hide('overlayWin');
     show('start');
     hide('touchPanel');
     stopSound(winning);
     stopSound(loose);
     playAudioFromBeginning(startScreenAudio);
}
/**
 * Applies a specific color style to the text color of an HTML element with the given ID.
 * @function styleColor
 * 
 * @param {string} id - The ID of the HTML element to apply the style to.
 * 
 * @description Retrieves the element by ID, and if found, sets its text color to '#0d9fc9'.
 */
function styleColor(id) {
     let element = document.getElementById(id);
     if (element) {
          element.style.color = '#0d9fc9';
     }
}
/**
 * Removes any explicitly set text color style from an HTML element with the given ID.
 * @function styleNone
 * 
 * @param {string} id - The ID of the HTML element to remove the text color style from.
 * 
 * @description Retrieves the element by ID, and if found, removes any explicitly set text color style.
 */
function styleNone(id) {
     let element = document.getElementById(id);
     if (element) {
          element.style.color = '';
     }
}
/**
 * Hides an HTML element with the given ID by adding the 'd-none' class.
 * @function hide
 * 
 * @param {string} id - The ID of the HTML element to hide.
 * 
 * @description Retrieves the element by ID, and if found, adds the 'd-none' class to hide it.
 */
function hide(id) {
     let element = document.getElementById(id);
     if (element) {
          element.classList.add('d-none');
     }
}
/**
 * Displays an HTML element with the given ID by removing the 'd-none' class.
 * @function show
 * 
 * @param {string} id - The ID of the HTML element to display.
 * 
 * @description Retrieves the element by ID, and if found, removes the 'd-none' class to display it.
 */
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
     // drawWorld = new DrawWorld(canvas ,keyboard);
     // collision = new Collision();     
}
/**
 * @description Hides the game start element after a delay to transition into the loaded game state.
 */
function loadGame() {
     setTimeout(() => {
          hide('start');
     }, 200);
}
/**
 * Handles the logic for navigating to the next page related to game mechanics.
 * @function nextPageMechanic
 * 
 * @description Updates styles and visibility to show information about game mechanics.
 */
function nextPageMechanic() {
     styleColor('pageMechanic');
     styleNone('pageEnemies');
     styleNone('pageBoss');
     show('aboutGameMechanic');
     hide('aboutGame');
     hide('aboutEnemies');
     hide('aboutBossBattle');
}
/**
 * Handles the logic for navigating to the next page related to enemies.
 * @function nextPageEnemies
 * 
 * @description Updates styles and visibility to show information about enemies.
 */
function nextPageEnemies() {
     styleColor('pageEnemies');
     styleNone('pageMechanic');
     styleNone('pageBoss');
     hide('aboutGameMechanic');
     hide('aboutGame');
     show('aboutEnemies');
     hide('aboutBossBattle');
}
/**
 * Handles the logic for navigating to the next page related to boss battles.
 * @function nextPageBoss
 * 
 * @description Updates styles and visibility to show information about boss battles.
 */
function nextPageBoss() {
     styleColor('pageBoss');
     styleNone('pageEnemies');
     styleNone('pageMechanic');
     hide('aboutGameMechanic');
     hide('aboutGame');
     hide('aboutEnemies');
     show('aboutBossBattle');
}
/**
 * Toggles the sound menu between play and pause for the start screen audio.
 * @function toggleSoundMenu
 * 
 * @description Plays the start screen audio with reduced volume and updates the sound icons accordingly.
 * If the audio is already playing, stops it and updates the sound icons accordingly.
 */
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
/**
 * Mutes all sound elements in the game.
 * @function muteAllSounds
 * 
 * @description Sets the 'muted' property to true for all specified sound elements.
 */
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
/**
 * Unmutes all sound elements in the game.
 * @function unmuteAllSounds
 * 
 * @description Sets the 'muted' property to false for all specified sound elements.
 */
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
/**
 * Stops all sound elements in the game.
 * @function stopAllSound
 * 
 * @description Stops the playback of all specified sound elements.
 */
function stopAllSound() {
     const allSoundPlayStop = [
          walkCharacter, jumpCharacter, hurtCharacter, throwCharacter,
          deadChicken, collectBottle, collectCoin, themeStart, gamePlay,
          smashBottle, rotationBottle, startEndboss, startScreamEndboss, hitEndboss,
          HowToPlaySound, aboutPages, deadMosquito
     ];

     allSoundPlayStop.forEach(function (sound) {
          stopSound(sound);
     });
}
/**
 * Toggles the overall sound state between on and off.
 * @function toggleSound
 * 
 * @description Updates the sound state variable, toggles the visibility of sound icons, 
 * and either mutes or unmutes all game sounds based on the updated state.
 */
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
/**
 * Returns to the main menu from the How to Play screen.
 * @function backToMenu
 * 
 * @description Hides the overlay, plays the 'HowToPlayGame' with adjusted volume and speed,
 * removes styles from navigation pages, hides specific information sections, and shows the main game information.
 */
function backToMenu() {
     hide('overlay');
     playSound(HowToPlaySound, 1, 3);
     styleNone('pageEnemies');
     styleNone('pageMechanic');
     styleNone('pageBossBattle');
     hide('aboutGameMechanic');
     show('aboutGame');
     hide('aboutEnemies');
     hide('aboutBossBattle');
}
/**
 * Displays the How to Play overlay and plays the corresponding sound.
 * @function howToPlay
 * 
 * @description Shows the 'overlay' element and plays the 'HowToPlaySound' with adjusted volume and speed.
 */
function howToPlay() {
     show('overlay');
     playSound(HowToPlaySound, 1, 2);
}
/**
 * Clears all intervals set in the window.
 * @function clearAllIntervals
 * 
 * @description Iterates through interval IDs and clears them, stopping any recurring functions.
 */
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
/**
 * Sets up mobile controls for the game, allowing touch input for movement and actions.
 *
 */
function setupMobileControls() {
     const btnLeft = document.getElementById('btnLeft');
     const btnRight = document.getElementById('btnRight');
     const btnJump = document.getElementById('btnJump');
     const btnThrow = document.getElementById('btnThrow');
     btnLeft.addEventListener('touchstart', () => {
          keyboard.LEFT = true;
     });
     btnLeft.addEventListener('touchend', () => {
          keyboard.LEFT = false;
     });
     btnRight.addEventListener('touchstart', () => {
          keyboard.RIGHT = true;
     });
     btnRight.addEventListener('touchend', () => {
          keyboard.RIGHT = false;
     });
     btnJump.addEventListener('touchstart', () => {
          keyboard.SPACE = true;
     });
     btnJump.addEventListener('touchend', () => {
          keyboard.SPACE = false;
     });
     btnThrow.addEventListener('touchstart', () => {
          keyboard.D = true;
     });
     btnThrow.addEventListener('touchend', () => {
          keyboard.D = false;
     });
}



