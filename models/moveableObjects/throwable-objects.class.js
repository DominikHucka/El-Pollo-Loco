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
    /**
    * Initiates the animation for the throwable object.
    * @description Sets the vertical speed, applies gravity, and sets up intervals for throwing and collision checking.
    */
    animate() {
        this.speedY = 30;
        this.applyGravity();
        this.setStopInterval(() => {
            this.throw();
            this.collidingBottleOnGround();
        }, 500 / 60);
    }
    /**
    * Throws the throwable object.
    * @description Updates the horizontal position, plays the throw animation, and triggers the sound effect.
    */
    throw() {
        this.x += 2.5;
        this.playAnimation(this.drawImages.IMAGES_THROWBOTTLE);
        playSound(rotationBottle, 0.5, 2);
    }
    /**
    * Checks if the bottle is either broken or hit the ground.
    * @returns {boolean} True if the bottle is broken or hit the ground; otherwise, false.
    */
    isBottleBrokenOrHitGround() {
        return this.isDead() || this.y > 360;
    }
    /**
     * Handles the animation and effects when the bottle is broken or hits the ground.
     */
    animationBottle() {
        this.playAnimation(this.drawImages.IMAGES_SPLASH);
        playSound(smashBottle);
        this.stopInterval();
        this.disappearObject(150);
    }
    /**
     * Checks if the bottle is broken or hit the ground, then triggers the corresponding animation.
     */
    collidingBottleOnGround() {
        if (this.isBottleBrokenOrHitGround()) {
            this.animationBottle();
        }
    }
}

