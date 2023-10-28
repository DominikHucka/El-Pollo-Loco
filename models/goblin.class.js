class Goblin extends MovableObject {

    constructor() {
        super().loadImage('img/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk1.png');
        this.x = 200 + Math.random() * 500;
        this.y = 325; 
    }


    moveLeft() {

    }
}