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

