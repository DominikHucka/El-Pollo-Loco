class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2;
    energy = 100;
    lastHit = 0;
    offset = {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    };
    intervalIds = [];
    i = 1;
    stopped = false;
    healthPoint = 100;
    lastHealth = 100;
    /**
    * Checks if this object is colliding with another movable object.
    * @param {MovableObject} mo - The movable object to check collision with.
    * @returns {boolean} True if there is a collision; otherwise, false.
    */
    isColliding(mo) {
        return (
            this.isCollidingLeft(mo) &&
            this.isCollidingTop(mo) &&
            this.isCollidingRight(mo) &&
            this.isCollidingBottom(mo)
        );
    }
    /**
     * Checks if the left side of this object is colliding with the given movable object.
     * @param {MovableObject} mo - The movable object to check collision with.
     * @returns {boolean} True if there is a collision on the left side; otherwise, false.
     */
    isCollidingLeft(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left;
    }
    /**
     * Checks if the top side of this object is colliding with the given movable object.
     * @param {MovableObject} mo - The movable object to check collision with.
     * @returns {boolean} True if there is a collision on the top side; otherwise, false.
     */
    isCollidingTop(mo) {
        return this.y + this.height - this.offset.bottom > mo.y + mo.offset.top;
    }
    /**
     * Checks if the right side of this object is colliding with the given movable object.
     * @param {MovableObject} mo - The movable object to check collision with.
     * @returns {boolean} True if there is a collision on the right side; otherwise, false.
     */
    isCollidingRight(mo) {
        return this.x + this.offset.left < mo.x + mo.width - mo.offset.right;
    }
    /**
     * Checks if the bottom side of this object is colliding with the given movable object.
     * @param {MovableObject} mo - The movable object to check collision with.
     * @returns {boolean} True if there is a collision on the bottom side; otherwise, false.
     */
    isCollidingBottom(mo) {
        return this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }
    /**
    * Applies gravity to the movable object by updating its vertical position.
    */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGroundAndMovingDownward()) {
                this.updateVerticalPosition();
            }

            if (this.isObjectCharacter()) {
                this.characterHisPosition();
            }
        }, 1000 / 30);
    }
    /**
     * Checks if the object is above the ground or moving downward.
     * @returns {boolean} True if above the ground or moving downward, false otherwise.
     */
    isAboveGroundAndMovingDownward() {
        return this.isAboveGround() || this.speedY > 0;
    }
    /**
     * Updates the vertical position of the object.
     */
    updateVerticalPosition() {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
    }
    /**
     * Checks if the object is a character.
     * @returns {boolean} True if the object is a character, false otherwise.
     */
    isObjectCharacter() {
        return this.y >= 180 && this instanceof Character;
    }
    /**
     * Adjusts the character's position if it falls below a certain height.
     */
    characterHisPosition() {
        this.y = 180;
    }
    /**
     * Checks if the object is above the ground based on its type.
     * @returns {boolean} True if above the ground, false otherwise.
     */
    isAboveGround() {
        return this instanceof ThrowableObjects ? this.y < 360 : this.y < 180;
    }
    /**
    * Resets the position of the movable object to a random location.
    */
    resetPosition() {
        this.x = 2800 + Math.random() * 100;
        this.y = 50 - Math.random() * 50;
    }
    /**
     * Plays animation frames from the provided images array.
     * @param {string[]} images - Array of image paths for the animation frames.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageChache[path];
        this.currentImage++;
    }
    /**
     * Moves the movable object to the right based on its speed.
     */
    moveRight() {
        this.x += this.speed;
    }
    /**
     * Moves the movable object to the left based on its speed.
     */
    moveLeft() {
        this.x -= this.speed;
    }
    /**
     * Initiates a jump by setting the vertical speed.
     */
    jump() {
        this.speedY = 25;
    }
    /**
     * Checks if the movable object is dead (energy is zero).
     * @returns {boolean} True if the object is dead, false otherwise.
     */
    isDead() {
        return this.energy === 0;
    }
    /**
     * Checks if the movable object is spotted within the specified range.
     * @param {number} range - The range within which the object is considered spotted.
     * @returns {boolean} True if spotted, false otherwise.
     */
    isSpotted(range) {
        return this.x + this.width >= range;
    }
    /**
    * Stops the movement of the object.
    */
    stopMove() {
        this.x -= this.speed = 0;
        this.x += this.speed = 0;
    }
    /**
     * Sets a timer to make the object disappear after the specified duration.
     * @param {number} timer - The duration after which the object will disappear.
     */
    disappearObject(timer) {
        setTimeout(() => {
            this.y = 500;
        }, timer);
    }
    /**
     * Inflicts damage to the object based on the provided hitbox value.
     * @param {number} hitbox - The amount of damage to inflict.
     */
    hit(hitbox) {
        this.energy -= hitbox;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }
    /**
     * Provides immunity to the object by increasing its energy.
     * @param {number} lifePoints - The amount of energy to add.
     * @returns {number} The updated energy value.
     */
    immunity(lifePoints) {
        return this.energy + lifePoints;
    }
    /**
     * Checks if the object is currently in a hurt state (recently hit).
     * @returns {boolean} True if the object is hurt, false otherwise.
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }
    /**
     * Checks if the object is in an idle state (not moving or performing actions).
     * @returns {boolean} True if the object is idle, false otherwise.
     */
    isIdle() {
        return (
            this.world.keyboard.RIGHT === false &&
            this.world.keyboard.LEFT === false &&
            this.world.keyboard.SPACE === false &&
            this.world.keyboard.D === false
        );
    }
    /**
     * Sets an interval to repeatedly execute the provided function at the specified time interval.
     * @param {Function} fn - The function to be executed.
     * @param {number} time - The time interval for executing the function.
     */
    setStopInterval(fn, time) {
        let id = setInterval(fn, time);
        this.intervalIds.push(id);
    }
    /**
     * Stops all intervals associated with the object.
     */
    stopInterval() {
        this.intervalIds.forEach(clearInterval);
    }
}

