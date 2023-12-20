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
                enemy.disappearObject();
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
        this.throwableObjects.forEach((bottle) => {
            if (this.endBoss.isColliding(bottle)) {
                bottle.hit(1);
            } 

            if (this.backgroundObject.isColliding(bottle)) {
                this.hitGround = true;
                bottle.hit(1);
            }
        }); 
    }

    
    collectObjects() {
        setTimeout(() => {
            this.collectItemBottles();
            this.collectItemCoins();
        }, 5);
    }


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


    // collectObjects(items, limitItems, newInstance) {
    //     setTimeout(() => {
    //         items.forEach((o, i) => {
    //             if (this.character.isColliding(o) && this.collectedObjects.length < limitItems) {
    //                 this.collectedObjects.push(newInstance); 
    //                 this.bottleBar.updateStatusBars(this.collectedObjects.length);
    //                 this.level.bottles.splice(i, 1); 
    //                 console.log('check my array of bottles', this.collectedObjects);
    //             }
    //         })
    //     }, 5);
    // }


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