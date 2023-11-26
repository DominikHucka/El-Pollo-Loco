class CollectCoins extends MovableObject {
    y = 340
    width = 100;
    height = 100;
    offset = {
        bottom: 10,
        top: 10,
        left: 40,
        right: 20,
    };


    IMAGES_COINS = [
        'img/8_coin/coin_1.png',
    ]

    constructor() {
        super()
        this.loadImages(this.IMAGES_COINS);
        this.y = 200, (this.x = 500 + Math.random() * 1000);
        this.drawObjects();
    }


    drawObjects() {
        let path = this.IMAGES_COINS[0];
        this.img = this.imageChache[path];
    }
}