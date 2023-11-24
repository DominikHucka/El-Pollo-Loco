class StatusBar extends DrawableObject {


    IMAGES_COINBAR = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png',
    ];


    IMAGES_HPBAR = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png',
    ];



    constructor() {
        super();
        this.loadImages(this.IMAGES_HPBAR);
        this.loadImages(this.IMAGES_COINBAR);
        this.updateStatusBar();
        this.x = 5;
        this.y = 5;
        this.width = 150;
        this.height = 50;
    }


    updateStatusBar() {
        this.setPercentage(100, this.IMAGES_HPBAR);
        this.setPercentage(100, this.IMAGES_COINBAR);
    }
}