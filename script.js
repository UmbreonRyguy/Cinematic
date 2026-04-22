class Intro extends Phaser.Scene {
    constructor() {
        super("Intro");
    }
    preload() {
    }
    create() {
        this.add.text(10,10,"Click to start the cinematic!.");
        this.input.on('pointerdown', () => this.scene.start("Cinematic"));
    }
    update() {}

}

class Cinematic extends Phaser.Scene {
    constructor() {
        super("Cinematic");
    }
    preload() {
        this.load.image("starsbg", 'assets/starsBackground.jpg')
        this.load.image("WispFull", 'assets/WispMoving.gif')
        
        this.load.audio("Wisp1", 'assets/wisp1.wav')
        this.load.image("WispAlone", 'assets/WispAlone.gif')

        this.load.image("line1", 'assets/line1.png')
        this.load.image("line2", 'assets/line2.png')
        this.load.image("playText", 'assets/playText.png')
        this.load.image("loadText", 'assets/loadText.png')
        this.load.image("settingsText", 'assets/settingsText.png')

        this.load.image("loadingText", 'assets/loadingText.png')

        this.load.image("wispTitle", 'assets/wispTitle.png')
        this.load.image("star", 'assets/star.png')

        this.load.audio("Wisp2", 'assets/wisp2.wav')
        this.load.audio("bgm", 'assets/bg.mp3')

    }
    create() {

        let bg = this.add.image(400, 300, "starsbg");
        bg.setDisplaySize(800, 600);
        
        let wispIntro = this.add.sprite(400, 300, "WispFull");
        wispIntro.setDisplaySize(800, 600);

        let wispTitle = this.add.image(400, 100, "wispTitle");
        wispTitle.alpha = 0;

        let playText = this.add.image(307, 250, "playText");
        playText.alpha = 0;
        let loadText = this.add.image(300, 350, "loadText");
        loadText.alpha = 0;
        let settingsText = this.add.image(300, 450, "settingsText");
        settingsText.alpha = 0;

        let loadingText = this.add.image(700, 550, "loadingText");
        loadingText.alpha = 0;

        let wispAlone = this.add.sprite(50, 250, "WispAlone");
        wispAlone.angle = 90;
        wispAlone.alpha = 0;

        let line1 = this.add.image(400, 200, "line1");
        let line2 = this.add.image(380, 250, "line2");
        line1.alpha = 0;
        line2.alpha = 0;

        let star1 = this.add.image(150, 100, "star");
        let star2 = this.add.image(650, 150, "star");
        let star3 = this.add.image(200, 450, "star");
        let star4 = this.add.image(700, 500, "star");
        star1.alpha = 0;
        star2.alpha = 0;
        star3.alpha = 0;
        star4.alpha = 0;

        let wispSound1 = this.sound.add("Wisp1");

        let bgm = this.sound.add("bgm", { loop: true });

        let wispSound2 = this.sound.add("Wisp2");
        

        this.tweens.add({
            delay: 1000,
            targets: wispIntro,
            x: 400,
            y: -500,
            ease: 'Linear',
            duration: 2000,
            yoyo: false,
            repeat: 0,
            onComplete: () => {
                bgm.play();
            }
        });

        this.tweens.add({
            delay: 3000,
            targets: wispTitle,
            alpha: 1,
            duration: 2000,
            ease: 'Linear'
        });

        this.tweens.add({
            delay: 3500,
            targets: playText,
            alpha: 1,
            duration: 2000,
            ease: 'Linear'
        });

        this.tweens.add({
            delay: 3500,
            targets: wispAlone,
            alpha: 1,
            duration: 2000,
            ease: 'Linear'
        });

        this.tweens.add({
            delay: 3750,
            targets: loadText,
            alpha: 1,
            duration: 2000,
            ease: 'Linear'
        });

        this.tweens.add({
            delay: 4000,
            targets: settingsText,
            alpha: 1,
            duration: 2000,
            ease: 'Linear'
        });


        wispSound1.play();

         this.tweens.add({
            delay: 6000,
            targets: wispAlone,
            x: 1000,
            y: 250,
            ease: 'Quart.easeIn',
            duration: 1250,
            yoyo: false,
            repeat: 0,
            onComplete: () => {
                bgm.stop();
            }
        });

        this.tweens.add({
            delay: 6100,
            targets: [settingsText, loadText, playText, wispTitle, bg],
            alpha: 0,
            duration: 1250,
            ease: 'Linear'
        });


        this.tweens.add({
            delay: 7125,
            targets: loadingText,
            alpha: 1,
            duration: 500,
            ease: 'Linear'
        });
        this.tweens.add({
            delay: 7125,
            targets: wispAlone,
            x: 500,
            y: 400,
            ease: 'Linear',
            duration: 50,

        });

          this.tweens.add({
            delay: 8125,
            targets: loadingText,
            alpha: 0,
            duration: 500,
            ease: 'Linear',
            onComplete: () => {
                wispSound2.play();
            }
        });

        this.tweens.add({
            delay: 8500,
            targets: [star1, star2, star3, star4, line1],
            alpha: 1,
            duration: 1000,
            ease: 'Linear'
        });
        this.tweens.add({
            delay: 9500,
            targets: line2,
            alpha: 1,
            duration: 1000,
            ease: 'Linear'
        });
        this.tweens.add({
            delay: 10500,
            x: 375,
            y: 375,
            targets: wispTitle,
            duration: 1,
            ease: 'Linear'
        });
         this.tweens.add({
            delay: 10500,
            targets: wispTitle,
            alpha: 1,
            duration: 1000,
            ease: 'Linear'
        });

        this.tweens.add({
            delay: 14000,
            targets: [line1, line2, star1, star2, star3, star4, wispTitle],
            alpha: 0,
            duration: 1000,
            ease: 'Linear',
            onComplete: () => {                
                this.scene.start("Exit");
            }
        });
        
     
    }
    update() {}
}

class Exit extends Phaser.Scene {
    constructor() {
        super("Exit");
    }
    preload() {}
    create() {
        let textbox = this.add.text(300, 300, "This is the end of the cinematic.\nThank you for watching!");

    }

    update() {}
}



let config = {
    parent: "phaser-game",
    type: Phaser.AUTO, 
    width: 800,
    height: 600,
    backgroundColor: "#000000",
    scene: [Intro, Cinematic, Exit],
}

let game = new Phaser.Game(config);