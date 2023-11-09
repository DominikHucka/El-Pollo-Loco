class Goblin extends MovableObject {
//    goblinSoundEffects = new Audio('audio/enemies/goblin-15.wav');
offset = {
    left: 35,
    top: 40,
    right: 35,
    bottom: 40
};

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
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200); 
        // setTimeout(() => {
        //     this.goblinSoundEffects.play();
        // },2000);
    }
}