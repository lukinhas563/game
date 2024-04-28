import Phaser from "phaser";
import GrassMap from "../components/classes/Map/GrassMap";
import VirtualGuy from "../components/classes/Player/VirtualGuy";
import Keyboard from "../components/classes/Controls/Keyboard";

export default class Demo extends Phaser.Scene {
  map = new GrassMap(this);
  player = new VirtualGuy(this);
  control = new Keyboard(this, this.player);

  constructor() {
    super("GameScene");
  }

  preload() {
    this.map.loadMap();

    this.player.loadSprites();
  }

  create() {
    this.map.createMap();

    this.player.createPlayer();

    this.control.createControls();

    // Colliders
    if (this.player.sprite && this.map.terrain) {
      this.physics.add.collider(this.player.sprite, this.map.terrain);
    }
  }

  update(time: number, delta: number): void {
    this.control.configControls();
  }
}
