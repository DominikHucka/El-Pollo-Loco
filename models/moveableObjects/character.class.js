class Character extends MovableObject {
    speed = 6;
    width = 150;
    height = 250;
    y = 180;

   
    world;
    // walking_sound = new Audio('audio/walking_character/step_cloth1.mp3');
    // jump_sound = new Audio('audio/walking_character/jumppp22.ogg');
    offset = {
        bottom: 10,
        top: 90,
        left: 10,
        right: 20,
    };


    constructor() {
        super().loadImage(this.drawImages.CHARACTER_WALKING[0]);
        this.loadImages(this.drawImages.CHARACTER_WALKING);
        this.loadImages(this.drawImages.CHARACTER_JUMPING);
        this.loadImages(this.drawImages.CHARACTER_DEAD);
        this.loadImages(this.drawImages.CHARACTER_HURT);
        this.loadImages(this.drawImages.CHARACTER_IDLE);
        this.loadImages(this.drawImages.CHARACTER_LONGIDLE);
        this.applyGravity();
        this.animate();
    }


    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                playSound(walkCharacter);
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT && this.x > -500) {
                this.moveLeft();
                playSound(walkCharacter);
                this.otherDirection = true;
            }
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
                playSound(jumpCharacter);
            }
           

            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);


        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.drawImages.CHARACTER_DEAD);

            } else if (this.isHurt()) {
                this.playAnimation(this.drawImages.CHARACTER_HURT);
                playSound(hurtCharacter);

            } else if (this.isAboveGround()) {
                this.playAnimation(this.drawImages.CHARACTER_JUMPING);

            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.drawImages.CHARACTER_WALKING);

            } else if (this.isIdle()) {
                this.playAnimation(this.drawImages.CHARACTER_IDLE);

            } else if (this.longIdle()) {
                console.log('Entering longIdle state');
                this.playAnimation(this.drawImages.CHARACTER_LONGIDLE);
                console.log('idle', this.longIdle());
                
            }
        }, 100);
    }
}
