class Chicken extends MovableObject {
    width = 80;
    height = 80;
    y = 350;
    energy = 5;
    //    goblinSoundEffects = new Audio('audio/enemies/goblin-15.wav');
    offset = {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    };
    chicken_dead_sound = new Audio('audio/enemies/chicken_dead.mp3');
    chicken_sound_volume = 0.5;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];


    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
    ];


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 200 + Math.random() * 1000;
        this.speed = 0.15 + Math.random() * 0.25;
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
            this.playAnimation(this.IMAGES_DEAD);
            this.chicken_dead_sound.play();
            this.chicken_dead_sound.playbackRate = 1.5;
        } else {
            this.playAnimation(this.IMAGES_WALKING);
        }
    }
}