class Level {
    chickens;
    mosquito;
    mosquitoSecondSwarm;
    mosquitoLastSwarm;
    backgroundObjects;
    bottles;
    clouds;
    coins;
    level_end_x = 2800;


    constructor(chickens, mosquito, mosquitoSecondSwarm, mosquitoLastSwarm, clouds, backgroundObjects, bottles, coins) {
        this.chickens = chickens;
        this.mosquito = mosquito;
        this.mosquitoSecondSwarm = mosquitoSecondSwarm;
        this.mosquitoLastSwarm = mosquitoLastSwarm;
        this.backgroundObjects = backgroundObjects;        
        this.bottles = bottles;
        this.clouds = clouds;
        this.coins = coins;
    }
}