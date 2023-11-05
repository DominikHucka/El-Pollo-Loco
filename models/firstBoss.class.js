class FirstBoss extends MovableObject {

    height = 350;
    width = 350;
    y = 150;
    x = 1500;

    IMAGES_WALKING = [
        // 'img/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk1.png',
        // 'img/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk2.png',
        // 'img/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk3.png',
        // 'img/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk4.png',
        // 'img/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk5.png',
        // 'img/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk6.png',
        'img/bosses-pixel-art-game-assets-pack/PNG/Boss1/Anger1.png',
        'img/bosses-pixel-art-game-assets-pack/PNG/Boss1/Anger2.png',
        'img/bosses-pixel-art-game-assets-pack/PNG/Boss1/Anger3.png',
        'img/bosses-pixel-art-game-assets-pack/PNG/Boss1/Anger4.png',
        'img/bosses-pixel-art-game-assets-pack/PNG/Boss1/Anger5.png',
    ];


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }


    animate() {
        this.otherDirection = true;
        setInterval(() => {
          this.playAnimation();
        }, 200); 
    }
}