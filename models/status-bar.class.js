class StatusBar extends DrawableObject {


    IMAGES_HPBAR = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png',
    ];


    percantage = 100;


    constructor() {
        super();
        this.loadImages(this.IMAGES_HPBAR);
        this.setPercentage(100);
        this.x = 5;
        this.y = 5;
        this.width = 150;
        this.height = 50;
    }


    setPercentage(percantage) {
        this.percantage = percantage;
        let path = this.IMAGES_HPBAR[this.resolveImageIndex()];
        this.img = this.imageChache[path];
    }


    resolveImageIndex() {
        if (this.percantage == 100) {
            return 5;
        } else if (this.percantage > 80) {
            return 4;
        } else if (this.percantage > 60) {
            return 3;
        } else if (this.percantage > 40) {
            return 2;
        } else if (this.percantage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}