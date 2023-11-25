class CollectBottles extends DrawableObject {
    y = 340
    width = 100;
    height = 100; 


    IMAGES_BOTTLES = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
    ]

    constructor() {
        super()
        this.loadImages(this.IMAGES_BOTTLES);
        this.x = 500 + Math.random() * 2000;
        this.drawObjects();
    }


    drawObjects() {
        let path = this.IMAGES_BOTTLES[0];
        this.img = this.imageChache[path];
    }

}