class Chicken extends MovableObject {
    width = 80;
    height = 80;
    y = 350;
    energy = 5;
    offset = {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    };


    constructor() {
        super().loadImage(this.drawImages.CHICKEN_WALKING[0]);
        this.loadImages(this.drawImages.CHICKEN_WALKING);
        this.loadImages(this.drawImages.CHICKEN_DEAD);
        this.x = 200 + Math.random() * 1000;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }
    /**
    * Initiates animation loops for moving objects and playing animations.
    */
    animate() {
        this.setStopInterval(() => this.moveObjects(), 1000 / 60);
        this.setStopInterval(() => this.playAnimations(), 120);
    }
    /**
     * Move objects, e.g., move the chicken to the left.
     */
    moveObjects() {
        this.moveLeft();
    }
    /**
     * Play animations based on the object's state, e.g., play walking or dead animation for a chicken.
     */
    playAnimations() {
        if (this.isDead()) {
            this.playAnimation(this.drawImages.CHICKEN_DEAD);
            playSound(deadChicken, 1, 1.5);
        } else {
            this.playAnimation(this.drawImages.CHICKEN_WALKING);
        }
    }
}