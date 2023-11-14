class StatusBar extends DrawableObject {
    StatusBarHP;
    StatusBarMANA;

    constructor(StatusBarHP, StatusBarMANA,) {
        super();
        this.StatusBarHP = StatusBarHP,
        this.StatusBarMANA = StatusBarMANA,
        // this.loadImages(this.IMAGES_HPBAR);
        this.x = 100,
        this.y = 100;
        // this.setPercentage(100);
        // this.drawObjects();
    }
    

    // IMAGES_HPBAR = [
    //     'img/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_full.png',
    //     'img/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_corner1.png',
    //     'img/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_corner2.png',
    //     'img/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_bar_border.png',
    //     'img/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_bar_full.png',

    // ];

    // images = [];

   
    // percentage = 100;


    // drawObjects() {
    //    this.IMAGES_HPBAR.forEach(hpBar => {
    //     this.loadImage(hpBar);
    //    });
    // }
    // setPercentage(percentage) {
    //     this.percentage = percentage;
    //     let path = this.IMAGES_HPBAR[this.resolveImageIndex()];
    //     this.img = this.imageChache[path]; 
    // }


    // resolveImageIndex() {
    //     if (this.percentage == 100) {
    //         return 1;
    //     }
    // }
}