class BottleBar extends StatusBar {
    y = 100;
    // amountBottle = 5;

   
    constructor() {
        super();
        this.loadImages(this.drawImages.IMAGES_BOTTLEBAR);
        // this.updateBottleBar();
        this.updateBar();
    }
    /**
     * 
     * @param {globalVariable} amountBottle - percantage is a Global variable = 100%
     * 
     */
    // updateBar() {
    //     this. updateStatusBars(this.IMAGES_BOTTLEBAR);
    // }
    
    updateBar(amountItems) {
        this.amountItems = amountItems;
        let path = this.drawImages.IMAGES_BOTTLEBAR[this.setAmountItems()];
        this.img = this.imageChache[path];
    }
    /**
   * 
   * @returns update StatusBar from 0% => 100% = amount Bottle 
   */
    setAmountBottle() {
        this.setAmountItems();
    }
}