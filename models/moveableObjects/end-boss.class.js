class EndBoss extends MovableObject {
    speed = .1;
    height = 450;
    width = 350;
    y = 20;
    offset = {
        left: 40,
        top: 100,
        right: 5,
        bottom: 15
    };
    runArea = 1000;
    startingX = 2400;
    // world;


    constructor() {
        super().loadImage(this.drawImages.ENDBOSS_WALKING[0]);
        this.loadImages(this.drawImages.ENDBOSS_WALKING);
        this.loadImages(this.drawImages.ENDBOSS_DEAD);
        this.loadImages(this.drawImages.ENDBOSS_HURT);
        this.loadImages(this.drawImages.ENDBOSS_ALERT);
        this.animate();
        this.x = 3000;
    }
    /**
    * Initiates animation cycles by setting intervals for moving objects and playing animations.
    */
    animate() {
        this.setStopInterval(() => this.moveEndboss(), 1000 / 60);
        this.setStopInterval(() => this.playAnimations(), 100);
    }
    /**
    * Moves the end boss, considering its state and conditions.
    */
    moveEndboss() {
        this.stopMoveWhenDeath();
        this.enragedArea();
    }
    /**
     * Stops the end boss' movement if it is dead.
     */
    stopMoveWhenDeath() {
        if (this.isDead()) {
            // this.world.winGameScreener();
            this.stopMove();
            return;
        }
    }
    /**
     * Handles movement of the end boss based on its enraged state and position.
     */
    enragedArea() {
        if (this.enragedEndboss()) {

            if (this.moveLeftArea()) {
                this.moveLeft();
            } else {
                this.moveRightArea();

                if (this.endOfRunArea()) {
                    this.moveLeftAgain();
                }
            }
        } else {
            this.directionMoveLeftOrRight();
        }
    }
    /**
    * Checks if the end boss is in an enraged state.
    * @returns {boolean} True if enraged, false otherwise.
    */
    enragedEndboss() {
        return this.width === 100;
    }
    /**
     * Checks if the end boss is in the left-moving area.
     * @returns {boolean} True if in the left-moving area, false otherwise.
     */
    moveLeftArea() {
        return this.x > this.runArea && !this.otherDirection;
    }
    /**
     * Initiates movement to the right.
     */
    moveRightArea() {
        this.otherDirection = true;
        this.moveRight();
    }
    /**
     * Checks if the end boss has reached the end of the run area.
     * @returns {boolean} True if at the end of the run area, false otherwise.
     */
    endOfRunArea() {
        return this.x >= this.startingX;
    }
    /**
     * Initiates movement to the left after reaching the end of the run area.
     */
    moveLeftAgain() {
        this.otherDirection = false;
        this.moveLeft();
    }
    /**
     * Moves the end boss either left or right based on its direction.
     */
    directionMoveLeftOrRight() {
        if (this.otherDirection) {
            this.moveRight();
        } else {
            this.moveLeft();
        }
    }
    /**
    * Plays the appropriate animations for the end boss based on its state.
    */
    playAnimations() {
        if (this.isDead()) {
            this.playAnimation(this.drawImages.ENDBOSS_DEAD);
            playSound(deadChicken, 1, 0.5);

        } else if (this.isHurt()) {
            this.playAnimation(this.drawImages.ENDBOSS_HURT);
            playSound(hitEndboss);

        } else {
            this.playAnimation(this.drawImages.ENDBOSS_WALKING);
        }
    }
    /**
     * Transforms the end boss into an enraged state.
     * Adjusts properties such as height, width, speed, y position, and offset.
     */
    enraged() {
        this.height = 150;
        this.width = 100;
        this.speed = 10;
        this.y = 280;
        this.offset = {
            left: 20,
            right: 20,
            top: 20,
            bottom: 20
        };
    }
}
