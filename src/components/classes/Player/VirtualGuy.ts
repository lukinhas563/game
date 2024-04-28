import Player from "./Player";

export default class VirtualGuy extends Player {
  sprite: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody | undefined;

  constructor(scene: Phaser.Scene) {
    super(scene);
  }

  loadSprites(): void {
    // Idle
    this.scene.load.spritesheet(
      "virtualGuy_idle",
      "/assets/character/virtualGuy/Idle (32x32).png",
      {
        frameWidth: 32,
        frameHeight: 32,
      }
    );

    // Run
    this.scene.load.spritesheet(
      "virtualGuy_run",
      "/assets/character/virtualGuy/Run (32x32).png",
      {
        frameWidth: 32,
        frameHeight: 32,
      }
    );

    // Jump
    this.scene.load.spritesheet(
      "virtualGuy_jump",
      "/assets/character/virtualGuy/Jump (32x32).png",
      {
        frameWidth: 32,
        frameHeight: 32,
      }
    );

    // Fall
    this.scene.load.spritesheet(
      "virtualGuy_fall",
      "/assets/character/virtualGuy/Fall (32x32).png",
      {
        frameWidth: 32,
        frameHeight: 32,
      }
    );
  }

  createPlayer(): void {
    this.sprite = this.scene.physics.add.sprite(200, 400, "virtualGuy_idle");

    this.createAnimations();
  }

  createAnimations(): void {
    // Idle
    this.scene.anims.create({
      key: "idle",
      frames: this.scene.anims.generateFrameNames("virtualGuy_idle", {
        start: 0,
        end: 10,
      }),
      frameRate: 8,
      repeat: -1,
      yoyo: true,
    });

    // Run
    this.scene.anims.create({
      key: "run",
      frames: this.scene.anims.generateFrameNames("virtualGuy_run", {
        start: 0,
        end: 11,
      }),
      frameRate: 8,
      repeat: -1,
    });

    // Jump
    this.scene.anims.create({
      key: "jump",
      frames: this.scene.anims.generateFrameNames("virtualGuy_jump", {
        start: 0,
        end: 0,
      }),
    });

    // Fall
    this.scene.anims.create({
      key: "fall",
      frames: this.scene.anims.generateFrameNames("virtualGuy_fall", {
        start: 0,
        end: 0,
      }),
    });

    this.sprite?.anims.play("idle", true);
  }
}
