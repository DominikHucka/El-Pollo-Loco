class DrawableObject {
    img;
    imageChache = {};
    currentImage = 0;
    x = 50;
    y = 50;
    height = 150;
    width = 150;
    percantage = 100;
    /**
     * 
     * @param {Parameters} path - ist the path load the current Images  
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    /**
     * 
     * @param {Function} ctx - draw all Objects => WORLD
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    /**
     * 
     * @param {Function} ctx - draw Stroke around the Objects => its for check the Collision 
     */
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = "4";
            ctx.strokeStyle = "red";
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - this.offset.right - this.offset.left, this.height - this.offset.bottom - this.offset.top);
            ctx.stroke();
        }
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
    /**
     * 
     * @param {globalVariable} percantage - percantage is a Global variable = 100%
     * @param {Parameters} images - placeholder for IMAGE JSON for Statusbar 
     */
    setPercentage(percantage, images) {
        this.percantage = percantage;
        let path = images[this.resolveImageIndex()];
        this.img = this.imageChache[path];
    }
    /**
     * 
     * @returns update StatusBar from 100% => 0% = Dead !!! 
     */
    resolveImageIndex() {
        if (this.percantage == 100) {
            return 5;
        } else if (this.percantage > 80) {
            return 4;
        } else if (this.percantage > 60) {
            return 3;
        } else if (this.percantage > 40) {
            return 2;
        } else if (this.percantage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}