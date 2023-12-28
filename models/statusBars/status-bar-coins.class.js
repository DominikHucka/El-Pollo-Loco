class CoinBar extends StatusBar {
    y = 50;


    constructor() {
        super();
        this.loadImages(this.drawImages.IMAGES_COINBAR);
        this.updateBar();
    }
    /**
    * @description Updates the bar based on the given amount of items.
    * @param {number} amountItems - The amount of items.
    */
    updateBar(amountItems) {
        this.amountItems = amountItems;
        let path = this.drawImages.IMAGES_COINBAR[this.setAmountItems()];
        this.img = this.imageChache[path];
    }
    /**
    * @description Sets the amount of coins based on the current amount of items.
    */
    setAmountCoins() {
        this.setAmountItems();
    }
}