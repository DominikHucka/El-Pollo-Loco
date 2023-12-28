class ArmyOfMosquitos extends MovableObject {
    height = 150;
    width = 100;
    x = 400;
    y = 250;
    offset = {
        top: 40,
        bottom: 35,
        left: 15,
        right: 15,
    }
    energy = 1;


    constructor() {
        super();
        this.loadImage(this.drawImages.MOSQUITO_FLIGHT[0]);
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
      this.moveLeft();
      this.otherDirection = true;
    }


    playAnimations() {
        if (this.isDead()) {
            this.playAnimation(this.drawImages.MOSQUITO_DEAD);
        } else {
            this.playAnimation(this.drawImages.MOSQUITO_FLIGHT);
        }  

    }
}