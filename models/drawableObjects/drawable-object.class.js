class DrawableObject {
    img;
    imageChache = {};
    currentImage = 0;
    x = 50;
    y = 50;
    height = 150;
    width = 150;
    drawImages = new DrawImages();
    drawFrameEnabled = false;


    // constructor() {
    //     super();
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
    * @description Loads an image from the specified path and sets it as the object's image.
    * @param {string} path - The path to the image file.
    */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    /**
    * @description Draws the object on the canvas using the provided context.
    * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
    */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    /**
    * @description Draws the frame (bounding box) around the object on the canvas.
    * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
    */
    drawFrame(ctx) {
        if (this.drawFrameEnabled && (this instanceof Character || this instanceof MosquitoLastSwarm)) {
            ctx.beginPath();
            ctx.lineWidth = "4";
            ctx.strokeStyle = "red";
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - this.offset.right - this.offset.left, this.height - this.offset.bottom - this.offset.top);
            ctx.stroke();
        }
    }
    /**
    * @description Loads images from an array and stores them in the image cache.
    * @param {string[]} arr - Array of image paths to be loaded.
    */
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageChache[path] = img;
        });
    }
}

