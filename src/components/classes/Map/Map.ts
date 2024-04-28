export default abstract class Map {
  constructor(protected scene: Phaser.Scene) {}

  abstract loadMap(): void;

  abstract createMap(): void;
}
