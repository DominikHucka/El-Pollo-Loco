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
    IMAGES_JUMPING = [
        'img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Jump/jump1.png',
        'img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Jump/jump2.png',
        'img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Jump/jump3.png',
        'img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Jump/jump4.png',
        'img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Jump/jump5.png',
        'img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Jump/jump6.png',
        'img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Jump/jump7.png',
    ];
    world;
    walking_sound = new Audio('audio/walking_character/step_cloth1.mp3');

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.applyGravity();
        this.animate();
    }


    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.firstLevel.level_end_x) {
                 this.moveRight();
                 this.walking_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > -500) {
                this.moveLeft();
                this.walking_sound.play();
            }
            if (this.world.keyboard.UP && !this.isAboveGround()) {
                this.jump();
            }
            // if (this.world.keyboard.DOWN) {
            //     this.y += this.speed;
            // }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);


        setInterval(() => {
            if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 80);
    }
}
