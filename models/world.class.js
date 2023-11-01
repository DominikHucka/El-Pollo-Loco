class World {
    character = new Character();
    enemies = [
        new Goblin(),
        new Goblin(),
        new Goblin(),
    ];

    backgroundObjects = [
        new FirstLevel('img/dungeon-platformer-pixel-art-tileset/PNG/Background/Bright/back_ruin_spots.png', 0),
        new FirstLevel('img/dungeon-platformer-pixel-art-tileset/PNG/Background/Bright/ruins_closer.png', 0),
        new FirstLevel('img/dungeon-platformer-pixel-art-tileset/PNG/Background/Bright/ruins_main.png', 0),
        new FirstLevel('img/dungeon-platformer-pixel-art-tileset/PNG/Background/Bright/ruins_low1.png', 0),
        new FirstLevel('img/dungeon-platformer-pixel-art-tileset/PNG/Background/Bright/chains.png', 0),
        new FirstLevel('img/dungeon-platformer-pixel-art-tileset/PNG/Background/Bright/floor_ruins.png', 0),
    ];
    
    canvas;
    ctx;
    keyboard;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectToMap(this.enemies);
        

        //draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addObjectToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        }) 
    }

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}