class Mosquito extends ArmyOfMosquitos {
    
    
    constructor() {
        super();
        this.x = 2800 + Math.random() * 1000;
        this.y = 250 - Math.random() * 50;
        this.speed = 3 + Math.random() * 0.25;
    }
}
