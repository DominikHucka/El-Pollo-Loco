class MosquitoLastSwarm extends ArmyOfMosquitos{

    height = 250;
    width = 150;
    y = 150;

    constructor() {
        super();
        this.x = 3800 + Math.random() * 1000;
        this.y = 250 - Math.random() * 50;
        this.speed = 2 + Math.random() * 0.25;
    }
}