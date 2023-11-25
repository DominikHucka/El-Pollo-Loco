class BottleBar extends StatusBar {
    y = 100;

    IMAGES_BOTTLEBAR = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png',
    ];



    constructor() {
        super();
        this.loadImages(this.IMAGES_BOTTLEBAR);
        this.updateBottleBar();
    }


    updateBottleBar() {
        let path = this.IMAGES_BOTTLEBAR[2];
        this.img = this.imageChache[path];
    }
}