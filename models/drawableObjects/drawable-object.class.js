class DrawableObject {
    img;
    imageChache = {};
    currentImage = 0;
    x = 50;
    y = 50;
    height = 150;
    width = 150;
    // limitOfItems = 5; 
    // percantage = 100;
    /**
     * 
     * @param {Parameters} path - new Image() constructor creates and returns a new HTMLImageElement object => this.img = document.getElementById('image') <id="image" src>
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
        if (this instanceof Character || this instanceof EndBoss || this instanceof Chicken || this instanceof CollectBottles || this instanceof CollectCoins) {
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
}