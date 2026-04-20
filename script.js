const { Phaser } = require("./lib/phaser");

class Cimenatic extends Phaser.Scene {
    constructor() {
        super("Cimenatic");
    }
    preload() {
        this.load.image("starsbg", '/assets/starsBackground.jpg')
        this.load.image("WispFull", '/assets/WispMoving.gif')
        this.load.image("WispAlone", '/assets/WispAlone.gif')

        this.load.image("line1", '/assets/line1.png')
        this.load.image("line2", '/assets/line2.png')
        this.load.image("playText", '/assets/playText.png')
        this.load.image("loadText", '/assets/loadText.png')
        this.load.image("settingsText", '/assets/settingsText.png')

        this.load.image("loadingText", '/assets/loadingText.png')

        this.load.image("wispTitle", '/assets/wispTitle.png')
        this.load.image("star", '/assets/star.png')

        this.load.audio("Wisp1", '/assets/wisp1.wav')
        this.load.audio("Wisp2", '/assets/wisp2.wav')
        this.load.audio("bgm", '/assets/bg.mp3')
        

    }
    create() {
        


    }
    update() {}

}

let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: "#000000",
    scene: [Cimenatic],
}

let game = new Phaser.Game(config);