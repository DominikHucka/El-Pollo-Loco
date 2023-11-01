class Character extends MovableObject {

    IMAGES_WALKING = [
        'img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk1.png',
        'img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk2.png',
        'img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk3.png',
        'img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk4.png',
        'img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk5.png',
        'img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk6.png',
    ];
    world;

    constructor() {
        super().loadImage('img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk1.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    animate() {
        setInterval(() => {
            
            if (this.world.keyboard.RIGHT) {
                let i = this.currentImage % this.IMAGES_WALKING.length;
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageChache[path];
                this.currentImage++;
            }
        }, 100); 
    }
  

    jump() {

    }
}
