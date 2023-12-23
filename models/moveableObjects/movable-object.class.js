class MovableObject extends DrawableObject {
    cooldown = false;
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


    isColliding(mo) {
        return this.isCollidingLeft(mo) && this.isCollidingTop(mo) && this.isCollidingRight(mo) && this.isCollidingBottom(mo);
    }


    isCollidingLeft(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left;
    }


    isCollidingTop(mo) {
        return this.y + this.height - this.offset.bottom > mo.y + mo.offset.top;
    }


    isCollidingRight(mo) {
        return this.x + this.offset.left < mo.x + mo.width - mo.offset.right;
    }


    isCollidingBottom(mo) {
        return this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
            if (this.y >= 180 && this instanceof Character) {
                this.y = 180;
            }
        }, 1000 / 30);
    }


    isAboveGround() {
        if (this instanceof ThrowableObjects) { //ThrowableObjects should allways fall 
            return this.y < 360;
        } else {
            return this.y < 180;
        }
    }


    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageChache[path];
        this.currentImage++;
    }


    moveRight() {
        this.x += this.speed;
    }


    moveLeft() {
        this.x -= this.speed;
    }


    jump() {
        this.speedY = 25;
    }


    isDead() {
        return this.energy == 0;
    }


    isSpotted(range) {
        return this.x >= range;
    }

    stopMove() {
       if ( this.stopped = true) {
            this.x -= this.speed = 0;
            this.x += this.speed = 0;
       }
        // this.setStopInterval(() => {
        //     this.stopped = false; 
        // }, 100);
    }


    alert() {
        return this.energy == 70;
    }


    transformation() {
        return this.energy <= 60;
    }


    disappearObject(timer) {
        setTimeout(() => {
            this.y = 500;
        }, timer);
    }


    hit(hitbox) {
        this.energy -= hitbox;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }


    isIdle() {
        return (
            this.world.keyboard.RIGHT === false &&
            this.world.keyboard.LEFT === false &&
            this.world.keyboard.SPACE === false &&
            this.world.keyboard.D === false
        );
    }


    setStopInterval(fn, time) {
        let id = setInterval(fn, time);
        this.intervalIds.push(id);
    }


    stopInterval() {
        this.intervalIds.forEach(clearInterval);
    }

}

