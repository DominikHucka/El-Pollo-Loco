class Level {
    enemies;
    backgroundObjects;
    chickenBoss;
    bottles;
    level_end_x = 2800;
    clouds;
    coins;
    // level1_backgroundEffect = new Audio('audio/levels/dark_cavern_ambient_001.ogg');


    constructor(enemies, clouds, backgroundObjects, bottles, coins, chickenBoss) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;        
        this.bottles = bottles;
        this.clouds = clouds;
        this.coins = coins;
        this.chickenBoss = chickenBoss;
        // this.playBackgroundEffects();
    }


    // playBackgroundEffects() {
    //     this.level1_backgroundEffect.loop = true;
    //     this.level1_backgroundEffect.play();
    // }
    
}