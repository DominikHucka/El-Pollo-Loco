class Cloud extends MovableObject {
    width = 500;
    height = 200;
    y = 50;
    

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = 0 + Math.random() * 500;
        this.speed = 1  + Math.random() * 0.5;
        this.animate();
    }
    /**
    * Animates the throwable objects by moving them to the left and resetting their position
    * when they go beyond a certain boundary.
    */
    animate() {
        setInterval(() => {
            this.moveLeft();
            if (this.x + this.width < -500) {
                this.resetPosition();
            }
        }, 30);    
    }
}