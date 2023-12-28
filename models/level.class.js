class Level {
    chickens;
    backgroundObjects;
    bottles;
    level_end_x = 2800;
    clouds;
    coins;


    constructor(chickens, clouds, backgroundObjects, bottles, coins) {
        this.chickens = chickens;
        this.backgroundObjects = backgroundObjects;        
        this.bottles = bottles;
        this.clouds = clouds;
        this.coins = coins;
    }
}