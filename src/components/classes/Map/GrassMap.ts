import Map from "./Map";

export default class GrassMap extends Map {
  terrain?: Phaser.Tilemaps.TilemapLayer;

  constructor(scene: Phaser.Scene) {
    super(scene);
  }

  loadMap(): void {
    this.scene.load.image("tilesetTerrain", "/assets/map/Terrain (16x16).png");
    this.scene.load.tilemapTiledJSON("map", "/settings/map.json");
  }

  createMap(): void {
    const map = this.scene.make.tilemap({ key: "map" });

    const tilesetTerrain = map.addTilesetImage("Terrain", "tilesetTerrain");

    this.terrain = map.createLayer("GroundGrass", tilesetTerrain, 0, 0);

    this.terrain.setCollisionByProperty({ collider: true });
  }
}
