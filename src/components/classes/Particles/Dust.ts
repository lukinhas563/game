import Keyboard from "../Controls/Keyboard";
import Player from "../Player/Player";
import Particle from "./Particle";

export default class Dust extends Particle {
  emitter?: Phaser.GameObjects.Particles.ParticleEmitter;
  constructor(scene: Phaser.Scene, player: Player, control: Keyboard) {
    super(scene, player, control);
  }

  loadSprite(): void {
    this.scene.load.image("dust", "/assets/particle/Dust Particle.png");
  }

  createParticle(): void {
    if (this.player.sprite) {
      const particles = this.scene.add.particles("dust");

      this.emitter = particles.createEmitter({
        x: 0,
        y: 0,

        speedX: { min: -80, max: 80 },
        accelerationX: { random: [2, 5] },

        lifespan: { min: 100, max: 200 },
        scale: { random: [0, 1] },
        alpha: { random: [0.1, 0.8] },
        gravityY: 0,
        frequency: 5,
        blendMode: "ADD",
        follow: this.player.sprite,
        followOffset: { x: 0, y: 16 },
      });
    }
  }

  updateParticle(): void {
    if (!this.player.sprite || !this.emitter || !this.control.keys) return;

    if (
      this.player.sprite.body.onFloor() &&
      (this.control.keys.rightKey.isDown || this.control.keys.leftKey.isDown)
    ) {
      this.emitter.start();
    } else {
      this.emitter.stop();
    }
  }
}
