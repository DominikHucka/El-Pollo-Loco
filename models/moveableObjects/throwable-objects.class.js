class ThrowableObjects extends MovableObject {
    

    IMAGES_THROWBOTTLE = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];


    IMAGES_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];


    constructor(x, y) {
        super().loadImage(this.IMAGES_THROWBOTTLE[0]);
        this.loadImages(this.IMAGES_THROWBOTTLE);
        this.loadImages(this.IMAGES_SPLASH);
        this.x = x;
        this.y = y;
        this.height = 50;
        this.width = 50;
        this.animate();
        this.energy = 1;
        this.hitBoss = false;
        // this.speedY = 2;
        this.hitGround = false;
    }


    animate() {
        this.speedY = 30;
        this.applyGravity();
        this.setStopInterval(() => {
            this.throw();
            this.x += 2.5;
        }, 500 / 60);
       
    }


    throw() {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_SPLASH);
            // playSound(smashBottle);
            // stopSound(smashBottle);
        } else {
            this.playAnimation(this.IMAGES_THROWBOTTLE);
            // playSound(rotationBottle, 0.5, 1.6);
        }
    }
}   