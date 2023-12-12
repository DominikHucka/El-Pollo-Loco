class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2;
    energy = 100;
    lastHit = 0;
    lastAction = 0;
    offset = {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    };
    intervalIds = [];
    i = 1;


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
        }, 1000 / 30);
    }


    isAboveGround() {
        if (this instanceof ThrowableObjects) { //ThrowableObjects should allways fall 
            return true;
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
        // this.otherDirection = false;
    }


    moveLeft() {
        this.x -= this.speed;
        // this.otherDirection = true;
    }


    jump() {
        this.speedY = 25;
    }


    isDead() {
        return this.energy == 0;
    }


    hit(hitbox) {
        this.energy -= hitbox;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    action() {
        this.lastAction = new Date().getTime();
    }


    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }


    idle() {
        let timepassed = new Date().getTime() - this.lastAction;
        timepassed = timepassed / 1000;
        return timepassed > 2;
    }


    isIdle() {
        return !this.world.keyboard.RIGHT && !this.world.keyboard.LEFT &&
            !this.world.keyboard.SPACE && !this.world.keyboard.D;
    }


    longIdle() {
        return !this.world.keyboard.RIGHT && !this.world.keyboard.LEFT &&
            !this.world.keyboard.SPACE && !this.world.keyboard.D &&
            this.idle();
    }
    
    // longIdle() {
    //     let isLongIdle = !this.world.keyboard.RIGHT && !this.world.keyboard.LEFT &&
    //         !this.world.keyboard.SPACE && !this.world.keyboard.D &&
    //         this.isIdle() && this.idle();
        
    //     console.log('longIdle', isLongIdle);
        
    //     return isLongIdle;
    // }
    


    disappearObject() {
        setTimeout(() => {
            this.y = 500;
        }, 700);
    }


    /* Alternative (quick and dirty), um alle Intervalle zu beenden. */
    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }


    setStopInterval(fn, time) {
        let id = setInterval(fn, time);
        this.intervalIds.push(id);
    }


    stopGame() {
        this.intervalIds.forEach(clearInterval);
    }


}

