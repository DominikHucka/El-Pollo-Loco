class HpbarEndboss extends StatusBar {
    x = 480;
   

    constructor() {
        super();
        this.loadImage(this.drawImages.IMAGES_ENBOSSBAR[5]);
        this.loadImages(this.drawImages.IMAGES_ENBOSSBAR);
        this.animate();
    }

    animate() {
        this.otherDirection = true;
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
        resolveImageHp()
    }

} 