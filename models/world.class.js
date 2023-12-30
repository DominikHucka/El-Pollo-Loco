class World {
    character = new Character();
    collectBottles = new CollectBottles();
    collectCoins = new CollectCoins();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    hpBar = new HpBar();
    coinBar = new CoinBar();
    bottleBar = new BottleBar();
    hpbarEndboss = new HpbarEndboss();
    iconFromEndboss = new IconFromEndboss();
    throwableObjects = [];
    collectedBottles = [];
    collectedCoins = [];
    endBoss = new EndBoss();
    lastBottleThrowTime = 0;
    bottleThrowCooldown = 1000;


    constructor(canvas, keyboard, looseGameScreener, winGameScreener) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.looseGameScreener = looseGameScreener;
        this.winGameScreener = winGameScreener;
        this.draw();
        this.setWorld();
        this.run();
    }
    /**
    * Sets the world property of the character and plays the gamePlay sound.
    * @function
    * @param {Object} this.character - The character object.
    * @param {Object} this - The world object.
    */
    setWorld() {
        this.character.world = this;
        playAudioFromBeginning(gamePlay, 0.5, 1)
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
            this.showWinningScreen();
        }, 150);
    }
    /**
    * Checks collisions between the character and chickens, updating health bar accordingly.
    * @function
    */
    checkCollisionChickens() {
        this.checkCollision(this.level.chickens, this.character, this.hpBar);
    }
    /**
    * Checks collisions between the character and various mosquito swarms, updating health bar accordingly.
    * @function
    */
    checkCollisionMosquito() {
        this.checkCollision(this.level.mosquito, this.character, this.hpBar);
        this.checkCollision(this.level.mosquitoSecondSwarm, this.character, this.hpBar);
        this.checkCollision(this.level.mosquitoLastSwarm, this.character, this.hpBar);
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
        return character.isColliding(enemy) && character.isAboveGround();
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
        this.throwableObjects.forEach((throwObject) => {
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
        return this.endBoss.width === 100 && this.endBoss.isColliding(this.character);
    }
    /**
     * Checks if the character jumps on the end boss.
     * @returns {boolean} - Returns true if the character jumps on the end boss.
     */
    characterJumpOnEndboss() {
        return this.character.isAboveGround() && this.character.isColliding(this.endBoss);
    }
    /**
     * Handles the character hitting the end boss while jumping.
     */
    characterHitEndboss() {
        this.character.jump();
        this.endBoss.hit(10);
        this.hpbarEndboss.setPercentage(this.endBoss.energy);
    }
    /**
     * Handles a strong hit from the end boss to the character.
     */
    endbossHitCharacterStrong() {
        this.character.hit(50);
        this.hpBar.setPercentage(this.character.energy);
    }
    /**
     * Checks for collisions between throwable objects (bottles) and the end boss.
     */
    checkCollisionBottles() {
        this.throwableObjects.forEach((bottle) => {
            if (this.endBoss.isColliding(bottle)) {
                bottle.hit(1);
            }
        });
    }
    /**
     * Checks if the character is colliding with the end boss.
     * @returns {boolean} - Returns true if the character is colliding with the end boss.
     */
    characterColldingEndboss() {
        return this.character.isColliding(this.endBoss);
    }
    /**
     * Handles a hit from the end boss to the character.
     */
    endbossHitCharacter() {
        this.character.hit(20);
        this.hpBar.setPercentage(this.character.energy);
    }
    /**
     * Checks if the end boss is dead.
     * @returns {boolean} - Returns true if the end boss is dead.
     */
    endbossIsDead() {
        return this.endBoss.energy <= 0;
    }
    /**
     * Stops the game when the end boss is defeated.
     */
    stopGame() {
        this.endBoss.stopMove();
        setInterval(() => {
            this.clearAllIntervals();
        }, 1000);
    }
    /**
     * Checks for collisions between throwable objects (bottles) and the end boss.
     * @param {Object} throwObject - The throwable object (bottle).
     * @returns {boolean} - Returns true if the throwable object is colliding with the end boss.
     */
    collidingThrowBottleWithEndboss(throwObject) {
        return !throwObject.hitBoss && throwObject.isColliding(this.endBoss);
    }
    /**
     * Handles a hit from a throwable object (bottle) to the end boss.
     * @param {Object} throwObject - The throwable object (bottle).
     */
    bottleHitEnboss(throwObject) {
        this.endBoss.hit(20);
        throwObject.hitBoss = true;
        this.hpbarEndboss.setPercentage(this.endBoss.energy);
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
        return this.character.isSpotted(2300) && this.endBoss.energy === 100;
    }
    /**
     * Initiates the end boss fight, adjusts speed, and plays associated sounds.
     */
    endbossStartAndPlaySounds() {
        this.endBoss.speed = 1.5;
        playSound(startEndboss, 0.5, 1);
        playSound(startScreamEndboss);
        stopSound(gamePlay, 0.5, 1);
    }
    /**
     * Checks if the end boss's life is equal to or less than 80.
     * @returns {boolean} - Returns true if the end boss's life is equal to or less than 80.
     */
    endbossLifeIsEqualTo80() {
        return this.endBoss.energy <= 80;
    }
    /**
     * Speeds up the end boss and stops the associated sound.
     */
    endbossSpeedUp() {
        this.endBoss.speed = 3;
        stopSound(startScreamEndboss);
    }
    /**
     * Checks if the end boss's life is just before death (40% health).
     * @returns {boolean} - Returns true if the end boss's life is just before death.
     */
    endbossJustBeforeDeath() {
        return this.endBoss.energy <= 40;
    }
    /**
     * Initiates the total enraged state of the end boss.
     */
    endbossTotalEnraged() {
        this.endBoss.enraged();
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
        this.level.bottles.forEach((bottle, index) => {
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
        return this.character.isColliding(bottle) && this.collectedBottles.length < this.collectBottles.limitOfBottles;
    }
    /**
     * Updates the collection bar, adds the collected bottle to the collection, removes it from the level,
     * and plays the collection sound.
     * @param {object} bottle - The collected bottle.
     * @param {number} index - The index of the collected bottle in the level.
     */
    updateBarAndPlaySoundBottle(bottle, index) {
        this.collectedBottles.push(new CollectBottles());
        this.bottleBar.updateBar(this.collectedBottles.length);
        this.level.bottles.splice(index, 1);
        playSound(collectBottle);
    }
    /**
    * Collects coins in the game, updating the bar and playing a sound when a coin is collected.
    */
    collectItemCoins() {
        this.level.coins.forEach((coin, index) => {
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
            this.character.isColliding(coin) &&
            this.collectedCoins.length < this.collectCoins.limitOfCoins
        );
    }
    /**
     * Updates the coin bar and plays a sound when a coin is collected.
     * @param {Coin} coins - The coin to update the bar for.
     * @param {number} index - The index of the collected coin in the level.
     */
    updateBarAndPlaySoundCoin(coins, index) {
        this.collectedCoins.push(new CollectCoins());
        this.coinBar.updateBar(this.collectedCoins.length);
        this.level.coins.splice(index, 1);
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
            this.keyboard.D &&
            this.collectedBottles.length > 0 &&
            currentTime - this.lastBottleThrowTime >= this.bottleThrowCooldown &&
            !this.character.otherDirection
        );
    }
    /**
     * Throws a bottle, updates the bar, and plays a sound.
     * @param {number} currentTime - The current time.
     */
    throwBottleAndPlaySound(currentTime) {
        let bottle = new ThrowableObjects(
            this.character.x + 100,
            this.character.y + 100
        );
        bottle.world = this;
        this.throwableObjects.push(bottle);
        this.collectedBottles.splice(-1);
        this.bottleBar.updateBar(this.collectedBottles.length);
        playSound(throwCharacter, 0.5);
        this.lastBottleThrowTime = currentTime;
    }
    /**
    * Displays the winning screen if the end boss is defeated.
    * @function showWinningScreen
    * @memberof Game
    * @instance
    * 
    * @description Checks if the end boss is dead using the isDead method and shows the winning screen if true.
    */
    showWinningScreen() {
        if (this.endBoss.isDead()) {
            setTimeout(() => {
                this.winGameScreener();
            }, 1000);
        }
    }
    /**
     * Draws the game elements, translating the context based on the camera position.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.drawObjectsToMap();
        this.drawToMap();
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }
    /**
     * Draws different game objects to the map.
     */
    drawObjectsToMap() {
        this.addObjectToMap(this.level.backgroundObjects);
        this.addObjectToMap(this.level.clouds);
        this.addObjectToMap(this.throwableObjects);
        this.addObjectToMap(this.level.bottles);
        this.addObjectToMap(this.level.coins);
        this.addObjectToMap(this.level.chickens);
        this.addObjectToMap(this.level.mosquito);
        this.addObjectToMap(this.level.mosquitoSecondSwarm);
        this.addObjectToMap(this.level.mosquitoLastSwarm);
    }
    /**
     * Draws game elements to the map.
     */
    drawToMap() {
        this.addToMap(this.endBoss);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.hpBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.hpbarEndboss);
        this.addToMap(this.iconFromEndboss);
        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
    }
    /**
    * Adds an array of objects to the map by calling the addToMap function for each object.
    * @param {Array<MovableObject>} objects - The array of objects to add to the map.
    */
    addObjectToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }
    /**
     * Adds an object to the map, flipping its image if it's facing the other direction.
     * @param {MovableObject} mo - The object to add to the map.
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }
    /**
     * Flips the image horizontally.
     * @param {MovableObject} mo - The object whose image needs to be flipped.
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }
    /**
     * Restores the original image orientation after flipping.
     * @param {MovableObject} mo - The object whose image needs to be restored.
     */
    flipImageBack(mo) {
        this.ctx.restore();
        mo.x = mo.x * -1;
    }
    /**
     * Clears all intervals in the window.
     */
    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }
}