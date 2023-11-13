class StatusBar extends DrawableObject {

    IMAGES_HPBAR = [
        'img/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_corner1.png',
       
        'img/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_corner2.png',
    ];

     // 'img/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_point copy.png',
        // 'img/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_point copy 2.png',
        // 'img/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_point copy 3.png',
        // 'img/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_point copy 4.png',
        // 'img/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_point copy 5.png',
        // 'img/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_point copy 6.png',
        // 'img/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_point copy 7.png',
        // 'img/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_point copy 8.png',
        // 'img/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_point copy 9.png',
        // 'img/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_point copy 10.png',
        // 'img/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_point copy 11.png',
        // 'img/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_point copy 12.png',


    percentage = 100;


    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 100,
        this.y = 100;
        this.animateObejcts();
        // this.setPercentage(100);
    }


    // setPercentage(percentage) {
    //     this.percentage = percentage;
    //     let path = this.IMAGES[this.resolveImageIndex()];
    //     this.img = this.imageChache[path];
    // }


    animateObejcts() {
        this.drawObejcts(this.IMAGES_HPBAR);
    }

    // resolveImageIndex() {
    //     if (this.percentage == 100) {
    //         return ;
    //     }
    // }
}