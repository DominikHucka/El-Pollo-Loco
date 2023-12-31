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
    collision = new Collision();


    constructor(canvas, keyboard, looseGameScreener, winGameScreener) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.looseGameScreener = looseGameScreener;
        this.winGameScreener = winGameScreener;
        this.draw();
        this.setWorld();
    }
    /**
    * Sets the world property of the character and plays the gamePlay sound.
    * @function
    * @param {Object} this.character - The character object.
    * @param {Object} this - The world object.
    */
    setWorld() {
        this.character.world = this;
        playAudioFromBeginning(gamePlay, .5, 1)
    }
    /**
    * Displays the winning screen if the end boss is defeated.
    * @function showWinningScreen
    * @memberof Game
    * @instance
    * 
    * @description Checks if the end boss is dead using the isDead method and shows the winning screen if true.
    */
    // showWinningScreen() {
    //     if (this.endBoss.isDead()) {
    //         setTimeout(() => {
    //             this.winGameScreener();
    //         }, 1000);
    //     }
    // }
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