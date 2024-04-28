import Player from "./Player";

export default class PinkMan extends Player {
  constructor(scene: Phaser.Scene) {
    super(scene);
  }

  loadSprites(): void {
    // Idle
    this.scene.load.spritesheet(
      "pinkMan_idle",
      "/assets/character/pinkMan/Idle (32x32).png",
      {
        frameWidth: 32,
        frameHeight: 32,
      }
    );

    // Run
    this.scene.load.spritesheet(
      "pinkMan_run",
      "/assets/character/pinkMan/Run (32x32).png",
      {
        frameWidth: 32,
        frameHeight: 32,
      }
    );

    // Jump
    this.scene.load.spritesheet(
      "pinkMan_jump",
      "/assets/character/pinkMan/Jump (32x32).png",
      {
        frameWidth: 32,
        frameHeight: 32,
      }
    );

    // Fall
    this.scene.load.spritesheet(
      "pinkMan_fall",
      "/assets/character/pinkMan/Fall (32x32).png",
      {
        frameWidth: 32,
        frameHeight: 32,
      }
    );
  }

  createPlayer(): void {
    this.sprite = this.scene.physics.add
      .sprite(200, 400, "pinkMan_idle")
      .setSize(22, 32);

    this.createAnimations();
  }

  createAnimations(): void {
    // Idle
    this.scene.anims.create({
      key: "idle",
      frames: this.scene.anims.generateFrameNames("pinkMan_idle", {
        start: 0,
        end: 10,
      }),
      frameRate: 10,
      repeat: -1,
      yoyo: true,
    });

    // Run
    this.scene.anims.create({
      key: "run",
      frames: this.scene.anims.generateFrameNames("pinkMan_run", {
        start: 0,
        end: 11,
      }),
      frameRate: 10,
      repeat: -1,
    });

    // Jump
    this.scene.anims.create({
      key: "jump",
      frames: this.scene.anims.generateFrameNames("pinkMan_jump", {
        start: 0,
        end: 0,
      }),
    });

    // Fall
    this.scene.anims.create({
      key: "fall",
      frames: this.scene.anims.generateFrameNames("pinkMan_fall", {
        start: 0,
        end: 0,
      }),
    });

    this.sprite?.anims.play("idle", true);
  }
}
