class EndBoss extends MovableObject {

    height = 450;
    width = 350;
    y = 30;
    x = 2700;
    // x = 1000;
    offset = {
        left: 5,
        top: 65,
        right: 5,
        bottom: 15
    };


    IMAGES_WALKING = [
       'img/4_enemie_boss_chicken/2_alert/G5.png',
       'img/4_enemie_boss_chicken/2_alert/G6.png',
       'img/4_enemie_boss_chicken/2_alert/G7.png',
       'img/4_enemie_boss_chicken/2_alert/G8.png',
       'img/4_enemie_boss_chicken/2_alert/G9.png',
       'img/4_enemie_boss_chicken/2_alert/G10.png',
       'img/4_enemie_boss_chicken/2_alert/G11.png',
       'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];
    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ];
    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png',
    ];


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.animate();
    }


    animate() {
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
              } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
              } else {
                this.playAnimation(this.IMAGES_WALKING);
              }
        }, 200);
    }
}