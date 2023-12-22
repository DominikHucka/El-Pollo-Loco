class HpBar extends StatusBar {
    percantage = 100; 


    constructor(){
        super();
        this.loadImages(this.drawImages.IMAGES_HPBAR);
        this.setPercentage(100);
    }
     /**
     * 
     * @param {globalVariable} percantage - percantage is a Global variable = 100%
     * 
     */
     setPercentage(percantage) {
        this.percantage = percantage;
        let path = this.drawImages.IMAGES_HPBAR[this.resolveImageIndex()];
        this.img = this.imageChache[path];
    }
    /**
     * 
     * @returns update StatusBar from 100% => 0% = Dead !!! 
     */
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