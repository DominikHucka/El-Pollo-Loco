class EndBoss extends MovableObject {

    height = 450;
    width = 350;
    y = 20;
    x = 3000;
    // x = 400;
    offset = {
        left: 40 ,
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
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.drawImages.ENDBOSS_DEAD);

              } else if (this.isHurt()) {
                this.playAnimation(this.drawImages.ENDBOSS_HURT);

              } else if (this.startFight() && this.moveLeft()){
                this.playAnimation(this.drawImages.ENDBOSS_WALKING);
              }
        }, 200);
    }
}