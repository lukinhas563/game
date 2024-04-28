import Phaser from "phaser";
import config from "./config";
import GameScene from "./scenes/Game";
import GameMenu from "./scenes/Menu";

new Phaser.Game(
  Object.assign(config, {
    scene: [GameMenu, GameScene],
  })
);
