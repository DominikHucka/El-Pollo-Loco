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
    mosquito = new Mosquito();
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
        // playSound(gamePlay, 0.5, 1);
    }


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


    checkCollisionChickens() {
        this.level.chickens.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                if (enemy.isColliding(this.character) && this.character.isAboveGround()) {
                    enemy.hit(100);
                    this.character.jump();

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


    checkCollisionMosquito() {
        if (this.character.isSpotted(290)) {
            console.log('start fight');
            this.mosquito.flyingAttack();
        }
    }


    checkCollisionEndboss() {
        if (this.endBoss.width === 100 && this.endBoss.isColliding(this.character)) {
            if (this.character.isAboveGround() && this.character.isColliding(this.endBoss)) {
                this.character.jump();
                // this.character.immunity(50);
                this.endBoss.hit(20);
                this.hpbarEndboss.setPercentage(this.endBoss.energy);
            } else {
                this.character.hit(50);
                this.hpBar.setPercentage(this.character.energy);
            }

        } else if (this.character.isColliding(this.endBoss)) {
            this.character.hit(20);
            this.hpBar.setPercentage(this.character.energy);

        } else if (this.endBoss.energy <= 0) {
            this.endBoss.stopMove()
            setTimeout(() => {
                this.clearAllIntervals();
            }, 1000);
        }

        this.throwableObjects.forEach((throwObject) => {
            if (!throwObject.hitBoss && throwObject.isColliding(this.endBoss)) {
                this.endBoss.hit(20);
                throwObject.hitBoss = true;
                this.hpbarEndboss.setPercentage(this.endBoss.energy);
            }
        });
    }


    checkCollisionBottles() {
        this.throwableObjects.forEach((bottle) => {
            if (this.endBoss.isColliding(bottle)) {
                bottle.hit(1);
            }
        });
    }


    startEndbossFight() {
        if (this.character.isSpotted(2300)) {
            this.endBoss.speed = 1.5;
            playSound(startEndboss);
            playSound(startScreamEndboss);
            console.log('Start Fight', this.character.isSpotted())
        } else if (this.endBoss.energy <= 80) {
            this.endBoss.speed = 2.5;
        }
        if (this.endBoss.energy <= 20) {
            setTimeout(() => {
                this.endBoss.enraged();
            }, 200);
        }
    }


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
        this.drawObjectsToMap();
        this.drawToMap();
        //draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    drawObjectsToMap() {
        this.addObjectToMap(this.level.backgroundObjects);
        this.addObjectToMap(this.level.clouds);
        this.addObjectToMap(this.throwableObjects);
        this.addObjectToMap(this.level.bottles);
        this.addObjectToMap(this.level.coins);
        this.addObjectToMap(this.level.chickens);
    }


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
        this.addToMap(this.mosquito);
        this.ctx.translate(-this.camera_x, 0);
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


    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }
}