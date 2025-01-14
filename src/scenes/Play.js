class Play extends Phaser.Scene {
    constructor(){
        super("playScene")
    }

    create(){
        this.add.text(20, 20, "Rocket Patrol Menu")
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00ff00).setOrigin(0,0)//background
        

        //white boarders
        this.add.rectangle(0,0, game.config.width, borderUISize, 0xffffff).setOrigin(0,0)
        this.add.rectangle(0,game.config.height - borderUISize, game.config.width, borderUISize, 0xffffff).setOrigin(0,0)
        this.add.rectangle(0,0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0,0)
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xffffff).setOrigin(0,0)
    }
}