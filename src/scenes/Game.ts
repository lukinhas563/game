import Phaser from "phaser";
import GrassMap from "../components/classes/Map/GrassMap";
import Keyboard from "../components/classes/Controls/Keyboard";
import Player from "../components/classes/Player/Player";
import Dust from "../components/classes/Particles/Dust";
import Particle from "../components/classes/Particles/Particle";

export default class Demo extends Phaser.Scene {
  player!: Player;
  control!: Keyboard;
  particle!: Particle;
  map = new GrassMap(this);

  constructor() {
    super("GameScene");
  }

  init(data = { character: Player, control: Keyboard }) {
    const { character, control } = data;

    this.player = new character(this);
    this.control = new control(this, this.player);
    this.particle = new Dust(this, this.player, this.control);
  }

  preload() {
    this.map.loadMap();

    this.player.loadSprites();
    this.particle.loadSprite();

    this.load.image("customCrosshair", "/assets/crosshair/crosshair007.png");
  }

  create() {
    this.map.createMap();

    if (!this.player || !this.control) return;

    this.player.createPlayer();
    this.control.createControls();
    this.particle.createParticle();

    // Colliders
    if (this.player.sprite && this.map.terrain) {
      this.physics.add.collider(this.player.sprite, this.map.terrain);
    }

    // Crosshair
    this.input.setDefaultCursor(
      "url(/assets/crosshair/crosshair007.png) 36 36, crossHair"
    );
  }

  update(time: number, delta: number): void {
    this.control.configControls();
    this.particle.updateParticle();
  }
}
