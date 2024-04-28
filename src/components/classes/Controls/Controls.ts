import Player from "../Player/Player";

interface Keys {
  upKey: Phaser.Input.Keyboard.Key;
  downKey: Phaser.Input.Keyboard.Key;
  leftKey: Phaser.Input.Keyboard.Key;
  rightKey: Phaser.Input.Keyboard.Key;
}

export default abstract class Control {
  constructor(
    protected scene: Phaser.Scene,
    protected player: Player,
    protected keys?: Keys,
    private defaultVelocity = 200,
    private defaultJump = 350
  ) {}

  abstract createControls(): void;

  public configControls(): void {
    if (!this.player.sprite || !this.keys) return;

    if (this.keys.rightKey.isDown) {
      this.moveRight();
    } else if (this.keys.leftKey.isDown) {
      this.moveLeft();
    } else {
      this.player.sprite.setVelocityX(0);
    }

    if (this.keys.upKey.isDown && !this.player.isJump) {
      this.jump();
      this.player.isJump = true;
    }

    if (this.player.sprite.body.velocity.y > 0) {
      this.player.sprite.anims.play("fall", true);
    }

    if (this.player.sprite.body.onFloor()) {
      this.player.isJump = false;
    }

    if (
      !this.keys.rightKey.isDown &&
      !this.keys.leftKey.isDown &&
      !this.keys.upKey.isDown &&
      !this.player.isJump
    ) {
      this.player.sprite.anims.play("idle", true);
    }
  }

  private moveRight(): void {
    if (!this.player.sprite) return;

    this.player.sprite.setFlipX(false);
    this.player.sprite.setVelocityX(this.defaultVelocity);

    if (this.player.sprite.body.onFloor()) {
      this.player.sprite.anims.play("run", true);
    }
  }

  private moveLeft(): void {
    if (!this.player.sprite) return;

    this.player.sprite.setFlipX(true);
    this.player.sprite.setVelocityX(-this.defaultVelocity);

    if (this.player.sprite.body.onFloor()) {
      this.player.sprite.anims.play("run", true);
    }
  }

  private jump(): void {
    if (!this.player.sprite) return;

    this.player.sprite.setVelocityY(-this.defaultJump);

    this.player.sprite.anims.play("jump", true);
  }
}
