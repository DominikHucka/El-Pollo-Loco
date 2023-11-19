class ThrowableObjects extends MovableObject {


    // IMAGES_THROWBOTTLE = [
    //     'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
    //     'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
    //     'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
    //     'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    // ];



    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        // this.loadImages(this.IMAGES_THROWBOTTLE);
        this.x = x;
        this.y = y;
        this.height = 50;
        this.width = 50;
        this.throw();
    }


    throw() {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 5;
        }, 25);
    } 
}   