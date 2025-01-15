class Menu extends Phaser.Scene {
    constructor(){
        super("menueScene")
    }

    preload(){
        //loading sprites and such
        this.load.image('rocket', './assets/Rocket.png')
        this.load.image('spaceship', './assets/Ship.png')
        this.load.image('starfield', './assets/Background.png')
        

        //explosion
        this.load.spritesheet('explosion','./assets/explosion.png',
            {
                frameWidth: 64,
                frameHeight: 32,
                startFrame:0,
                endFrame: 9
            }
        )
    }

    create(){
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', {
                    start: 0, 
                    end: 9,
                    first: 0
                }),
            frameRate: 30
        })

        this.add.text(20, 20, "Rocket Patrol Menu")
        this.scene.start("playScene")
    }
}