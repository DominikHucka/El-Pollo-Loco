class StatusBar extends DrawableObject {
    x = 5;
    y = 5;
    width = 200;
    height = 60;
    percantage = 100;
    // amountItems = 0;


    constructor() {
        super();
        // this.updateStatusBars();      
    }

    // updateStatusBars(images, amountItems) {
    //     this.amountItems = amountItems;
    //     let path = images[this.setAmountItems()];
    //     this.img = this.imageChache[path];
    // }


    setAmountItems() {
        if (this.amountItems == 5) {
            return 5;
        } else if (this.amountItems >= 4) {
            return 4;
        } else if (this.amountItems >= 3) {
            return 3;
        } else if (this.amountItems >= 2) {
            return 2;
        } else if (this.amountItems >= 1) {
            return 1;
        } else {
            return 0;
        }
    }


    resolveImageHp() {
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