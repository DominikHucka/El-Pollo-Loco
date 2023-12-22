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

    // setAmountBottle() {
    //     if (this.amountBottle == 5) {
    //         return 5;
    //     } else if (this.amountBottle > 4) {
    //         return 4;
    //     } else if (this.amountBottle > 3) {
    //         return 3;
    //     } else if (this.amountBottle > 2) {
    //         return 2;
    //     } else if (this.amountBottle > 1) {
    //         return 1;
    //     } else {
    //         return 0;
    //     }
    // }
}