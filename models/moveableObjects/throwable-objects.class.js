class ThrowableObjects extends MovableObject {


    constructor(x, y) {
        super().loadImage(this.drawImages.IMAGES_THROWBOTTLE[0]);
        this.loadImages(this.drawImages.IMAGES_THROWBOTTLE);
        this.loadImages(this.drawImages.IMAGES_SPLASH);
        this.x = x;
        this.y = y;
        this.height = 50;
        this.width = 50;
        this.animate();
        this.energy = 1;
        this.hitBoss = false;
    }


    animate() {
        this.speedY = 30;
        this.applyGravity();
        this.setStopInterval(() => {
            this.throw();
            this.collidingBottleOnGround();
        }, 500 / 60);

    }

    throw() {
        this.x += 2.5;
        this.playAnimation(this.drawImages.IMAGES_THROWBOTTLE);
        playSound(rotationBottle, 0.5, 2);
    }


    collidingBottleOnGround() {
        if (this.isDead() || this.y > 360) {
            this.playAnimation(this.drawImages.IMAGES_SPLASH);
            playSound(smashBottle);
            this.stopInterval();
            this.disappearObject(150);
        }
    }
}

