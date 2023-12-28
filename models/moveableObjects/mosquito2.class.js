class MosquitoSecondSwarm extends ArmyOfMosquitos {

    
    constructor() {
        super();
        this.x = 3800 + Math.random() * 1000;
        this.y = 250 - Math.random() * 50;
        this.speed = 2 + Math.random() * 0.25;
    }
}