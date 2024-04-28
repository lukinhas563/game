import Phaser from "phaser";
import GrassMap from "../components/classes/Map/GrassMap";
import Keyboard from "../components/classes/Controls/Keyboard";
import Player from "../components/classes/Player/Player";

export default class Demo extends Phaser.Scene {
  map = new GrassMap(this);
  player!: Player;
  control!: Keyboard;

  constructor() {
    super("GameScene");
  }

  init(data = { character: Player, control: Keyboard }) {
    const { character, control } = data;

    this.player = new character(this);
    this.control = new control(this, this.player);
  }

  preload() {
    this.map.loadMap();

    this.player.loadSprites();

    this.load.image("customCrosshair", "/assets/crosshair/crosshair007.png");
  }

  create() {
    this.map.createMap();

    if (!this.player || !this.control) return;
    this.player.createPlayer();

    this.control.createControls();

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
  }
}
