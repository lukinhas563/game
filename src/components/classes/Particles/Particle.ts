import Keyboard from "../Controls/Keyboard";
import Player from "../Player/Player";

export default abstract class Particle {
  constructor(
    protected scene: Phaser.Scene,
    protected player: Player,
    protected control: Keyboard
  ) {}

  abstract loadSprite(): void;

  abstract createParticle(): void;

  abstract updateParticle(): void;
}
