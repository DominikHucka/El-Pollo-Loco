class EndBoss extends MovableObject {
    speed = .1;
    height = 450;
    width = 350;
    y = 20;
    // x = 3000;
    // x = 400;
    offset = {
        left: 40,
        top: 100,
        right: 5,
        bottom: 15
    };
   



    constructor() {
        super().loadImage(this.drawImages.ENDBOSS_WALKING[0]);
        this.loadImages(this.drawImages.ENDBOSS_WALKING);
        this.loadImages(this.drawImages.ENDBOSS_DEAD);
        this.loadImages(this.drawImages.ENDBOSS_HURT);
        this.animate();
        this.x = 3000;
    }


    animate() {
        this.setStopInterval(() => {
            this.moveObjects()
        }, 1000 / 60);

        this.setStopInterval(() => {
            this.playAnimations()
            this.enraged()
        }, 120);
    }


    moveObjects() {
       this.moveLeft();
    }


    playAnimations() {
        if (this.isDead()) {
            this.playAnimation(this.drawImages.ENDBOSS_DEAD);

        } else if (this.isHurt()) {
            this.playAnimation(this.drawImages.ENDBOSS_HURT);
        } else {
            this.playAnimation(this.drawImages.ENDBOSS_WALKING);
        }
    }

    enraged() {
        setTimeout(() => {
            this.height = 150;
            this.width = 100;
            this.speed = 12;
            this.y = 280;
            this.offset = {
                left: 10,
                right: 10, 
                top: 30,
                bottom: 20
            }
        }, 3000);

    }
} 