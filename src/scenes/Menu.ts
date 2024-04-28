import Phaser from "phaser";
import VirtualGuy from "../components/classes/Player/VirtualGuy";
import Keyboard from "../components/classes/Controls/Keyboard";
import PinkMan from "../components/classes/Player/PinkMan";
import Player from "../components/classes/Player/Player";
import NinjaFrog from "../components/classes/Player/NinjaFrog";

export default class Menu extends Phaser.Scene {
  constructor() {
    super("GameMenu");
  }

  preload() {}

  create() {
    // Mostrar opções de seleção de personagem (por exemplo, botões)
    let character1Button = this.add
      .text(100, 100, "Personagem 1", { color: "#ffffff" })
      .setInteractive();
    let character2Button = this.add
      .text(100, 150, "Personagem 2", { color: "#ffffff" })
      .setInteractive();
    let character3Button = this.add
      .text(100, 200, "Personagem 3", { color: "#ffffff" })
      .setInteractive();

    // Adicionar eventos de clique aos botões
    character1Button.on("pointerdown", () => {
      this.scene.start("GameScene", {
        character: VirtualGuy,
        control: Keyboard,
      });
    });

    character2Button.on("pointerdown", () => {
      this.scene.start("GameScene", {
        character: PinkMan,
        control: Keyboard,
      });
    });

    character3Button.on("pointerdown", () => {
      this.scene.start("GameScene", {
        character: NinjaFrog,
        control: Keyboard,
      });
    });
  }
}
