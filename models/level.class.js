class Level {
    chickens;
    mosquito;
    mosquitoSecondSwarm;
    mosquitoLastSwarm;
    backgroundObjects;
    bottles;
    level_end_x = 2800;
    clouds;
    coins;


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