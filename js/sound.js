// CHARACTER
const walkCharacter = walking_sound = new Audio('audio/walking_character/step_cloth1.mp3');
const jumpCharacter = jump_sound = new Audio('audio/walking_character/jumppp22.ogg');
const hurtCharacter = hurt_sound = new Audio('audio/walking_character/hurt.mp3');
const throwCharacter = throw_sound = new Audio('audio/levels/throw.mp3');

// ENEMIES
const deadChicken = chicken_dead_sound = new Audio('audio/enemies/chicken_dead.mp3');
const deadMosquito = mosquito_dead_sound = new Audio('audio/enemies/mosquito_dead.mp3');

// BACKGROUND
const collectBottle = collect_sound = new Audio('audio/levels/collect.wav');
const collectCoin = coin_sound = new Audio('audio/levels/coin (1).flac');
const themeStart = themeStart_sound = new Audio('audio/menu/miniature_saloon.wav');
const gamePlay = gamePlay_sound = new Audio('audio/levels/spagetti western.ogg');

//THROW ITEMS
const smashBottle = smashBottle_sound = new Audio('audio/levels/smash_bottle.mp3');
const rotationBottle = rotationBottle_sound = new Audio('audio/levels/bottle_rotate.mp3');

//ENDBOSS
const startEndboss = startEndboss_sound = new Audio('audio/enemies/boss_battle.WAV');
const startScreamEndboss = startScreamEndboss_sound = new Audio('audio/enemies/endboss_start.mp3');
const hitEndboss = hitEndboss_sound = new Audio('audio/enemies/hit_endboss.mp3');

//MENU
const HowToPlaySound = howToPlay_sound = new Audio('audio/menu/paper.mp3'); 
const aboutPages = abot_sound = new Audio('audio/menu/about.mp3'); 



/**
 * Plays a sound with customizable volume and playback rate.
 *
 * @param {HTMLAudioElement} sound - The audio element to be played.
 * @param {number} [volume=1.0] - The volume level (0.0 to 1.0), defaults to full volume (1.0).
 * @param {number} [playbackRate=1.0] - The playback speed, defaults to normal speed (1.0).
 */
function playSound(sound, volume = 1.0, playbackRate = 1.0) {
    sound.volume = volume;
    sound.playbackRate = playbackRate;
    sound.play();
}
/**
 * @description Stops playing the given sound.
 * @param {HTMLAudioElement} sound - The sound to be stopped.
 */
function stopSound(sound) {
    sound.pause();
    stopSound.currentTime = 0;
}
