import Player from "../Player/Player";
import Control from "./Controls";

export default class Keyboard extends Control {
  constructor(scene: Phaser.Scene, player: Player) {
    super(scene, player);
  }

  createControls(): void {
    const spaceKey = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    const upKey = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.W
    );
    const downKey = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.S
    );
    const leftKey = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.A
    );
    const rightKey = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.D
    );

    this.keys = { upKey: spaceKey, downKey, leftKey, rightKey };
  }
}
