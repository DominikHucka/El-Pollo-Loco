class Collision {
    lastBottleThrowTime = 0;
    bottleThrowCooldown = 1000;


    constructor() {
        this.run();
    }
    /**
    * Runs the game loop, checking collisions, updating objects, and managing game events.
    * @function
    */
    run() {
        setInterval(() => {
            this.checkCollisionChickens();
            this.checkCollisionMosquito();
            this.checkThrowObjects();
            this.collectObjects();
            this.checkCollisionEndboss();
            this.checkCollisionBottles();
            this.startEndbossFight();
        }, 150);
    }
    /**
    * Checks collisions between the character and chickens, updating health bar accordingly.
    * @function
    */
    checkCollisionChickens() {
        this.checkCollision(world.level.chickens, world.character, world.hpBar);
    }
    /**
    * Checks collisions between the character and various mosquito swarms, updating health bar accordingly.
    * @function
    */
    checkCollisionMosquito() {
        this.checkCollision(world.level.mosquito, world.character, world.hpBar);
        this.checkCollision(world.level.mosquitoSecondSwarm, world.character, world.hpBar);
        this.checkCollision(world.level.mosquitoLastSwarm, world.character, world.hpBar);
    }
    /**
     * Checks collisions between a character and a group of enemies, updating the health bar accordingly.
     * @param {Array} enemies - An array of enemy objects.
     * @param {Object} character - The character object.
     * @param {Object} hpBar - The health bar object.
     */
    checkCollision(enemies, character, hpBar) {
        this.checkCollisionWithObjects(enemies, character, hpBar)
    }
    /**
    * Checks collisions between a character and a group of enemies, updating the health bar accordingly.
    * @param {Array} enemies - An array of enemy objects.
    * @param {Object} character - The character object.
    * @param {Object} hpBar - The health bar object.
    */
    checkCollisionWithObjects(enemies, character, hpBar) {
        enemies.forEach((enemy) => {
            if (this.characterJumpOnEnemy(enemy, character)) {
                console.log('is Colliding', this.characterJumpOnEnemy(enemy, character));
                this.characterKillEnemyAndJumpAgain(enemy, character);
            } else if (this.enemyCollidingCharacter(enemy, character)) {
                this.hitCharacter(enemy, character);
            } else if (this.enemyIsDead(enemy)) {
                this.stopIntervalAndHideEnemy(enemy);
            }
            hpBar.setPercentage(character.energy);
        });
    }
    /**
     * Checks if the character jumps on an enemy, and handles the interaction accordingly.
     * @param {Object} enemy - The enemy object.
     * @param {Object} character - The character object.
     * @returns {boolean} - Returns true if the character jumps on the enemy.
     */
    characterJumpOnEnemy(enemy, character) {
        return character.isColliding(enemy)  && character.speedY < 0;
    }
    /**
     * Handles the character killing an enemy and jumping again.
     * @param {Object} enemy - The enemy object.
     * @param {Object} character - The character object.
     */
    characterKillEnemyAndJumpAgain(enemy, character) {
        enemy.hit(100);
        character.jump();
    }
    /**
     * Checks if an enemy is colliding with the character.
     * @param {Object} enemy - The enemy object.
     * @param {Object} character - The character object.
     * @returns {boolean} - Returns true if the enemy is colliding with the character.
     */
    enemyCollidingCharacter(enemy, character) {
        return character.isColliding(enemy);
    }
    /**
     * Handles the character being hit by an enemy.
     * @param {Object} enemy - The enemy object.
     * @param {Object} character - The character object.
     */
    hitCharacter(enemy, character) {
        character.hit(5);
    }
    /**
     * Checks if an enemy is dead.
     * @param {Object} enemy - The enemy object.
     * @returns {boolean} - Returns true if the enemy is dead.
     */
    enemyIsDead(enemy) {
        return enemy.energy === 0;
    }
    /**
     * Stops the interval and hides the enemy object.
     * @param {Object} enemy - The enemy object.
     */
    stopIntervalAndHideEnemy(enemy) {
        enemy.stopInterval();
        enemy.disappearObject(700);
    }
    /**
 * Checks collisions between the end boss, character, and throwable objects.
 */
    checkCollisionEndboss() {
        this.checkCollisionEndbossWithCharacter();
        this.checkCollisionEndbossWithBottle();
    }
    /**
     * Handles collisions between the end boss and the character.
     */
    checkCollisionEndbossWithCharacter() {
        if (this.endbossEnragedAndCollidingCharacter()) {
            if (this.characterJumpOnEndboss()) {
                this.characterHitEndboss();
            } else {
                this.endbossHitCharacterStrong();
            }
        } else if (this.characterColldingEndboss()) {
            this.endbossHitCharacter();
        } else if (this.endbossIsDead()) {
            this.stopGame();
        }
    }
    /**
     * Handles collisions between the end boss and throwable objects (bottles).
     */
    checkCollisionEndbossWithBottle() {
        world.throwableObjects.forEach((throwObject) => {
            if (this.collidingThrowBottleWithEndboss(throwObject)) {
                this.bottleHitEnboss(throwObject);
            }
        });
    }
    /**
     * Checks if the end boss is enraged and colliding with the character.
     * @returns {boolean} - Returns true if the end boss is enraged and colliding with the character.
     */
    endbossEnragedAndCollidingCharacter() {
        return world.endBoss.width === 100 && world.endBoss.isColliding(world.character);
    }
    /**
     * Checks if the character jumps on the end boss.
     * @returns {boolean} - Returns true if the character jumps on the end boss.
     */
    characterJumpOnEndboss() {
        return world.character.isColliding(world.endBoss) && world.character.speedY < 0;
    }
    /**
     * Handles the character hitting the end boss while jumping.
     */
    characterHitEndboss() {
        world.character.jump();
        world.endBoss.hit(10);
        world.hpbarEndboss.setPercentage(world.endBoss.energy);
    }
    /**
     * Handles a strong hit from the end boss to the character.
     */
    endbossHitCharacterStrong() {
        world.character.hit(50);
        world.hpBar.setPercentage(world.character.energy);
    }
    /**
     * Checks for collisions between throwable objects (bottles) and the end boss.
     */
    checkCollisionBottles() {
        world.throwableObjects.forEach((bottle) => {
            if (world.endBoss.isColliding(bottle)) {
                bottle.hit(1);
            }
        });
    }
    /**
     * Checks if the character is colliding with the end boss.
     * @returns {boolean} - Returns true if the character is colliding with the end boss.
     */
    characterColldingEndboss() {
        return world.character.isColliding(world.endBoss);
    }
    /**
     * Handles a hit from the end boss to the character.
     */
    endbossHitCharacter() {
        world.character.hit(20);
        world.hpBar.setPercentage(world.character.energy);
    }
    /**
     * Checks if the end boss is dead.
     * @returns {boolean} - Returns true if the end boss is dead.
     */
    endbossIsDead() {
        return world.endBoss.energy <= 0;
    }
    /**
     * Stops the game when the end boss is defeated.
     */
    stopGame() {
        world.endBoss.stopMove();
        setInterval(() => {
            world.clearAllIntervals();
        }, 1000);
    }
    /**
     * Checks for collisions between throwable objects (bottles) and the end boss.
     * @param {Object} throwObject - The throwable object (bottle).
     * @returns {boolean} - Returns true if the throwable object is colliding with the end boss.
     */
    collidingThrowBottleWithEndboss(throwObject) {
        return !throwObject.hitBoss && throwObject.isColliding(world.endBoss);
    }
    /**
     * Handles a hit from a throwable object (bottle) to the end boss.
     * @param {Object} throwObject - The throwable object (bottle).
     */
    bottleHitEnboss(throwObject) {
        world.endBoss.hit(20);
        throwObject.hitBoss = true;
        world.hpbarEndboss.setPercentage(world.endBoss.energy);
    }
    /**
    * Initiates the end boss fight based on character proximity and end boss life.
    */
    startEndbossFight() {
        if (this.characterIsSpottedEnboss()) {
            this.endbossStartAndPlaySounds();
        } else if (this.endbossLifeIsEqualTo80()) {
            this.endbossSpeedUp();
        }

        if (this.endbossJustBeforeDeath()) {
            setTimeout(() => this.endbossTotalEnraged(), 300);
        }
    }
    /**
     * Checks if the character has spotted the end boss and the end boss is at full health.
     * @returns {boolean} - Returns true if the character has spotted the end boss and the end boss is at full health.
     */
    characterIsSpottedEnboss() {
        return world.character.isSpotted(2300) && world.endBoss.energy === 100;
    }
    /**
     * Initiates the end boss fight, adjusts speed, and plays associated sounds.
     */
    endbossStartAndPlaySounds() {
        world.endBoss.speed = 1.5;
        playSound(startEndboss, 0.5, 1);
        playSound(startScreamEndboss);
        stopSound(gamePlay, 0.5, 1);
    }
    /**
     * Checks if the end boss's life is equal to or less than 80.
     * @returns {boolean} - Returns true if the end boss's life is equal to or less than 80.
     */
    endbossLifeIsEqualTo80() {
        return world.endBoss.energy <= 80;
    }
    /**
     * Speeds up the end boss and stops the associated sound.
     */
    endbossSpeedUp() {
        world.endBoss.speed = 3;
        stopSound(startScreamEndboss);
    }
    /**
     * Checks if the end boss's life is just before death (40% health).
     * @returns {boolean} - Returns true if the end boss's life is just before death.
     */
    endbossJustBeforeDeath() {
        return world.endBoss.energy <= 40;
    }
    /**
     * Initiates the total enraged state of the end boss.
     */
    endbossTotalEnraged() {
        world.endBoss.enraged();
    }
    /**
    * Collects various items in the game, such as bottles and coins.
    */
    collectObjects() {
        this.collectItemBottles();
        this.collectItemCoins();
    }
    /**
    * Collects bottles in the game, updates the collection bar, and plays a sound.
    */
    collectItemBottles() {
        world.level.bottles.forEach((bottle, index) => {
            if (this.characterCollectBottle(bottle)) {
                this.updateBarAndPlaySoundBottle(bottle, index);
            }
        });
    }
    /**
     * Checks if the character can collect the bottle based on collision and the limit of collected bottles.
     * @param {object} bottle - The bottle object to check for collision.
     * @returns {boolean} - Returns true if the character can collect the bottle.
     */
    characterCollectBottle(bottle) {
        return world.character.isColliding(bottle) && world.collectedBottles.length < world.collectBottles.limitOfBottles;
    }
    /**
     * Updates the collection bar, adds the collected bottle to the collection, removes it from the level,
     * and plays the collection sound.
     * @param {object} bottle - The collected bottle.
     * @param {number} index - The index of the collected bottle in the level.
     */
    updateBarAndPlaySoundBottle(bottles, index) {
        world.collectedBottles.push(new CollectBottles());
        world.bottleBar.updateBar(world.collectedBottles.length);
        world.level.bottles.splice(index, 1);
        playSound(collectBottle);
    }
    /**
    * Collects coins in the game, updating the bar and playing a sound when a coin is collected.
    */
    collectItemCoins() {
        world.level.coins.forEach((coin, index) => {
            if (this.characterCollectCoin(coin)) {
                this.updateBarAndPlaySoundCoin(coin, index);
            }
        });
    }
    /**
     * Checks if the character collects a coin.
     * @param {Coin} coin - The coin to check for collision with the character.
     * @returns {boolean} - True if the character collects the coin, false otherwise.
     */
    characterCollectCoin(coin) {
        return (
            world.character.isColliding(coin) &&
            world.collectedCoins.length < world.collectCoins.limitOfCoins
        );
    }
    /**
     * Updates the coin bar and plays a sound when a coin is collected.
     * @param {Coin} coins - The coin to update the bar for.
     * @param {number} index - The index of the collected coin in the level.
     */
    updateBarAndPlaySoundCoin(coins, index) {
        world.collectedCoins.push(new CollectCoins());
        world.coinBar.updateBar(world.collectedCoins.length);
        world.level.coins.splice(index, 1);
        playSound(collectCoin, 0.1);
    }
    /**
    * Checks if the character can throw a bottle, and throws one while updating the bar and playing a sound.
    */
    checkThrowObjects() {
        let currentTime = new Date().getTime();
        if (this.throwObjectAndCooldown(currentTime)) {
            this.throwBottleAndPlaySound(currentTime);
        }
    }
    /**
     * Checks if the character can throw a bottle based on cooldown, key press, and bottle availability.
     * @param {number} currentTime - The current time.
     * @returns {boolean} - True if the character can throw a bottle, false otherwise.
     */
    throwObjectAndCooldown(currentTime) {
        return (
            world.keyboard.D &&
            world.collectedBottles.length > 0 &&
            currentTime - this.lastBottleThrowTime >= this.bottleThrowCooldown &&
            !world.character.otherDirection
        );
    }
    /**
     * Throws a bottle, updates the bar, and plays a sound.
     * @param {number} currentTime - The current time.
     */
    throwBottleAndPlaySound(currentTime) {
        let bottle = new ThrowableObjects(world.character.x + 100, world.character.y + 100 );
        bottle.world = this;
        world.throwableObjects.push(bottle);
        world.collectedBottles.splice(-1);
        world.bottleBar.updateBar(world.collectedBottles.length);
        playSound(throwCharacter, 0.5);
        this.lastBottleThrowTime = currentTime;
    }
}