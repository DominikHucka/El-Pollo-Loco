class Goblin extends MovableObject {

    IMAGES_WALKING = [
        'img/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk1.png',
        'img/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk2.png',
        'img/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk3.png',
        'img/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk4.png',
        'img/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk5.png',
        'img/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk6.png',
];

    constructor() {
        super().loadImage('img/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk1.png');
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
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageChache[path];
            this.currentImage++;
        }, 200); 
    }
}