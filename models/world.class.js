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
    backgroundObject = new BackgroundObject();
    lastBottleThrowTime = 0;
    bottleThrowCooldown = 1000;


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
        this.checkCollision(this.level.chickens, this.character, this.hpBar);
    }


    checkCollisionMosquito() {
        this.checkCollision(this.level.mosquito, this.character, this.hpBar);
        this.checkCollision(this.level.mosquitoSecondSwarm, this.character, this.hpBar);
        this.checkCollision(this.level.mosquitoLastSwarm, this.character, this.hpBar);
    }


    checkCollision(enemies, character, hpBar) {
        enemies.forEach((enemy) => {
            if (character.isColliding(enemy) && character.isAboveGround()) {
                enemy.hit(100);
                character.jump();

            } else if (character.isColliding(enemy)) {
                character.hit(5);

            } else if (enemy.energy === 0) {
                enemy.stopInterval();
                enemy.disappearObject(700);
            }
            hpBar.setPercentage(character.energy);
        });
    }



    checkCollisionEndboss() {
        if (this.endBoss.width === 100 && this.endBoss.isColliding(this.character)) {
            if (this.character.isAboveGround() && this.character.isColliding(this.endBoss)) {
                this.character.jump();
                this.endBoss.hit(10);
                this.hpbarEndboss.setPercentage(this.endBoss.energy)
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
        if (this.character.isSpotted(2300) && this.endBoss.energy == 100) {
            this.endBoss.speed = 1.5;
            playSound(startEndboss);
            playSound(startScreamEndboss);

        } else if (this.endBoss.energy <= 80) {
            this.endBoss.speed = 2.5;
            // stopSound(startScreamEndboss);
        } 

        if (this.endBoss.energy <= 40) {
            setTimeout(() => {
                this.endBoss.enraged();
            }, 100);
        }
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


    checkThrowObjects() {
        let currentTime = new Date().getTime();

        if (this.keyboard.D && this.collectedBottles.length > 0 && currentTime - this.lastBottleThrowTime >= this.bottleThrowCooldown && this.character.otherDirection === false) { // Berechnung für meine Flaschen Cool down für 1 Sekunde 
            let bottle = new ThrowableObjects(this.character.x + 100, this.character.y + 100);
            bottle.world = this;
            this.throwableObjects.push(bottle);
            this.collectedBottles.splice(-1);
            this.bottleBar.updateBar(this.collectedBottles.length);
            playSound(throwCharacter, 0.5);
            this.lastBottleThrowTime = currentTime;
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
        this.addObjectToMap(this.level.mosquito);
        this.addObjectToMap(this.level.mosquitoSecondSwarm);
        this.addObjectToMap(this.level.mosquitoLastSwarm);
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