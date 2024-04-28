export default class Player {
  constructor(
    protected scene: Phaser.Scene,
    protected health = 100,
    public isJump = false,
    public sprite?: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
  ) {}

  loadSprites(): void {}

  createPlayer(): void {}

  createAnimations(): void {}

  loseHealth(attack: number) {
    this.health -= attack;
  }
}
