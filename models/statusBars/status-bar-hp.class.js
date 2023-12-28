class HpBar extends StatusBar {
   

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
        let path = this.drawImages.IMAGES_HPBAR[this.resolveImageHp()];
        this.img = this.imageChache[path];
    }
    /**
     * 
     * @returns update StatusBar from 100% => 0% = Dead !!! 
     */
    resolveImageIndex() {
        this.resolveImageHp()
    }
}