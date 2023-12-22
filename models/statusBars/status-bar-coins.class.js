class CoinBar extends StatusBar {
    y = 50;


    constructor() {
        super();
        this.loadImages(this.drawImages.IMAGES_COINBAR);
        this.updateBar();
    }


    updateBar(amountItems) {
        this.amountItems = amountItems;
        let path = this.drawImages.IMAGES_COINBAR[this.setAmountItems()];
        this.img = this.imageChache[path];
    }


    setAmountCoins() {
        this.setAmountItems();
    }
}