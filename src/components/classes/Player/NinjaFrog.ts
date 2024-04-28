import Player from "./Player";

export default class NinjaFrog extends Player {
  constructor(scene: Phaser.Scene) {
    super(scene);
  }

  loadSprites(): void {
    // Idle
    this.scene.load.spritesheet(
      "ninjaFrog_idle",
      "/assets/character/ninjaFrog/Idle (32x32).png",
      {
        frameWidth: 32,
        frameHeight: 32,
      }
    );

    // Run
    this.scene.load.spritesheet(
      "ninjaFrog_run",
      "/assets/character/ninjaFrog/Run (32x32).png",
      {
        frameWidth: 32,
        frameHeight: 32,
      }
    );

    // Jump
    this.scene.load.spritesheet(
      "ninjaFrog_jump",
      "/assets/character/ninjaFrog/Jump (32x32).png",
      {
        frameWidth: 32,
        frameHeight: 32,
      }
    );

    // Fall
    this.scene.load.spritesheet(
      "ninjaFrog_fall",
      "/assets/character/ninjaFrog/Fall (32x32).png",
      {
        frameWidth: 32,
        frameHeight: 32,
      }
    );
  }

  createPlayer(): void {
    this.sprite = this.scene.physics.add
      .sprite(200, 400, "ninjaFrog_idle")
      .setSize(22, 32);

    this.createAnimations();
  }

  createAnimations(): void {
    // Idle
    this.scene.anims.create({
      key: "idle",
      frames: this.scene.anims.generateFrameNames("ninjaFrog_idle", {
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
      frames: this.scene.anims.generateFrameNames("ninjaFrog_run", {
        start: 0,
        end: 11,
      }),
      frameRate: 10,
      repeat: -1,
    });

    // Jump
    this.scene.anims.create({
      key: "jump",
      frames: this.scene.anims.generateFrameNames("ninjaFrog_jump", {
        start: 0,
        end: 0,
      }),
    });

    // Fall
    this.scene.anims.create({
      key: "fall",
      frames: this.scene.anims.generateFrameNames("ninjaFrog_fall", {
        start: 0,
        end: 0,
      }),
    });

    this.sprite?.anims.play("idle", true);
  }
}
