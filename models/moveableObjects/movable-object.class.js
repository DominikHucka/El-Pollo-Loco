class MovableObject extends DrawableObject {
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


    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }


    isCollidingTop(mo) {
        return this.y + this.height - this.offset.bottom > mo.y + mo.offset.top;
    }


    isCollidingBottom(mo) {
        return this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }


    // isColliding(mo) {
    //     return this.isCollidingLeft(mo) && this.isCollidingTop(mo) && this.isCollidingRight(mo) && this.isCollidingBottom(mo);
    // }


    // isCollidingLeft(mo) {
    //     return this.x + this.width - this.offset.right > mo.x + mo.offset.left;
    // }

    // isCollidingTop(mo) {
    //    return this.y + this.height - this.offset.bottom > mo.y + mo.offset.top;
    // }

    // isCollidingRight(mo) {
    //     return this.x + this.offset.left < mo.x + mo.width - mo.offset.right;
    // }

    // isCollidingBottom(mo) {
    //     return this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    // }



    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }


    isAboveGround() {
        if (this instanceof ThrowableObjects) { //ThrowableObjects should allways fall 
            return true;
        } else {
            return this.y < 200;
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


    hit() {
        this.energy -= 5;
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


    /* Alternative (quick and dirty), um alle Intervalle zu beenden. */
    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }
}

