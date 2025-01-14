class Menu extends Phaser.Scene {
    constructor(){
        super("menueScene")
    }

    preload(){
        //loading sprites and such
        this.load.image('rocket', './assets/Rocket.png')
        this.load.image('spaceship', './assets/Ship.png')
        this.load.image('starfield', './assets/Background.png')
    }

    create(){
        this.add.text(20, 20, "Rocket Patrol Menu")
        this.scene.start("playScene")
    }
}