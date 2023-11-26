class World {
    character = new Character();
    collectBottles = new CollectBottles();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    hpBar = new HpBar();
    coinBar = new CoinBar();
    bottleBar = new BottleBar();
    throwableObjects = [];
    bottles = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.collectObjects();
    }


    setWorld() {
        this.character.world = this;
    }


    run() {
        setInterval(() => {
            this.checkCollision();
            this.checkThrowObjects();
            this.collectObjects();
        }, 500);
    }


    checkCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.hpBar.setPercentage(this.character.energy);
            }
        })
    }


    collectObjects() {
        setTimeout(() => {
            this.level.bottles.forEach((objects) => {
                if (this.character.isColliding(objects) && this.bottles.length < this.collectBottles.limitOfBottles) {
                    this.bottles.push(new CollectBottles());  // Füge eine neue Flasche zum Array hinzu
                    this.bottleBar.updateBottleBar(this.limitOfBottles);  // Aktualisiere die Flaschenleiste
                    console.log('check my array of bottles', this.bottles);
                }
            })
        }, 5);
    }
    
    // collectObjects() {
    //     setTimeout(() => {
    //         let collectBottles = new CollectBottles();
    //         this.level.bottles.forEach((objects) => {
    //             if (this.character.isColliding(objects)) {
    //                 this.bottles.push(collectBottles);
    //                 this.bottleBar.updateBottleBar(this.collectBottles.limitOfBottles);
    //                 console.log('check my array of bottles', collectBottles);
    //             }
    //         })
    //     }, 5);
    // }


    checkThrowObjects() {
        if (this.keyboard.D) {
            let bottle = new ThrowableObjects(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);

        }
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToMap(this.level.backgroundObjects);
        this.addObjectToMap(this.level.clouds);
        this.addObjectToMap(this.level.chickenBoss);
        this.addObjectToMap(this.throwableObjects);
        this.addObjectToMap(this.level.bottles);
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