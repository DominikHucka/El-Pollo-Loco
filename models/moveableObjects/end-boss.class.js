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
    runArea = 1000;




    constructor() {
        super().loadImage(this.drawImages.ENDBOSS_WALKING[0]);
        this.loadImages(this.drawImages.ENDBOSS_WALKING);
        this.loadImages(this.drawImages.ENDBOSS_DEAD);
        this.loadImages(this.drawImages.ENDBOSS_HURT);
        this.loadImages(this.drawImages.ENDBOSS_ALERT);
        this.animate();
        this.x = 3000;
        this.runArea = 1000;
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




        // Vorhandener Code...

        // if (this.alert()) {
        //     if (this.x > this.runArea) {
        //         this.moveLeft();
        //     } else {
        //         this.otherDirection = true;
        //         this.x += this.speed;
        //         console.log('Zeige Rückwärtsbewegung', this.x);

        //         // Überprüfen, ob die Gesundheit unter 70 liegt und den "enraged"-Zustand anwenden
        //         if (this.energy <= 70) {
        //             this.enraged();
        //         }
        //     }
        // } else if (this.otherDirection) {
        //     this.moveRight();
        //     console.log('Zeige Bewegung nach rechts', this.x);
        // } else {
        //     this.moveLeft();
        // }

        // Vorhandener Code...


        // if (this.alert()) {
        //     if (this.x > this.world.level.endBoss_area) {
        //         this.moveLeft();
        //     } else {
        //         this.otherDirection = true;w
        //         this.x += this.speed;
        //         console.log('show moveback', this.x);
        //     }
        // } else if (this.otherDirection) {
        //     this.moveRight();
        //     console.log('show moveRight', this.x);
        // } else {
        //     this.moveLeft();  // Normal nach links bewegen
        // }

        // if (this.alert()) {
        //     if (this.x > this.runArea) {
        //         this.moveLeft();
        //     } else {
        //         this.otherDirection = true;
        //         this.x += this.speed;
        //         console.log('show moveback', this.x);
        //     }
        // } else {
        //     if (this.otherDirection) {
        //         this.x += this.speed; // Nur nach rechts bewegen, wenn otherDirection gesetzt ist
        //         console.log('show moveRight', this.x);
        //     } else {
        //         this.moveLeft(); // Normal nach links bewegen
        //     }
        // }
        // if (this.alert()) {
        //     if (this.x > this.runArea) {
        //         this.moveLeft();
        //      } else {
        //         this.otherDirection = true;
        //         this.x += this.speed;
        //         console.log('show moveback', this.x += this.speed);
        //     }
        // } else {
        //     this.moveLeft();
        // }

        // if (this.stopMove) {

        // }

        // this.moveLeft();
        // if (this.alert()) {
        //     this.stopMove();
        // } else {
        //     this.moveLeft();
        // }
    }


    playAnimations() {
        if (this.isDead()) {
            this.playAnimation(this.drawImages.ENDBOSS_DEAD);

        } else if (this.isHurt()) {
            this.playAnimation(this.drawImages.ENDBOSS_HURT);

        } else if (this.alert()) {
            this.playAnimation(this.drawImages.ENDBOSS_ALERT);
        }

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
} 