class DrawImages {
    /**
     * Array of image paths representing the walking animation frames for the character.
     * 
     * @type {string[]}
     * @param {string} CHARACTER_WALKING - Paths to walking animation frames.
     */
    CHARACTER_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];
    /**
     * Array of image paths representing jump animation frames for the character.
     * 
     * @type {string[]}
     * @param {string} CHARACTER_JUMPING - Paths to Jump animation frames.
     */
    CHARACTER_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',
    ];
    /**
     * Array of image paths representing dead animation frames for the character.
     * 
     * @type {string[]}
     * @param {string} CHARACTER_DEAD - Paths to dead animation frames.
     */
    CHARACTER_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png',
    ];
    /**
     * Array of image paths representing hurt animation frames for the character.
     * @type {string[]}
     * @param {string} CHARACTER_HURT - Paths to hurt animation frames.
     */
    CHARACTER_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png',
    ];
    /**
     * Array of image paths representing idle animation frames for the character.
     * @type {string[]}
     * @param {string} CHARACTER_IDLE - Paths to IDLE animation frames.
     */
    CHARACTER_IDLE = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png',
    ];
    /**
     * Array of image paths representing Long Idle < 4 Seconds animation frames for the character. +
     * 
     * @type {string[]}
     * @param {string} CHARACTER_LONGIDLE - Paths to long idel animation frames, longer than 3 seconds.
     */
    CHARACTER_LONGIDLE = [
        'img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png',
    ];
    /**
     * Array of image paths representing the walking animation frames for the enemies = > normal Chicken.
     * 
     * @type {string[]}
     * @param {string} CHIKCEN_WALKING - Paths to wlaking animation frames
     */
    CHICKEN_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];
    /**
     * Array of image paths representing dead animation frames for the enemies = > normal Chicken.
     * 
     * @type {string[]}
     * @param {string} CHIKCEN_DEAD - Paths to dead animation frames
     */
    CHICKEN_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
    ];
    /**
     * Array of image paths representing dead animation frames for the ENDBOSS
     * 
     * @type {string[]}
     * @param {string} ENDBOSS_WALKING - Paths to dead animation frames
     */
    ENDBOSS_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];
    /**
    * Array of image paths representing dead animation frames for the ENDBOSS
    * 
    * @type {string[]}
    * @param {string} ENDBOSS_DEAD - Paths to dead animation frames
    */
    ENDBOSS_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ];
    /**
    * Array of image paths representing dead animation frames for the ENDBOSS
    * 
    * @type {string[]}
    * @param {string} ENDBOSS_HURT - Paths to hurt animation frames
    */
    ENDBOSS_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png',
    ];
    /**
   * Array of image paths representing alert animation frames for the ENDBOSS
   * 
   * @type {string[]}
   * @param {string} ENDBOSS_ALERT - Paths to alert animation frames
   */
    ENDBOSS_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];
    /**
   * Array of image paths representing coinbar frames for the Charcater 
   * 
   * @type {string[]}
   * @param {string} IMAGES_COINBAR - Paths to coinbar animation frames
   */
    IMAGES_COINBAR = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png',
    ];
    /**
     * Array of image paths representing bottle frames for the Charcater 
     * 
     * @type {string[]}
     * @param {string} IMAGES_BOTTLEBAR - Paths to bottlebar animation frames
     */
    IMAGES_BOTTLEBAR = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png',
    ];
    /**
    * Array of image paths representing hp frames for the Charcater 
    * 
    * @type {string[]}
    * @param {string} IMAGES_HPBAR - Paths to hpbar animation frames
    */
    IMAGES_HPBAR = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png',
    ];
    /**
    * Array of image paths representing hp frames for the Endboss 
    * 
    * @type {string[]}
    * @param {string} IMAGES_ENDBOSSBAR - Paths to hpbar animation frames
    */
    IMAGES_ENBOSSBAR = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png',
    ];
    /**
   * Array of image paths representing coins frames for the World
   * 
   * @type {string[]}
   * @param {string} IMAGES_COINS - Paths to coins animation frames
   */
    IMAGES_COINS = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
    ];
    /**
   * Array of image paths representing bottle frames for the World
   * 
   * @type {string[]}
   * @param {string} IMAGES_COINS - Paths to bottles animation frames
   */
    IMAGES_BOTTLES = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    ];
    /**
    * Array of image paths representing flying frames for the Mosquito
    * 
    * @type {string[]}
    * @param {string} MOSQUITO_FLIGHT - Paths to flying mosquito animation frames
    */
    MOSQUITO_FLIGHT = [
        'img/10_enemies_mosquito/flight1.png',
        'img/10_enemies_mosquito/flight2.png',
        'img/10_enemies_mosquito/flight3.png',
    ];
    /**
      * Array of image paths representing dead frames for the Mosquito
      * 
      * @type {string[]}
      * @param {string} MOSQUITO_DEAD - Paths to dead mosquito animation frames
      */
    MOSQUITO_DEAD = [
        'img/10_enemies_mosquito/death1.png',
        'img/10_enemies_mosquito/death2.png',
        'img/10_enemies_mosquito/death3.png',
        'img/10_enemies_mosquito/death4.png',
    ];
    /**
     * Array of image paths representing throw => rotaion frames for the Bottle
     * 
     * @type {string[]}
     * @param {string} IMAGES_THROWBOTTLE - Paths to rotation bottle animation frames
     */
    IMAGES_THROWBOTTLE = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];
    /**
     * Array of image paths representing spalsh  frames for the Bottle
     * 
     * @type {string[]}
     * @param {string} IMAGES_SPLASH - Paths to splash bottle animation frames
     */
    IMAGES_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];

}