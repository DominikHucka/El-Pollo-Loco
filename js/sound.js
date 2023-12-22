// CHARACTER
const walkCharacter = walking_sound = new Audio('audio/walking_character/step_cloth1.mp3');
const jumpCharacter = jump_sound = new Audio('audio/walking_character/jumppp22.ogg');
const hurtCharacter = hurt_sound = new Audio('audio/walking_character/hurt.mp3');
const throwCharacter = throw_sound = new Audio('audio/levels/throw.mp3');

// CHICKENS
const deadChicken = chicken_dead_sound = new Audio('audio/enemies/chicken_dead.mp3');

// COLLECT ITEMS 
const collectBottle = collect_sound = new Audio('audio/levels/collect.wav');
const collectCoin = coin_sound = new Audio('audio/levels/coin (1).flac');

//THROW ITEMS
const smashBottle = smashBottle_sound = new Audio('audio/levels/smash_bottle.mp3');
const rotationBottle = rotationBottle_sound = new Audio('audio/levels/bottle_rotate.mp3');
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

function stopSound(sound) {
    sound.pause();
    stopSound.currentTime = 0;
}
