class Level {
    enemies;
    backgroundObjects;
    chickenBoss;
    level_end_x = 2000;
    // level1_backgroundEffect = new Audio('audio/levels/dark_cavern_ambient_001.ogg');


    constructor(enemies, backgroundObjects, chickenBoss) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.chickenBoss = chickenBoss;
        // this.playBackgroundEffects();
    }


    // playBackgroundEffects() {
    //     this.level1_backgroundEffect.loop = true;
    //     this.level1_backgroundEffect.play();
    // }
    
}