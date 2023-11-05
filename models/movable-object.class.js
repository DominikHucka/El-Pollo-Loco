class MovableObject {
    x = 50;
    y = 300;
    img;
    height = 150;
    width = 150;
    imageChache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }


    isAboveGround() {
        return this.y < 300;
    }


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    /**
     * 
     * @param {Array} arr - ['img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk1.png','img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk2.png', .....] 
     */
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageChache[path] = img;
        });
    }


    playAnimation() {
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageChache[path];
        this.currentImage++;
    }


    moveRight() {
        console.log('Moving right')
    }


    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}