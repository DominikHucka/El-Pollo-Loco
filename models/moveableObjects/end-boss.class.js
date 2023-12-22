class EndBoss extends MovableObject {
    speed = .5;
    height = 450;
    width = 350;
    y = 20;
    x = 3000;
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
    }


    animate() {
        this.setStopInterval(() => {
            this.moveObjects()
        }, 1000 / 60);

        this.setStopInterval(() => {
            this.playAnimations()
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


        // setInterval(() => {
        //     if (this.isSpotted()) {
        //         this.playAnimation(this.drawImages.ENDBOSS_WALKING);
        //     }
        // }, 1000 / 60); 
    }
} 