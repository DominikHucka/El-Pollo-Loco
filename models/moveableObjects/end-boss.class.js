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
    runArea = 1800;
    startingX = 2400;




    constructor() {
        super().loadImage(this.drawImages.ENDBOSS_WALKING[0]);
        this.loadImages(this.drawImages.ENDBOSS_WALKING);
        this.loadImages(this.drawImages.ENDBOSS_DEAD);
        this.loadImages(this.drawImages.ENDBOSS_HURT);
        this.loadImages(this.drawImages.ENDBOSS_ALERT);
        this.animate();
        this.x = 3000;
    }


    animate() {
        this.setStopInterval(() => {
            this.moveObjects()
        }, 1000 / 60);

        this.setStopInterval(() => {
            this.playAnimations()
        }, 100);
    }


    moveObjects() {
        if (this.energy <= 70) {
            if (this.x > this.runArea && !this.otherDirection) {
                this.moveLeft();
            } else {
                this.otherDirection = true;
                this.x += this.speed;
                console.log('show moveback', this.x);
    
                // Wenn der Endboss den Ursprung erreicht hat, die Richtung umkehren
                if (this.x >= this.startingX) {
                    this.otherDirection = false;
                    this.normalModus();
                    this.moveLeft();
                }
            }
        } else {
            if (this.otherDirection) {
                this.x += this.speed;
                console.log('show moveRight', this.x);
            } else {
                this.moveLeft();
            }
        }

        
    //     if (this.energy <= 70) {
    //         if (this.x > this.runArea && !this.otherDirection) {
    //             this.moveLeft();
    //         } else {
    //             this.otherDirection = true;
    //             this.x += this.speed;
    //             console.log('show moveback', this.x);
    
    //             // Wenn der Endboss den Ursprung erreicht hat, die Richtung umkehren
    //             if (this.x >= this.startingX) {
    //                 if (this.otherDirection = false) {
    //                     this.normalModus();
    //                     this.moveLeft();
    //                 }
    //                 // this.otherDirection = false;
                  
    //             }
    //         }
    //     } else {
    //         if (this.otherDirection) {
    //             this.x += this.speed;
    //             console.log('show moveRight', this.x);
    //         } else {
    //             this.moveLeft();
    //         }
    //     }
    }


    playAnimations() {
        if (this.isDead()) {
            this.playAnimation(this.drawImages.ENDBOSS_DEAD);

        } else if (this.isHurt()) {
            this.playAnimation(this.drawImages.ENDBOSS_HURT);

        }
        // else if (this.alert()) {
        //     this.playAnimation(this.drawImages.ENDBOSS_ALERT);
        // }

        else {
            this.playAnimation(this.drawImages.ENDBOSS_WALKING);
        }
    }


    enraged() {
        this.height = 150;
        this.width = 100;
        this.speed = 8;
        this.y = 280;
        this.offset = {
            left: 10,
            right: 10,
            top: 30,
            bottom: 20
        }
    }


    normalModus() {
        this.speed = 0.1;
        this.height = 450;
        this.width = 350;
        this.y = 20;
        this.offset = {
            left: 40,
            top: 100,
            right: 5,
            bottom: 15
        };
    }
}
