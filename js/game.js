let canvas;
let ctx;
let character = new Image();


function init() {
     canvas = document.getElementById('canvas');
     ctx = canvas.getContext('2d');

     character.src = '/img/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk1.png';

    setTimeout(function() {
        ctx.drawImage(character, 40, 40, 100, 120);
    }, 2000);
     
}

