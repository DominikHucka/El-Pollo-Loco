class Character extends MovableObject {
    speed = 6;
    width = 150;
    height = 250;
    y = 180;
    counterLongidle = 0;
    world;
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
    /**
    * @param {number} intervalTime - Time interval for character movement, long idle animation, and camera adjustment.
    */
    animate() {
        setInterval(() => {
            this.moveCharacter();
            this.characterLongIdle();
            this.characterMoveCamera_X();
        }, 1000 / 60);

        setInterval(() => this.animateCharacter(), 100);
        setInterval(() => this.animateLongIdle(), 100);
    }
    /**
    * @description Moves the character based on keyboard input, allowing right, left, and jump actions.
    */
    moveCharacter() {
        if (this.canMoveRight()) {
            this.moveRight();
        }
        if (this.canMoveLeft()) {
            this.moveLeft();
        }
        if (this.canJump()) {
            this.jump();
        }
    }
    /**
    * @param {boolean} - Checks if the character can move right based on keyboard input and position.
    * @return {boolean} - Returns true if the character can move right.
    */
    canMoveRight() {
        return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x;
    }
    /**
     * @param {boolean} - Moves the character to the right, plays walking sound, and sets the direction.
     */
    moveRight() {
        super.moveRight();
        playSound(walkCharacter);
        this.otherDirection = false;
    }
    /**
     * @param {boolean} - Checks if the character can move left based on keyboard input and position.
     * @return {boolean} - Returns true if the character can move left.
     */
    canMoveLeft() {
        return this.world.keyboard.LEFT && this.x > -500;
    }
    /**
     * @param {boolean} - Moves the character to the left, plays walking sound, and sets the direction.
     */
    moveLeft() {
        super.moveLeft();
        playSound(walkCharacter);
        this.otherDirection = true;
    }
    /**
     * @param {boolean} - Checks if the character can jump based on keyboard input and position.
     * @return {boolean} - Returns true if the character can jump.
     */
    canJump() {
        return this.world.keyboard.SPACE && !this.isAboveGround();
    }
    /**
     * @param {boolean} - Makes the character jump, plays jump sound.
     */
    jump() {
        super.jump();
        playSound(jumpCharacter);
    }
    /**
    * @description Checks for keyboard inputs and resets the long idle counter if any key is pressed.
    */
    characterLongIdle() {
        if (this.pressedKeyboard()) {
            this.counterLongidle = 0;
        }
    }
    /**
     * @description Checks if specific keys are pressed, triggering a reset of the long idle counter.
     * @returns {boolean} True if any movement or action key is pressed, indicating activity.
     */
    pressedKeyboard() {
        return (
            this.world.keyboard.RIGHT ||
            this.world.keyboard.LEFT ||
            this.world.keyboard.SPACE ||
            this.world.keyboard.D ||
            this.isHurt()
        );
    }
    /**
     * @description Moves the in-game camera based on the character's position and the end boss's energy level.
     * Adjusts the camera differently when the end boss's energy is below 40.
     */
    characterMoveCamera_X() {
        if (this.world.endBoss.energy <= 40) {
            setTimeout(() => {
                this.world.camera_x = -this.x + 250;
            }, 50);
        } else {
            this.world.camera_x = -this.x + 100;
        }
    }
    /**
    * @description Animates the character based on its state, such as being dead, hurt, in the air, moving, or idle.
    * Also handles the counter for long idle animations.
    */
    animateCharacter() {
        if (this.isDead()) {
            this.playAnimation(this.drawImages.CHARACTER_DEAD);
            this.world.looseGameScreener();
        } else if (this.isHurt()) {
            this.playHurtAnimation();
        } else if (this.isAboveGround()) {
            this.playAnimation(this.drawImages.CHARACTER_JUMPING);
        } else if (this.isMoving()) {
            this.playAnimation(this.drawImages.CHARACTER_WALKING);
        } else if (this.isIdle()) {
            this.playAnimation(this.drawImages.CHARACTER_IDLE);
        }
        this.animateCounterLongIdle();
    }
    /**
     * @description Plays the hurt animation and associated sound.
     */
    playHurtAnimation() {
        this.playAnimation(this.drawImages.CHARACTER_HURT);
        playSound(hurtCharacter);
    }
    /**
     * @description Checks if the character is currently moving.
     * @returns {boolean} True if the character is moving (LEFT or RIGHT keys pressed).
     */
    isMoving() {
        return this.world.keyboard.RIGHT || this.world.keyboard.LEFT;
    }
    /**
     * @description Animates the character's long idle state if the counter exceeds a threshold.
     */
    animateLongIdle() {
        if (this.counterLongIdle > 40) {
            this.playAnimation(this.drawImages.CHARACTER_LONGIDLE);
        }
    }
    /**
     * @description Updates the long idle counter based on the character's activity.
     */
    animateCounterLongIdle() {
        if (this.isIdle()) {
            this.counterLongIdle++;
        } else {
            this.counterLongIdle = 0;
        }
    }
}


