class Mosquito extends MovableObject {
    height = 150;
    width = 100;
    x = 400;
    y = 100;
    offset = {
        top: 40,
        bottom: 35,
        left: 15,
        right: 15,
    }
    energy = 1;


    constructor() {
        super();
        this.loadImage(this.drawImages.MOSQUITO_IDLE[0]);
        this.loadImages(this.drawImages.MOSQUITO_IDLE);
        this.loadImages(this.drawImages.MOSQUITO_ATTACK);
        this.loadImages(this.drawImages.MOSQUITO_DEAD);
        this.loadImages(this.drawImages.MOSQUITO_FLIGHT);
        this.animate();
    }


    animate() {
        this.setStopInterval(() => {
            this.moveObject();
        }, 1000 / 60);

        this.setStopInterval(() => {
            this.playAnimations();
        }, 100);
    }


    moveObject() {
        if (this.flyingAttack()) {
            this.playAnimation(this.drawImages.MOSQUITO_ATTACK);
        } else {
            this.moveLeft();
        }
        this.otherDirection = true;
    }


    playAnimations() {
        if (this.isDead()) {
            this.playAnimation(this.drawImages.MOSQUITO_DEAD);
        } else {
            this.playAnimation(this.drawImages.MOSQUITO_FLIGHT);
        }  

    }

    flyingAttack() {
        this.y > 360; 
        // this.y += 5;
        this.x -= 2;
    }


}
