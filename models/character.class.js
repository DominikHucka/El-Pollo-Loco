class Character extends MovableObject {
    speed = 5;
    IMAGES_WALKING = [
        'img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk1.png',
        'img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk2.png',
        'img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk3.png',
        'img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk4.png',
        'img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk5.png',
        'img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk6.png',
    ];
    world;
    walking_sound = new Audio('audio/walking_character/Footstep_Dirt_01.mp3');

    constructor() {
        super().loadImage('img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk1.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    animate() {

        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.firstLevel.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.walking_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > -500) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
            }
            if (this.world.keyboard.UP) {
                this.y -= this.speed;
            }
            if (this.world.keyboard.DOWN) {
                this.y += this.speed;
            }
            this.world.camera_x = -this.x +100;
        }, 1000 / 60);

        setInterval(() => {
            
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {

                let i = this.currentImage % this.IMAGES_WALKING.length;
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageChache[path];
                this.currentImage++;
            }
        }, 80); 
    }
  

    jump() {

    }
}
