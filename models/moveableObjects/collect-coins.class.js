class CollectCoins extends MovableObject {
    y = 340
    width = 100;
    height = 100;
    limitOfCoins = 5;
    offset = {
        bottom: 35,
        top: 35,
        left: 35,
        right: 35,
    };


    constructor() {
        super();
        this.loadImage(this.drawImages.IMAGES_COINS[0]);
        this.loadImages(this.drawImages.IMAGES_COINS);
        this.y = 200, (this.x = 500 + Math.random() * 1000);
        this.animate();
    }
    /**
    * Animates the coins by cycling through the images at regular intervals.
    */
    animate() {
        setInterval(() => {
            this.playAnimation(this.drawImages.IMAGES_COINS);
        }, 100);
    }
}


