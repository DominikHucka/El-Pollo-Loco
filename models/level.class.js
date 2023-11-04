class Level {
    enemies;
    backgroundObjects;
    firstBoss;
    level_end_x = 1500;
    // level1_backgroundEffect = new Audio('audio/levels/Ambience_Cave_00.mp3');


    constructor(enemies, backgroundObjects, firstBoss) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.firstBoss = firstBoss;
        // this.playBackgroundEffects();
    }


    // playBackgroundEffects() {
    //     this.level1_backgroundEffect.loop = true;
    //     this.level1_backgroundEffect.play();
    // }
    
}