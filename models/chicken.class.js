class Chicken extends MovableObject {
    width = 80;
    height = 80;
    y = 360;
//    goblinSoundEffects = new Audio('audio/enemies/goblin-15.wav');
// offset = {
//     left: 35,
//     top: 40,
//     right: 35,
//     bottom: 40
// };
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
];


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.25;
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200); 
        // setTimeout(() => {
        //     this.goblinSoundEffects.play();
        // },2000);
    }
}