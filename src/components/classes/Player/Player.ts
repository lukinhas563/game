export default abstract class Player {
  public isJump: boolean = false;
  protected health = 100;
  abstract sprite?: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

  constructor(protected scene: Phaser.Scene) {}

  abstract loadSprites(): void;

  abstract createPlayer(): void;

  abstract createAnimations(): void;

  loseHealth(attack: number) {
    this.health -= attack;
  }
}
