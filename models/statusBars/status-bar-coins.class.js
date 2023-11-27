class CoinBar extends StatusBar {
    y = 50;

    IMAGES_COINBAR = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png',
    ];


    constructor() {
        super();
        this.loadImages(this.IMAGES_COINBAR);
        this.updateBar();
    }


    updateBar(amountItems) {
        this.amountItems = amountItems;
        let path = this.IMAGES_COINBAR[this.setAmountItems()];
        this.img = this.imageChache[path];
    }


    setAmountCoins() {
        this.setAmountItems();
    }
}