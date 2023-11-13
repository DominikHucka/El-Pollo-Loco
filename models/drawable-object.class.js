class DrawableObject {
    img;
    imageChache = {};
    currentImage = 0;
    x = 50;
    y = 300;
    height = 150;
    width = 150;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Goblin) {
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


    drawObejcts(images) {
        let i = this.currentImage = images.length;
        let path = images[i];
        this.img = this.imageChache[path];
        this.currentImage++;
    }

}