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
    throwableObjects = [];
    collectedBottles = [];
    collectedCoins = [];
    endBoss = new EndBoss();
    backgroundObject = new BackgroundObject();


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }


    setWorld() {
        this.character.world = this;
    }


    run() {
        setInterval(() => {
            setTimeout(() => {
                this.checkCollisionChickens();
                this.checkThrowObjects();
                this.collectObjects();
                this.checkCollisionEndboss();
                this.checkCollisionBottles();
            }, 10);
        }, 150);
    }


    checkCollisionChickens() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                if (enemy.isColliding(this.character) && this.character.isAboveGround()) {
                    enemy.hit(100);
                    this.character.jump()
                    this.character.energy + 5;
                } else {
                    this.character.hit(5);
                }
                this.hpBar.setPercentage(this.character.energy);
            } else if (enemy.energy == 0) {
                enemy.stopInterval();
                enemy.disappearObject(700);
            }
        })
    }


    checkCollisionEndboss() {
        if (this.character.isColliding(this.endBoss)) {
            this.character.hit(20);
            this.hpBar.setPercentage(this.character.energy);
        }
        this.throwableObjects.forEach((throwObject) => {
            if (!throwObject.hitBoss && throwObject.isColliding(this.endBoss)) {
                this.endBoss.hit(10);
                throwObject.hitBoss = true;
            }
            if (this.endBoss.energy == 0) {

            }
        });
    }


    checkCollisionBottles() {
        this.throwableObjects.forEach((bottle, index) => {
            if (this.endBoss.isColliding(bottle)) {
                bottle.hit(1);
            }
            // if (bottle.y >= 500 && !bottle.destroyed) {
            //     console.log('Destroying bottle:', bottle.y, bottle.destroyed);
            //     bottle.hit(1);
            //     bottle.destroyed = true;
            //     bottle.stopInterval();
            //     this.throwableObjects.splice(index, 1);
           
        });
    }


    // checkCollisionBottles() {
    //     this.throwableObjects.forEach((bottle) => {
    //         if (this.endBoss.isColliding(bottle)) {
    //             bottle.hit(1);
    //         } 
    //         else if (bottle.y >= 300) { 
    //             bottle.hit(1);
    //             // bottle.stopInterval();
    //         }

    //     }); 
    // }


    collectObjects() {
        setTimeout(() => {
            // this.collectItems(this.level.bottles, this.collectedBottles, this.bottleBar, this.collectBottles.limitOfBottles, collectBottle);
            // this.collectItems(this.level.coins, this.collectedCoins, this.coinBar, this.collectCoins.limitOfCoins, collectCoin);
            this.collectItemBottles();
            this.collectItemCoins();
        }, 5);
    }


    // collectItems(itemArray, collectedItems, bar, limit, collectSound) {
    //     itemArray.forEach((item, i) => {
    //         if (this.character.isColliding(item) && collectedItems.length < limit) {
    //             collectedItems.push(new bar());
    //             bar.updateBar(collectedItems.length);
    //             itemArray.splice(i, 1);
    //             playSound(collectSound);
    //         }
    //     });
    // }


    collectItemBottles() {
        this.level.bottles.forEach((objects, i) => {
            if (this.character.isColliding(objects) && this.collectedBottles.length < this.collectBottles.limitOfBottles) {
                this.collectedBottles.push(new CollectBottles());
                this.bottleBar.updateBar(this.collectedBottles.length);
                this.level.bottles.splice(i, 1);
                playSound(collectBottle);
            }
        })
    }


    collectItemCoins() {
        this.level.coins.forEach((o, i) => {
            if (this.character.isColliding(o) && this.collectedCoins.length < this.collectCoins.limitOfCoins) {
                this.collectedCoins.push(new CollectCoins());
                this.coinBar.updateBar(this.collectedCoins.length);
                this.level.coins.splice(i, 1);
                playSound(collectCoin, 0.1);
            }
        })
    }


    checkThrowObjects() {
        if (this.keyboard.D && this.collectedBottles.length > 0) {
            let bottle = new ThrowableObjects(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.collectedBottles.splice(-1);
            this.bottleBar.updateBar(this.collectedBottles.length);
            playSound(throwCharacter, 0.5)
        }
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToMap(this.level.backgroundObjects);
        this.addObjectToMap(this.level.clouds);
        this.addToMap(this.endBoss);
        this.addObjectToMap(this.throwableObjects);
        this.addObjectToMap(this.level.bottles);
        this.addObjectToMap(this.level.coins);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.hpBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.character);
        this.addObjectToMap(this.level.enemies);
        this.ctx.translate(-this.camera_x, 0);
        //draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    addObjectToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }


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


    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    flipImageBack(mo) {
        this.ctx.restore();
        mo.x = mo.x * -1;
    }
}