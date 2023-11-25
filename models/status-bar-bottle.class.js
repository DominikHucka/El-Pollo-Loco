class BottleBar extends StatusBar {
    y = 100;
    amountBottle = 6;

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
        this.updateBottleBar(6);
    }
    /**
     * 
     * @param {globalVariable} percantage - percantage is a Global variable = 100%
     * 
     */
    updateBottleBar(amountBottle) {
        this.amountBottle = amountBottle;
        let path = this.IMAGES_BOTTLEBAR[this.setAmountBottle()];
        this.img = this.imageChache[path];
    }
    /**
    * 
    * @returns update StatusBar from 0% => 100% = amount Bottle = max 6 pieces
    */
    setAmountBottle() {
        if (this.amountBottle == 100) {
            return 5;
        } else if (this.amountBottle > 80) {
            return 4;
        } else if (this.amountBottle > 60) {
            return 3;
        } else if (this.amountBottle > 40) {
            return 2;
        } else if (this.amountBottle > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}