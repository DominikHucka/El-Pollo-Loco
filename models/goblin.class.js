class Goblin extends MovableObject {
   goblinEffects = new Audio('audio/enemies/goblin-15.wav');

    IMAGES_WALKING = [
        'img/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk1.png',
        'img/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk2.png',
        'img/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk3.png',
        'img/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk4.png',
        'img/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk5.png',
        'img/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk6.png',
];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.x = 200 + Math.random() * 500;
        this.y = 325;
        this.speed = 0.15 + Math.random() * 0.25;
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

    animate() {
        this.otherDirection = true;
        this.moveLeft();
        setInterval(() => {
            this.playAnimation();
        }, 200); 
        setTimeout(() => {
            this.goblinEffects.play();
        },2000);
    }
}