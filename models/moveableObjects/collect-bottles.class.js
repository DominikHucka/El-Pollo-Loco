class CollectBottles extends MovableObject {
    y = 340
    width = 100;
    height = 100;
    limitOfBottles = 5; 
    offset = {
        bottom: 10,
        top: 10,
        left: 40,
        right: 20,
    };


    constructor() {
        super()
        this.loadImage(this.drawImages.IMAGES_BOTTLES[0]);
        this.loadImages(this.drawImages.IMAGES_BOTTLES);
        this.x = 500 + Math.random() * 2000;
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.drawImages.IMAGES_BOTTLES);
        }, 200);
    }

}