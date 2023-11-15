class Cloud extends MovableObject {
    width = 500;
    height = 200;
    y = 50;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = 0 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.25;
       
    }
}